import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Great_Vibes, Montserrat } from 'next/font/google'
import React from "react"
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans"
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script"
});

export const metadata: Metadata = {
  title: 'José Luis & Lorena - Nuestra Boda',
  description: 'Te invitamos a celebrar nuestra boda - 18 de Marzo de 2026 en Tolú, Sucre',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
      },
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
