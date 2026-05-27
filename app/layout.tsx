import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
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
  description: 'Discover curated intimate wellness and couple gifting boxes designed for modern partnerships. Premium, discreet, and thoughtfully crafted.',
  keywords: ['couple gifts', 'luxury', 'wellness', 'intimate', 'gifting'],
  authors: [{ name: 'Privelle' }],
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
        {children}
      </body>
    </html>
  );
}
