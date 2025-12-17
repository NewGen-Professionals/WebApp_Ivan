# Stripe Payment Integration Setup

This guide will help you set up Stripe payments for the Saona Island Tours booking system.

## 1. Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Sign up for a free account
3. Complete your account setup

## 2. Get Your API Keys

1. Log in to your Stripe Dashboard
2. Click on **Developers** in the left sidebar
3. Click on **API keys**
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`)
   - **Secret key** (starts with `sk_test_...`) - Click "Reveal test key"

## 3. Configure Environment Variables

1. Create a `.env.local` file in the root of your project:

```bash
# Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# App URL (use your actual domain in production)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

2. Replace the placeholder keys with your actual Stripe keys

## 4. Install Dependencies

```bash
npm install
```

This will install the Stripe package along with other dependencies.

## 5. Test the Payment Flow

### Using Test Cards

Stripe provides test card numbers for testing:

- **Successful payment**: `4242 4242 4242 4242`
- **Declined payment**: `4000 0000 0000 0002`
- **Requires authentication**: `4000 0025 0000 3155`

For all test cards:
- Use any future expiration date (e.g., 12/34)
- Use any 3-digit CVC (e.g., 123)
- Use any ZIP code (e.g., 12345)

### Test the Booking Flow

1. Start the development server:
```bash
npm run dev
```

2. Go to `http://localhost:3000`
3. Click "Book Now" on any tour
4. Fill in the booking form:
   - Select a tour
   - Choose a date
   - Enter number of people
   - Fill in customer details
5. Click "Confirm & Pay"
6. You'll be redirected to Stripe Checkout
7. Use a test card number (e.g., `4242 4242 4242 4242`)
8. Complete the payment
9. You'll be redirected back to the success page

## 6. Webhook Setup (Optional - for production)

Webhooks allow Stripe to notify your app about payment events.

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Enter your webhook URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select events to listen for:
   - `checkout.session.completed`
   - `checkout.session.expired`
5. Copy the **Signing secret** (starts with `whsec_...`)
6. Add it to your `.env.local`:
```bash
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

## 7. Production Deployment

When deploying to production:

1. Switch from test keys to live keys:
   - Get your live keys from Stripe Dashboard (toggle "View test data" off)
   - Update environment variables with live keys (`pk_live_...` and `sk_live_...`)

2. Update `NEXT_PUBLIC_APP_URL` to your production domain:
```bash
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

3. Set up webhooks for your production domain

4. Test thoroughly with real cards before going live

## Payment Flow

1. **User fills booking form** → Customer enters tour details
2. **Click "Confirm & Pay"** → Creates Stripe Checkout session
3. **Redirect to Stripe** → Secure payment page hosted by Stripe
4. **Enter payment details** → Customer pays with card
5. **Payment processed** → Stripe handles the transaction
6. **Redirect back** → Success or cancel page
7. **Confirmation** → Booking reference provided

## Security Notes

- ✅ Never commit `.env.local` to git (it's in `.gitignore`)
- ✅ Never expose secret keys in client-side code
- ✅ Always use HTTPS in production
- ✅ Validate all data server-side
- ✅ Use Stripe's official libraries

## Support

- Stripe Documentation: [https://stripe.com/docs](https://stripe.com/docs)
- Stripe Testing: [https://stripe.com/docs/testing](https://stripe.com/docs/testing)
- Stripe Support: Available in your dashboard

## Troubleshooting

### "Stripe key not found" error
- Make sure `.env.local` exists and contains your keys
- Restart the dev server after adding environment variables

### Payment not redirecting
- Check that `NEXT_PUBLIC_APP_URL` is set correctly
- Verify success/cancel URLs in the checkout session

### Webhook not working
- Ensure webhook endpoint is publicly accessible
- Verify webhook secret is correct
- Check webhook event types are selected

---

**Ready to accept payments!** 🎉

Test the flow with the test card `4242 4242 4242 4242` and you're good to go!




