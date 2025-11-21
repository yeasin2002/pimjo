import Logo from '@/assets/icons/Logo.svg'

import { DesktopNavigation } from './desktop-navigationt'
import { HomeNavSmall } from './home-nav-small'
import { getMenuData } from './nav-data'
import { RightSideActions } from './right-side-actions'

export async function HomeNavbar() {
  const items = await getMenuData()
  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Logo />
        <div className="hidden lg:flex">
          <DesktopNavigation items={items} />
          <RightSideActions items={items} />
        </div>
        <HomeNavSmall items={items} />
      </div>
    </header>
  )
}
