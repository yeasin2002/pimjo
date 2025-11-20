import FigmaIcon from "@/components/icons/svg/figma";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { TemplateCard } from "./TemplateCard";
import type { TemplateCard as TemplateCardType } from "./types";

interface TemplateGridProps {
  templates: TemplateCardType[];
}

export const TemplateGrid = ({ templates }: TemplateGridProps) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 md:px-10 md:pt-10 pb-[120px] md:pb-[140px] p-3 gap-9 relative">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}

        {/* Gradient Overlay with Buttons */}
        <div className="absolute inset-x-0 bottom-0 h-64 w-full bg-linear-to-t from-[#F3F4F6] via-white/90 to-white/20 opacity-90 pointer-events-none">
          <div className="relative h-full w-full flex justify-center mt-10">
            <div className="flex items-center justify-center md:justify-start space-x-3 mt-11 z-10 pointer-events-auto">
              {/* Preview Button */}
              <Button
                variant="outline"
                className="h-11 md:w-[191.64px] w-[140px] px-3.5 bg-white"
              >
                <FigmaIcon className="size-6" />
                <span className="text-[#1F2937] flex items-center">
                  Preview
                  <span className="md:flex hidden items-center text-black/70 ml-0.5 ">
                    - Figma <ChevronRightIcon className="w-4 h-4" />
                  </span>
                </span>
              </Button>

              {/* Buy Now Button */}
              <Button className="md:w-[191.64px] w-[140px] h-11 px-3.5 bg-blue-600 hover:bg-blue-700">
                Buy now
                <span className="space-x-1 md:flex hidden items-center justify-center text-white/75">
                  <span>- One-time</span>
                  <ChevronRightIcon className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
