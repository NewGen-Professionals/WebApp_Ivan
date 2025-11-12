'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-caribbean-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Saona Island Stars</h3>
            <p className="text-blue-100 mb-4">
              Av. Barceló km 3.5 Plaza Alondra<br />
              23301 Bavaro Dominican Republic
            </p>
            <div className="space-y-2 text-blue-100">
              <p>📧 info@saona-island-stars.com</p>
              <p>📞 +1 829 814 8619</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/tours`} className="text-blue-100 hover:text-white transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#about`} className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#contact`} className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/legal`} className="text-blue-100 hover:text-white transition-colors">
                  {t('legalNotice')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy`} className="text-blue-100 hover:text-white transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cookies`} className="text-blue-100 hover:text-white transition-colors">
                  {t('cookies')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-blue-100 hover:text-white transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
          <p>© {currentYear} Saona Island Stars - {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}

