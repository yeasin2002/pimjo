'use client'

import Logo from '@/assets/icons/Logo.svg'
import Link from 'next/link'
import { DashboardNavLarage } from './dashboard-nav-larage'
import { DashboardNavSmall } from './dashboard-nav-small'

export const DashboardNav = () => {
  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <DashboardNavLarage />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DashboardNavSmall />
        </div>
      </div>
    </header>
  )
}
