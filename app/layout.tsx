import type { Metadata } from 'next'
import { DM_Sans, DM_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans"
});

const dmMono = DM_Mono({ 
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono"
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'OmniVital',
  description: 'Project Valuation & Product Roadmap',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {/* ElevenLabs Conversational AI Widget */}
        <Script 
          src="https://unpkg.com/@elevenlabs/convai-widget-embed" 
          async 
          strategy="lazyOnload"
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
