import type { Metadata } from 'next'
import type React from 'react'
import '../styles/globals.css'

import { rootMetadata } from '#/config/root-metadata'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'react-hot-toast'
import { StripesPatternWrapper } from '../components/shared'
import { fontVariable } from '../lib/fonts'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariable} overflow-x-hidden antialiased`}>
        <StripesPatternWrapper>
          <NuqsAdapter>{children}</NuqsAdapter>
          <SpeedInsights />
        </StripesPatternWrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}

export const metadata: Metadata = { ...rootMetadata }
