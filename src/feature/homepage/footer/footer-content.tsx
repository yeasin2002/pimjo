import siteLogo from '@/assets/images/site-logo.png'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { footerSections, socialLinks } from './footer-data'

export const FooterContent = () => {
  return (
    <div className="border-t border-gray-200">
      <div className="px-4 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-12 space-y-7">
              <Image src={siteLogo} alt="Pimjo Logo" width={110} height={110} />
              <p className="max-w-md leading-6 text-[#6B7280]">
                Browse and effortlessly copy-paste from over 800+ components and templates to craft
                high-quality, custom Tailwind CSS websites without coding.
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
  )
}
