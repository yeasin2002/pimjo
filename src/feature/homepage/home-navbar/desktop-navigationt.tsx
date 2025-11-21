import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Grid } from 'lucide-react'
import Link from 'next/link'
import { NavItem, iconMap } from './nav-data'

interface Props {
  items: NavItem[]
}

export const DesktopNavigation = ({ items }: Props) => {
  return (
    <div className="hidden md:flex md:flex-1">
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.id}>
              {item.type === 'mega' ? (
                <>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.columns?.map((col) => {
                        const Icon = iconMap[col.icon] || Grid
                        return (
                          <li key={col.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={col.href}
                                className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                              >
                                <div className="flex items-center gap-2 text-sm leading-none font-medium">
                                  <Icon className="text-muted-foreground h-4 w-4" />
                                  {col.title}
                                </div>
                                <p className="text-muted-foreground line-clamp-2 pl-6 text-sm leading-snug">
                                  {col.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href={item.href || '#'}
                >
                  {item.label}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
