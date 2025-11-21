import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { ChevronRight, Mail } from 'lucide-react'

export const NewsLetter = () => {
  return (
    <div className="w-full bg-[#030712] py-20">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4">
        {/* Border Wrapper */}
        <div className="border border-[#1A1E28] md:border-x-0 md:border-y">
          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-0">
            {/* Title Section */}
            <div className="flex items-center justify-center border-[#1A1E28] p-6 md:border-r">
              <h4
                className={cn(
                  'font-geist-mono text-4xl leading-10 font-medium tracking-[-2px] text-white'
                  // geistMono.className
                )}
              >
                Newsletter
              </h4>
            </div>

            {/* Description Section */}
            <div className="col-span-1 flex items-center border-[#1A1E28] p-6 md:col-span-2 md:border-r">
              <p className="max-w-md text-center text-base leading-6 tracking-[-0.2px] text-[#9CA3AF] md:text-left">
                Get fresh updates, free resources, exclusive offers, and product news—straight to
                your inbox.
              </p>
            </div>

            {/* Form Section */}
            <div className="col-span-1 flex items-center p-6 md:col-span-2">
              <form className="w-full">
                {/* Desktop Input with Button */}
                <div className="relative">
                  <Mail className="absolute top-1/2 left-4 z-10 h-5 w-5 -translate-y-1/2 text-slate-500" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="h-[63px] w-full rounded-none border-none bg-[#111827] py-3 pr-2 pl-10 text-white placeholder:text-slate-500 md:pr-40"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-1/2 right-3 hidden h-[46px] -translate-y-1/2 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-100 md:flex"
                  >
                    Get Offers <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Mobile Button */}
                <button
                  type="submit"
                  className="mx-auto mt-4 flex h-[46px] w-full max-w-[149px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-100 md:hidden"
                >
                  Get Offers <ChevronRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
