import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { getTour, isLocale } from '@/lib/tours'

export const runtime = 'edge';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 })
}

export async function POST(request: Request) {
  try {
    let body: any
    try {
      body = await request.json()
    } catch {
      return badRequest('Invalid request.')
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return badRequest('Invalid request.')
    }

    const { tourSlug, tourPrice, numberOfPeople, customerEmail, customerName, locale } = body

    // The tour and its price come from the server-side catalog, never from the browser.
    const tour = getTour(tourSlug)
    if (!tour) {
      return badRequest('Unknown tour.')
    }

    // If the page sends the price it displayed, it must match the current one,
    // so nobody is charged a different amount than the one they saw.
    if (tourPrice !== undefined && tourPrice !== tour.price) {
      return badRequest('The price has changed. Please reload the page and try again.')
    }

    if (!Number.isInteger(numberOfPeople) || numberOfPeople < 1 || numberOfPeople > tour.maxCapacity) {
      return badRequest('Invalid number of people.')
    }

    if (!isLocale(locale)) {
      return badRequest('Invalid language.')
    }

    if (typeof customerEmail !== 'string' || customerEmail.length > 254 || !EMAIL_RE.test(customerEmail)) {
      return badRequest('Invalid email address.')
    }

    const safeName = typeof customerName === 'string' ? customerName.trim().slice(0, 200) : ''

    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Payment system not configured. Please contact support.' },
        { status: 500 }
      )
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: tour.name[locale],
              description: `Tour for ${numberOfPeople} ${numberOfPeople === 1 ? 'person' : 'people'}`,
            },
            unit_amount: Math.round(tour.price * 100), // Convert to cents
          },
          quantity: numberOfPeople,
        },
      ],
      mode: 'payment',
      success_url: `${appUrl}/${locale}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/${locale}/booking/cancel`,
      customer_email: customerEmail,
      metadata: {
        tourSlug: tour.slug,
        customerName: safeName,
        numberOfPeople: numberOfPeople.toString(),
        locale,
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    // Log the type only: Stripe errors can carry request details.
    console.error('Error creating checkout session:', error?.type || error?.name || 'unknown')
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
