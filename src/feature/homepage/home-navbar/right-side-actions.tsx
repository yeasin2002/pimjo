import { Button } from '@/components/ui/button'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Disc, Github, Grid, Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import { NavItem, iconMap } from './nav-data'

interface Props {
  items: NavItem[]
}

export const RightSideActions = ({ items }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative hidden lg:block">
        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
        <input
          type="text"
          placeholder="Quick search..."
          className="border-input bg-background focus-visible:ring-ring h-9 w-64 rounded-md border pr-12 pl-9 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none"
        />
        <div className="bg-muted text-muted-foreground absolute top-2 right-2 flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </div>
      </div>

      {/* Social Icons */}
      <div className="hidden items-center gap-1 sm:flex">
        <Button variant="ghost" size="icon" className="text-muted-foreground h-9 w-9">
          <X className="h-4 w-4" />
          <span className="sr-only">Twitter</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground h-9 w-9">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground h-9 w-9">
          <Disc className="h-4 w-4" />
          <span className="sr-only">Discord</span>
        </Button>
      </div>

      {/* Auth & CTA */}
      <div className="hidden items-center gap-4 md:flex">
        <Link
          href="/sign-in"
          className="text-muted-foreground hover:text-foreground text-sm font-medium"
        >
          Sign in
        </Link>
        <Button variant={'secondary'}>Pricing & FAQ</Button>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center gap-2 px-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                <div className="h-4 w-4 rounded-full bg-white/30" />
              </div>
              <span className="text-xl font-bold">Logo</span>
            </div>
            <div className="px-2">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pl-9 text-sm shadow-sm focus-visible:ring-1 focus-visible:outline-none"
                />
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-2">
                  {item.type === 'mega' ? (
                    <div className="px-2 py-1">
                      <div className="mb-2 font-semibold">{item.label}</div>
                      <div className="grid gap-2 pl-2">
                        {item.columns?.map((col) => {
                          const Icon = iconMap[col.icon] || Grid
                          return (
                            <Link
                              key={col.title}
                              href={col.href}
                              className="hover:bg-accent flex items-center gap-2 rounded-md p-2 text-sm"
                            >
                              <Icon className="text-muted-foreground h-4 w-4" />
                              {col.title}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="hover:bg-accent rounded-md px-2 py-2 text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4 px-2">
              <Link href="/sign-in" className="text-sm font-medium">
                Sign in
              </Link>
              <Button variant={'secondary'}>Pricing & FAQ</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
