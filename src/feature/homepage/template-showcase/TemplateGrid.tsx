import FigmaIcon from '@/components/icons/svg/figma'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-react'
import { TemplateCard } from './TemplateCard'
import type { TemplateCard as TemplateCardType } from './types'

interface TemplateGridProps {
  templates: TemplateCardType[]
}

export const TemplateGrid = ({ templates }: TemplateGridProps) => {
  return (
    <div className="relative">
      <div className="relative grid grid-cols-1 gap-9 p-3 pb-[120px] md:grid-cols-3 md:px-10 md:pt-10 md:pb-[140px]">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}

        {/* Gradient Overlay with Buttons */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full bg-linear-to-t from-[#F3F4F6] via-white/90 to-white/20 opacity-90">
          <div className="relative mt-10 flex h-full w-full justify-center">
            <div className="pointer-events-auto z-10 mt-11 flex items-center justify-center space-x-3 md:justify-start">
              {/* Preview Button */}
              <Button variant="outline" className="h-11 w-[140px] bg-white px-3.5 md:w-[191.64px]">
                <FigmaIcon className="size-6" />
                <span className="flex items-center text-[#1F2937]">
                  Preview
                  <span className="ml-0.5 hidden items-center text-black/70 md:flex">
                    - Figma <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </span>
              </Button>

              {/* Buy Now Button */}
              <Button className="h-11 w-[140px] bg-blue-600 px-3.5 hover:bg-blue-700 md:w-[191.64px]">
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
  )
}
