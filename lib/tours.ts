// Single source of truth for what can be booked and at what price.
// The checkout API reads prices from here, never from the browser.

export const LOCALES = ['en', 'es', 'fr', 'de'] as const
export type Locale = (typeof LOCALES)[number]

export type TourCatalogEntry = {
  slug: string
  /** Price per person, in USD. */
  price: number
  maxCapacity: number
  name: Record<Locale, string>
}

export const TOURS: Record<string, TourCatalogEntry> = {
  'saona-island-excursion': {
    slug: 'saona-island-excursion',
    price: 99,
    maxCapacity: 20,
    name: {
      en: 'Saona Island Excursion',
      es: 'Excursión a la Isla Saona',
      fr: "Excursion à l'île de Saona",
      de: 'Ausflug zur Insel Saona',
    },
  },
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

export function getTour(slug: unknown): TourCatalogEntry | null {
  if (typeof slug !== 'string') return null
  return Object.prototype.hasOwnProperty.call(TOURS, slug) ? TOURS[slug] : null
}
