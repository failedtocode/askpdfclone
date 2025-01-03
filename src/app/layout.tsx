import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from '@vercel/analytics/next';

import './globals.css'
import Providers from '@/components/Providers'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'askPDF',
  description: 'ask questions to your pdf'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
    afterSignOutUrl='/abcd'
    >
      <Providers>
        <html lang='en' suppressHydrationWarning>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ThemeProvider
              attribute='class'
              defaultTheme='light'
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Analytics />
              <Toaster position="top-center" />
            </ThemeProvider>
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  )
}
