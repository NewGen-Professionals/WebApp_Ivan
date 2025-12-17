import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { 
          error: 'Payment system not configured. Please contact support.',
          details: 'STRIPE_SECRET_KEY is missing. See STRIPE_SETUP.md for setup instructions.'
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { tourName, tourPrice, numberOfPeople, customerEmail, customerName, tourSlug, locale } = body

    const totalAmount = tourPrice * numberOfPeople

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: tourName,
              description: `Tour for ${numberOfPeople} ${numberOfPeople === 1 ? 'person' : 'people'}`,
            },
            unit_amount: Math.round(tourPrice * 100), // Convert to cents
          },
          quantity: numberOfPeople,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/${locale}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/${locale}/booking/cancel`,
      customer_email: customerEmail,
      metadata: {
        tourSlug,
        customerName,
        numberOfPeople: numberOfPeople.toString(),
        locale,
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

