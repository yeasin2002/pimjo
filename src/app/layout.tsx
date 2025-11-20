

import type { Metadata } from 'next'
import type React from 'react'
import '../styles/globals.css'

import { rootMetadata } from '#/config/root-metadata'
import { Toaster } from 'react-hot-toast'
import { DiagonalPattern } from '../components/shared'
import { fontVariable } from '../lib/fonts'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontVariable} antialiased  overflow-x-hidden`}>
        <DiagonalPattern.DiagonalPatternWrapper>
          {children}
        </DiagonalPattern.DiagonalPatternWrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}

export const metadata: Metadata = { ...rootMetadata }
