import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"] });
const _lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'JRV Overseas - Premium Rice & Packaging Exports',
  description: 'Premium organic Kavuni rice and corrugated packaging solutions from Tamil Nadu, India. International B2B export company providing quality agricultural products.',
  generator: 'BKB Incorporation',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: '/JRV-logo1.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/JRV-logo1.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/JRV-logo1.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/JRV-logo1.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
