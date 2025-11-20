import { Toaster } from '@/components/ui/toaster'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'
import '../styles/globals.css'

import { rootMetadata } from '#/config/root-metadata'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

export const metadata: Metadata = { ...rootMetadata }
