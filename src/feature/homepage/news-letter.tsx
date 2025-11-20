import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronRight, Mail } from "lucide-react";

export const NewsLetter = () => {
  return (
    <div className="w-full bg-[#030712] py-20">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Border Wrapper */}
        <div className="border border-[#1A1E28] md:border-x-0 md:border-y">
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0">
            {/* Title Section */}
            <div className="flex items-center justify-center md:border-r border-[#1A1E28] p-6">
              <h4
                className={cn(
                  "text-white font-medium text-4xl leading-10 tracking-[-2px] font-geist-mono"
                  // geistMono.className
                )}
              >
                Newsletter
              </h4>
            </div>

            {/* Description Section */}
            <div className="col-span-1 md:col-span-2 md:border-r border-[#1A1E28] flex items-center p-6">
              <p className="text-[#9CA3AF] text-base leading-6 tracking-[-0.2px] max-w-md text-center md:text-left">
                Get fresh updates, free resources, exclusive offers, and product
                news—straight to your inbox.
              </p>
            </div>

            {/* Form Section */}
            <div className="col-span-1 md:col-span-2 flex items-center p-6">
              <form className="w-full">
                {/* Desktop Input with Button */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 z-10" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-10 pr-2 md:pr-40 py-3 h-[63px] w-full rounded-none border-none bg-[#111827] text-white placeholder:text-slate-500"
                    required
                  />
                  <button
                    type="submit"
                    className="hidden md:flex items-center justify-center gap-2 absolute right-3 top-1/2 -translate-y-1/2 px-6 py-3 h-[46px] bg-white text-black rounded-full hover:bg-gray-100 transition-colors font-medium"
                  >
                    Get Offers <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Button */}
                <button
                  type="submit"
                  className="md:hidden flex items-center justify-center gap-2 w-full max-w-[149px] mx-auto mt-4 px-6 py-3 h-[46px] bg-white text-black rounded-full hover:bg-gray-100 transition-colors font-medium"
                >
                  Get Offers <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
