import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';
import './globals.css';

const playfairDisplay = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Privelle | Private Luxury for Modern Couples',
  description:
    'Privelle creates hand-curated intimate wellness boxes, couple gifting experiences, and premium private celebration kits with discreet packaging and WhatsApp enquiries.',
  keywords: [
    'Privelle',
    'couple gifting',
    'intimate wellness box',
    'first night box',
    'honeymoon kit',
    'anniversary gift box',
    'couple gift box India',
    'discreet gifting',
    'luxury couple gifts',
  ],
  authors: [{ name: 'Privelle' }],
  metadataBase: new URL('https://privelle.in'),
  icons: {
    icon: '/images/placeholders/logo.png',
    shortcut: '/images/placeholders/logo.png',
    apple: '/images/placeholders/logo.png',
  },
  openGraph: {
    title: 'Privelle | Private Luxury for Modern Couples',
    description:
      'Hand-curated luxury couple gifting boxes with discreet packaging, premium curation, and private WhatsApp support.',
    type: 'website',
    siteName: 'Privelle',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privelle | Private Luxury for Modern Couples',
    description:
      'Hand-curated luxury couple gifting boxes with discreet packaging, premium curation, and private WhatsApp support.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#111111',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-champagneGold focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-matteBlack"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
