'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Download, FileText, LayoutDashboard, LogOut, Menu } from 'lucide-react'

import DiscordIcon from '@/components/icons/svg/discord'
import GithubIcon from '@/components/icons/svg/github'
import TwitterIcon from '@/components/icons/svg/twitter-x'
import UesrIcon from '@/components/icons/svg/user-icon'

import { Separator } from '@/components/ui/separator'
import { signOut, useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const DashboardNavSmall = () => {
  const [open, setOpen] = useState(false)
  const { data } = useSession()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await signOut()
      setOpen(false)
      router.refresh()
      return router.push('/sign-in')
    } catch (error) {
      console.log(error)
    }
  }

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', onClick: () => setOpen(false) },
    { icon: Download, label: 'Downloads', onClick: () => setOpen(false) },
    { icon: FileText, label: 'Billing', onClick: () => setOpen(false) },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <div className="flex h-full flex-col gap-6 py-4">
          {/* User Info */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-secondary flex h-10 w-10 items-center justify-center rounded-full">
                <UesrIcon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm leading-none font-medium">
                  {data?.user?.name || 'Guest User'}
                </p>
                <p className="text-muted-foreground mt-1 text-xs leading-none">
                  {data?.user?.email || 'guest@example.com'}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Menu Items */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="hover:bg-accent flex items-center gap-3 rounded-md px-3 py-3 transition-colors"
              >
                <item.icon className="h-5 w-5 text-[#9CA3AF]" />
                <span className="text-sm font-medium text-[#1F2937]">{item.label}</span>
              </button>
            ))}
          </nav>

          <Separator />

          {/* Social Icons */}
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground text-xs font-medium uppercase">Connect with us</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon-sm" className="h-9 w-9 text-[#9CA3AF]">
                <TwitterIcon />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon-sm" className="h-9 w-9 text-[#9CA3AF]">
                <GithubIcon />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon-sm" className="h-9 w-9 text-[#9CA3AF]">
                <DiscordIcon />
                <span className="sr-only">Discord</span>
              </Button>
            </div>
          </div>

          {/* Logout Button */}
          <div className="mt-auto">
            <Separator className="mb-4" />
            <button
              onClick={handleLogout}
              className="hover:bg-destructive/10 flex w-full items-center gap-3 rounded-md px-3 py-3 text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span className="text-sm font-medium">Log out</span>
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
