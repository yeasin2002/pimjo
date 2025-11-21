'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const VersionNoticeTopBar = () => {
  const [isVisible, setIsVisible] = useState(true)
  if (!isVisible) return null
  return (
    <div className="bg-sec w-full rounded-xl py-3 text-center">
      <div className="flex items-center justify-between">
        <div></div>
        <div className="space-x-2.5">
          <span className="text-sm leading-5 tracking-[-0.2px] text-[#6B7280]">
            {' '}
            We just raised our biggest updates - <br className="block md:hidden" />
            <span className="font-semibold">Brand V3.0 🎉</span>
          </span>
          <Button variant={'outline'}>
            Check it out
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>

          <Link
            href="/blog/introducing-pimjo-v3-our-biggest-update-yet"
            className="inline-flex cursor-pointer items-center rounded-full text-sm leading-4 font-medium tracking-[-0.2px] text-[#374151] italic underline md:hidden"
          >
            Check it out <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <Button
          onClick={() => setIsVisible(false)}
          className="bg-sec hover:bg-sec mr-2 cursor-pointer"
        >
          <X className="size-5 cursor-pointer text-[#9CA3AF]" />
        </Button>
      </div>
    </div>
  )
}
