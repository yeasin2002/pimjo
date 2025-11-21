import { cn } from '@/lib/utils'

export const Copyright = () => {
  return (
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
  )
}
