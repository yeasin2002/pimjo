import DiscordIcon from '@/components/icons/svg/discord'
import GithubIcon from '@/components/icons/svg/github'
import TwitterIcon from '@/components/icons/svg/twitter-x'

import formbold from '@/assets/images/formbold.png'
import graygrids from '@/assets/images/graygrids.png'
import lineicons from '@/assets/images/lineicons.png'
import nextjstemplates from '@/assets/images/nextjstemplates.png'
import tailadmin from '@/assets/images/tailadmin.png'
import uideck from '@/assets/images/uideck.png'

// Data
export const socialLinks = [
  { id: 1, icon: TwitterIcon, href: '#', label: 'Twitter' },
  { id: 2, icon: GithubIcon, href: '#', label: 'GitHub' },
  { id: 3, icon: DiscordIcon, href: '#', label: 'Discord' },
]

export const footerSections = [
  {
    title: 'Resources',
    links: [
      { text: 'Update Logs', href: '/' },
      { text: 'Roadmap', href: '/' },
      { text: 'Tailwind UI Components', href: '/' },
      { text: 'Tailwind CSS', href: '/' },
      { text: 'Tailwind Figma', href: '/' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { text: 'License', href: '/' },
      { text: 'Privacy policy', href: '/' },
      { text: 'Refund Policy', href: '/' },
      { text: 'Free Download', href: '/' },
      { text: 'NPM Package', href: '/' },
    ],
  },
  {
    title: 'Help and Support',
    links: [
      { text: 'Support', href: '/' },
      { text: 'Docs', href: '/' },
      { text: 'Faqs', href: '/' },
      { text: 'Community', href: '/' },
      { text: 'Blog', href: '/' },
    ],
  },
]

export const products = [
  { id: 1, src: lineicons, title: 'Line Icons' },
  { id: 2, src: tailadmin, title: 'Tailadmin' },
  { id: 3, src: nextjstemplates, title: 'Next Js Templates' },
  { id: 4, src: formbold, title: 'Form Bold' },
  { id: 5, src: graygrids, title: 'Gray Grids' },
  { id: 6, src: uideck, title: 'UI Deck' },
]
