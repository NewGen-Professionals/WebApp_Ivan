# Saona Island Tours - Tour Booking Website

A modern, multi-language tour booking website for Saona Island excursions with integrated Stripe payments.

## 🌟 Features

- ✅ **Multi-language Support** - English, Spanish, French, German
- ✅ **6 Tour Options** - Relax, Adventure, and Party categories
- ✅ **Interactive Booking System** - 3-step booking process
- ✅ **Stripe Payment Integration** - Secure payment processing
- ✅ **Responsive Design** - Works on all devices
- ✅ **Caribbean-themed UI** - Beautiful, modern design

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Set Up Stripe (Required for Payments)

1. Create a free account at [stripe.com](https://stripe.com)
2. Get your test API keys from the [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
3. Update `.env.local` with your keys:

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

📖 **Detailed Stripe setup guide**: See [STRIPE_SETUP.md](./STRIPE_SETUP.md)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 🧪 Testing Payments

Use Stripe test cards:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Use any future date, any CVC, any ZIP

## 📁 Project Structure

```
├── app/
│   ├── [locale]/           # Multi-language routes
│   │   ├── page.tsx        # Homepage
│   │   ├── booking/        # Booking pages
│   │   └── tours/          # Tours listing
│   ├── api/                # API routes
│   │   └── create-checkout-session/  # Stripe integration
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # UI components
│   └── tours/              # Tour components
├── messages/               # Translation files
│   ├── en.json
│   ├── es.json
│   ├── fr.json
│   └── de.json
└── lib/
    └── stripe.ts           # Stripe configuration
```

## 🌍 Supported Languages

- 🇬🇧 English (EN)
- 🇪🇸 Spanish (ES)
- 🇫🇷 French (FR)
- 🇩🇪 German (DE)

## 🎨 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Payments**: Stripe
- **i18n**: next-intl

## 📝 Available Tours

1. **Saona Classic** ($89) - Most popular beach tour
2. **Saona VIP Experience** ($149) - Exclusive small group
3. **Saona Party Boat** ($99) - DJ and unlimited drinks
4. **Saona Adventure Tour** ($119) - Speedboat and kayaking
5. **Saona Sunset Romance** ($179) - Romantic couples tour
6. **Saona Family Fun** ($79) - Family-friendly activities

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```bash
# Stripe (Required)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📱 Features Walkthrough

### Homepage
- Hero section with CTA
- Benefits section
- All 6 tours with category filter
- Testimonials
- Contact form

### Booking Flow
1. **Step 1**: Select tour, date, and number of people
2. **Step 2**: Enter customer information
3. **Step 3**: Review and confirm
4. **Payment**: Redirect to Stripe Checkout
5. **Success**: Confirmation page with booking reference

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

Works on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted

## 📞 Contact

- **Email**: info@saona-island-stars.com
- **Phone**: +1 829 814 8619
- **Address**: Av. Barceló km 3.5, Bavaro, Dominican Republic

## 📄 License

Private project for NewGen Professionals

---

**Built with ❤️ for Saona Island Tours**
