import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import ClientProvider from '../components/providers/ClientProvider';

export const metadata = {
  metadataBase: new URL('https://discussionwiththechangemakers.com'),
  title: {
    default: 'Discussion With The Changemakers',
    template: '%s | Discussion With The Changemakers',
  },
  description: 'Discussion with the Changemakers is a youth-driven platform empowering young people to address urban challenges through innovation, dialogue, and collaboration with city leaders.',
  keywords: ['DWC', 'Changemakers', 'youth empowerment', 'urban development', 'Chattogram', 'city leaders', 'innovation', 'collaboration'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://discussionwiththechangemakers.com',
    siteName: 'Discussion With The Changemakers',
    images: [
      {
        url: '/images/dwc-social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Discussion With The Changemakers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discussion With The Changemakers',
    description: 'Discussion with the Changemakers is a youth-driven platform empowering young people to address urban challenges through innovation, dialogue, and collaboration with city leaders.',
    images: ['/images/dwc-social-share.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-white">
        <ClientProvider>
          {children}
        </ClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
