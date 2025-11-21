'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Disc, Github, Grid, Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { iconMap, type NavItem } from './nav-data'

interface Props {
  items: NavItem[]
}

export const HomeNavSmall = ({ items }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="ml-auto md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[350px]">
          <div className="flex h-full flex-col gap-6 py-4">
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Quick search..."
                  className="border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-2 pl-9 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none"
                />
              </div>
            </div>

            <Separator />

            <nav className="flex flex-col gap-2">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-2">
                  {item.type === 'mega' ? (
                    <div className="flex flex-col gap-2">
                      <div className="px-3 py-2 text-sm font-semibold text-[#1F2937]">
                        {item.label}
                      </div>
                      <div className="flex flex-col gap-1 pl-2">
                        {item.columns?.map((col) => {
                          const Icon = iconMap[col.icon] || Grid
                          return (
                            <Link
                              key={col.title}
                              href={col.href}
                              onClick={() => setOpen(false)}
                              className="hover:bg-accent flex flex-col gap-1 rounded-md px-3 py-3 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4 text-[#9CA3AF]" />
                                <span className="text-sm font-medium text-[#1F2937]">
                                  {col.title}
                                </span>
                              </div>
                              <p className="text-muted-foreground pl-6 text-xs leading-snug">
                                {col.description}
                              </p>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      onClick={() => setOpen(false)}
                      className="hover:bg-accent flex items-center rounded-md px-3 py-3 transition-colors"
                    >
                      <span className="text-sm font-medium text-[#1F2937]">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <Separator />

            <div className="flex flex-col gap-3">
              <p className="text-muted-foreground px-3 text-xs font-medium uppercase">
                Connect with us
              </p>
              <div className="flex items-center gap-2 px-3">
                <Button variant="outline" size="icon-sm" className="h-9 w-9 text-[#9CA3AF]">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon-sm" className="h-9 w-9 text-[#9CA3AF]">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="outline" size="icon-sm" className="h-9 w-9 text-[#9CA3AF]">
                  <Disc className="h-4 w-4" />
                  <span className="sr-only">Discord</span>
                </Button>
              </div>
            </div>

            <div className="mt-auto">
              <Separator className="mb-4" />
              <div className="flex flex-col gap-3 px-3">
                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                >
                  Sign in
                </Link>
                <Button variant="secondary" className="w-full" onClick={() => setOpen(false)}>
                  Pricing & FAQ
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
