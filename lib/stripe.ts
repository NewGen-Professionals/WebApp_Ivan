import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('⚠️  STRIPE_SECRET_KEY is not defined in environment variables')
  console.error('📝 Please add it to your .env.local file')
  console.error('💡 See STRIPE_SETUP.md for instructions')
}

export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-02-24.acacia',
      typescript: true,
    })
  : null as any

