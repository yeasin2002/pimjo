import type { Metadata } from 'next'

export const rootMetadata: Metadata = {
  title: {
    default: `Pimjo: We Build Tools to Create What's Next on the Web`,
    template: '%s | Pimjo',
  },
  description:
    'Pimjo empowers developers with intuitive web tools to build smarter, faster, and more confidently, converting visionary ideas into high-impact solutions.',
  keywords: [
    'Web Development Tools',
    'Developer Tools',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'UI Components',
    'Templates',
    'SaaS Boilerplate',
  ],
  authors: [{ name: 'Pimjo' }],
  creator: 'Pimjo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pimjo.com',
    title: `Pimjo: We Build Tools to Create What's Next on the Web`,
    description:
      'Pimjo empowers developers with intuitive web tools to build smarter, faster, and more confidently, converting visionary ideas into high-impact solutions.',
    siteName: 'Pimjo',
    images: [
      {
        url: 'https://cdn.sanity.io/images/x0ivb4tp/production/01d61af81e97c5e441cd528694e06cefb0bb2b5e-1800x1092.jpg',
        width: 1800,
        height: 1092,
        alt: 'Pimjo - Web Development Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Pimjo: We Build Tools to Create Whats Next on the Web    description:     'Pimjo empowers developers with intuitive web tools to build smarter, faster, and more confidently, converting visionary ideas into high-impact solutions.`,
    images: [
      'https://cdn.sanity.io/images/x0ivb4tp/production/01d61af81e97c5e441cd528694e06cefb0bb2b5e-1800x1092.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
