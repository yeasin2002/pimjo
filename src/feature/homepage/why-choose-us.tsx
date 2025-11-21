import AutoLayoutIcon from '@/components/icons/svg/auto-layout'
import CodeIcon from '@/components/icons/svg/code'
import FigmaIcon from '@/components/icons/svg/figma'
import FigmaGrayIcon from '@/components/icons/svg/figma-gray'
import PaletteIcon from '@/components/icons/svg/palette'
import ShadowIcon from '@/components/icons/svg/shadow'
import ThemeIcon from '@/components/icons/svg/theme'
import TypoIcon from '@/components/icons/svg/typo'
import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'

// assets
import customizeMode from '@/assets/images/customize-mode.png'
import latestFeatures1 from '@/assets/images/latest-features1.png'
import { SectionHeader } from '@/components/shared'
import { Button } from '@/components/ui/button'

export const WhyChooseUsSimple = () => {
  return (
    <div>
      {/* Breaker */}
      <div className="h-20" />

      {/* Section 1: Header and Features */}
      <div className="mt-20">
        <div className="mx-auto max-w-full px-4">
          <div className="rounded-lg border border-gray-200 p-8">
            <SectionHeader
              icon={<CodeIcon />}
              badgeText="Why choose us?"
              title="Smart, Collaborative, and Built for Modern Designers"
              subtitle="From smart components to real-time updates, everything works together to keep your team in sync."
              className="mt-0 mb-12 border-t-0 p-0"
            />

            {/* Features Section 1 */}
            <div className="grid gap-8 rounded-lg border-t border-gray-200 bg-gray-50 p-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-semibold">
                  Built with {`Figma's`} latest features
                </h3>

                {/* Feature Items */}
                <div className="mb-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <FigmaGrayIcon className="size-6" />
                    </div>
                    <p className="text-gray-600">
                      Built with {`Figma's`} latest and coolest features to make your workflow
                      smarter and faster.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <AutoLayoutIcon className="size-6" />
                    </div>
                    <p className="text-gray-600">
                      Fully compatible with Auto Layout 5.0 across all pages, components, and UI
                      kits.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <ThemeIcon className="size-6" />
                    </div>
                    <p className="text-gray-600">
                      Switch between Light and Dark modes effortlessly with {`Figma's`} variables
                      for every UI component and block, all in one click.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center space-x-3 md:justify-start">
                  <Button variant={'outline'} size={'2xl'}>
                    <FigmaIcon className="size-6" />
                    <span className="flex items-center text-[#1F2937]">
                      Preview
                      <span className="ml-0.5 hidden items-center text-black/70 md:flex">
                        - Figma <ChevronRightIcon className="h-4 w-4" />
                      </span>
                    </span>
                  </Button>

                  <Button variant={'secondary'} size={'2xl'}>
                    Buy now
                    <span className="hidden items-center justify-center space-x-1 text-white/75 md:flex">
                      <span>- One-time</span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="hidden pt-10 md:block md:pt-0">
                <div className="overflow-hidden rounded-lg">
                  <Image src={latestFeatures1} alt="why-choose-us" width={660} height={564} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Customize Features */}
      <div className="mt-20">
        <div className="mx-auto max-w-full px-4">
          <div className="rounded-lg border border-gray-200 p-8">
            <div className="grid gap-8 rounded-lg border-t border-gray-200 bg-gray-50 p-8 md:grid-cols-2">
              <div className="hidden md:block">
                <div className="p-0 md:p-4">
                  <Image src={customizeMode} alt="customize-mode" width={660} height={564} />
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-semibold">Style customization made simple</h3>

                {/* Feature Items */}
                <div className="mb-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <TypoIcon className="size-6" />
                    </div>
                    <p className="text-gray-600">
                      A precise, versatile, and fully scalable typography system—easily adjustable
                      with a single click from variables panel.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <PaletteIcon className="size-6" />
                    </div>
                    <p className="text-gray-600">
                      Vibrant color palette with 253+ prebuilt colors, extensive shades, and
                      variables fully compatible with Tailwind CSS.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <ShadowIcon className="size-6" />
                    </div>
                    <p className="text-gray-600">
                      Seamless shadow and blur styles designed to ensure consistency across all your
                      designs.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center space-x-3 md:justify-start">
                  <Button variant={'outline'} size={'lg'}>
                    <FigmaIcon className="size-6" />
                    <span className="flex items-center text-[#1F2937]">
                      Preview
                      <span className="ml-0.5 hidden items-center text-black/70 md:flex">
                        - Figma <ChevronRightIcon className="h-4 w-4" />
                      </span>
                    </span>
                  </Button>

                  <Button variant={'secondary'} size={'lg'}>
                    Buy now
                    <span className="hidden items-center justify-center space-x-1 text-white/75 md:flex">
                      <span>- One-time</span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
