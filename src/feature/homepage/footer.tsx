import DiscordIcon from '@/components/icons/svg/discord'
import GithubIcon from '@/components/icons/svg/github'
import TwitterIcon from '@/components/icons/svg/twitter-x'
import { cn } from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'

import formbold from '@/assets/images/formbold.png'
import graygrids from '@/assets/images/graygrids.png'
import lineicons from '@/assets/images/lineicons.png'
import nextjstemplates from '@/assets/images/nextjstemplates.png'
import siteLogo from '@/assets/images/site-logo.png'
import tailadmin from '@/assets/images/tailadmin.png'
import uideck from '@/assets/images/uideck.png'

// Data
const socialLinks = [
  { id: 1, icon: TwitterIcon, href: '#', label: 'Twitter' },
  { id: 2, icon: GithubIcon, href: '#', label: 'GitHub' },
  { id: 3, icon: DiscordIcon, href: '#', label: 'Discord' },
]

const footerSections = [
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

const products = [
  { id: 1, src: lineicons, title: 'Line Icons' },
  { id: 2, src: tailadmin, title: 'Tailadmin' },
  { id: 3, src: nextjstemplates, title: 'Next Js Templates' },
  { id: 4, src: formbold, title: 'Form Bold' },
  { id: 5, src: graygrids, title: 'Gray Grids' },
  { id: 6, src: uideck, title: 'UI Deck' },
]

export const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main Footer Content */}
      <div className="border-t border-gray-200">
        <div className="px-4 py-20 md:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-12 space-y-7">
                <Image src={siteLogo} alt="Pimjo Logo" width={110} height={110} />
                <p className="max-w-md leading-6 text-[#6B7280]">
                  Browse and effortlessly copy-paste from over 800+ components and templates to
                  craft high-quality, custom Tailwind CSS websites without coding.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-1.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.id}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50"
                    >
                      <Icon />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="mt-7 md:mt-0">
                <h3
                  className={cn(
                    'font-geist-mono mb-3 font-bold text-[#6B7280] md:mb-7 md:font-medium'
                  )}
                >
                  {section.title}
                </h3>
                <ul className="flex flex-col space-y-3 md:space-y-[18px]">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="leading-6 text-[#374151] transition-colors hover:text-gray-900"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-4 md:px-10">
        <div className="mb-5 text-center md:text-left">
          <p className="leading-6 text-[#374151]">Explore our others products</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={cn('flex items-center justify-center border-t px-2 py-5 md:px-10', {
                'border-r': index < products.length - 1,
                'md:border-r-0': index === products.length - 1,
              })}
            >
              <Image src={product.src} alt={product.title} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-y border-gray-200 bg-[#F3F4F6] px-4 py-4 md:px-10">
        <div className="space-y-2 text-sm leading-5 tracking-[-0.2px] text-[#6B7280] md:space-y-2">
          <p className={cn('font-geist-mono font-medium')}>
            © Copyright 2025 - All rights reserved.
          </p>
          <p>
            The Tailwind name and logos are trademarks of Tailwind Labs Inc. is not affiliated with,
            associated with, or part of Tailwind Labs or the official Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
