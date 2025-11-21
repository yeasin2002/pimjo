import FigmaIcon from '@/assets/icons/figma.svg'
import figmaWebView from '@/assets/images/figma-web-view.jpg'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className="relative -mt-px overflow-hidden bg-[url('/hero-gradients.png')] bg-size-[auto_650px] bg-position-[center_top_-0.9rem] bg-no-repeat">
      {/* Main Hero Content */}
      <div className="relative mt-20 flex flex-col items-center justify-center">
        <div className="mx-auto flex max-w-full flex-col items-center px-3 md:max-w-5xl md:px-0">
          {/* Badge */}
          {/* <HeroBadge /> */}

          {/* Title */}
          <div className="mt-0 px-2 md:mt-8 md:px-0">
            <h1 className="text-center text-[32px] leading-[42px] font-semibold tracking-[-1.5px] text-balance text-[#1F2937] md:text-[52px] md:leading-[58px]">
              The Ultimate UI Library and Design System for Figma
            </h1>
          </div>

          {/* SUb title */}
          <div className="mt-[18px] max-w-full px-2 md:max-w-2xl md:px-0">
            <p className="text-center text-base leading-[22px] font-normal tracking-[-0.2px] text-[#6B7280] md:text-[18px] md:leading-7">
              A complete toolkit for modern designers — 600+ functional Figma UI components for
              landing pages, e-commerce, dashboards, and more. Boost your workflow and creativity
              with our product.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {/* Preview Figma Button */}
            <Button className="h-11! w-[191.64px] cursor-pointer px-3.5" variant={'outline'}>
              <FigmaIcon className="size-6" />{' '}
              <span className="flex items-center text-[#1F2937]">
                Preview{' '}
                <span className="ml-0.5 flex items-center text-black/70">
                  - Figma <ChevronRightIcon className="h-4 w-4" />
                </span>{' '}
              </span>
            </Button>

            {/* Buy Now Button */}
            {/* <StyledButtons.PrimaryCTA className="pl-[18px] pr-3 py-[11px] h-10 w-[191.64px] "> */}
            <Button
              className="h-11! w-[191.64px] cursor-pointer py-[11px] pr-3 pl-[18px]"
              variant={'primary'}
            >
              Buy now{' '}
              <span className="flex items-center space-x-1 text-slate-300!">
                <span>- One-time</span>
                <ChevronRightIcon className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-10 px-2 md:mt-20 md:px-0">
          <Image
            src={figmaWebView}
            alt="hero"
            width={400}
            height={100}
            className="block md:hidden"
          />

          <Image
            src={figmaWebView}
            alt="hero"
            width={1500}
            height={100}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  )
}
