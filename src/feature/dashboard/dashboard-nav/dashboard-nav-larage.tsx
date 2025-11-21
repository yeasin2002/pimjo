import { Button } from '@/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Download, FileText, LayoutDashboard, LogOut } from 'lucide-react'

import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import DiscordIcon from '@/components/icons/svg/discord'
import GithubIcon from '@/components/icons/svg/github'
import TwitterIcon from '@/components/icons/svg/twitter-x'
import UesrIcon from '@/components/icons/svg/user-icon'

import { signOut, useSession } from '@/lib/auth-client'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export const DashboardNavLarage = () => {
  const [open, setOpen] = useState(false)
  const { data } = useSession()
  const handleLogout = () => {
    try {
      signOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
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

        {/* Account Dropdown */}
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="gap-2">
              <UesrIcon className="h-4 w-4" />
              Account
              <ArrowDownIcon
                className={cn('h-4 w-4 transition-transform', open ? 'rotate-180' : '')}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="mt-4 w-56">
            <DropdownMenuLabel className="pt-3">
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium"> {data?.user?.name} </p>
                <p className="text-muted-foreground text-xs leading-none">{data?.user?.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="mt-2 cursor-pointer">
              <LayoutDashboard className="mr-2 h-4 w-4 text-[#9CA3AF]" />
              <span className="font-medium text-[#1F2937]">Overview</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="mt-2 cursor-pointer">
              <Download className="mr-2 h-4 w-4 text-[#9CA3AF]" />
              <span className="font-medium text-[#1F2937]">Downloads</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="mt-2 cursor-pointer">
              <FileText className="mr-2 h-4 w-4 text-[#9CA3AF]" />
              <span className="font-medium text-[#1F2937]">Billing</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4 text-[#9CA3AF]" />
              <span className="font-medium text-[#1F2937]">Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
