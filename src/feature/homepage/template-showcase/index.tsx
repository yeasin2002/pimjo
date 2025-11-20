"use client";

import TemplateIcon from "@/components/icons/svg/template";
import { SectionHeader } from "@/components/shared";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cardData, tabItems } from "./data";
import { TemplateGrid } from "./TemplateGrid";

export const TemplateShowcase = () => {
  return (
    <div>
      <div className="h-20" />

      {/* Header Section */}
      <SectionHeader
        icon={<TemplateIcon />}
        badgeText="Templates"
        title="Ready-to-use Figma templates for building websites faster."
        subtitle={
          <>
            Design and explore stunning website layouts with our{" "}
            <span className="font-medium text-[#374151]">ready-made templates.</span>
          </>
        }
      />

      {/* Templates Tabs Section */}
      <div className="border-t border-b border-gray-200">
        <div className="bg-gray-50 md:px-0 px-3">
          <Tabs defaultValue="all" className="w-full">
            {/* Tab Navigation */}
            <div className="py-5 md:px-10 md:border-b border-b-0">
              <TabsList className="bg-transparent h-auto p-0 flex items-center flex-wrap md:justify-start justify-center gap-2">
                {tabItems.map((item) => (
                  <TabsTrigger
                    key={item.value}
                    value={item.value}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium leading-6 tracking-[-0.2px] transition-all duration-75 cursor-pointer border border-transparent bg-[#F3F4F6] text-[#374151] hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] data-[state=active]:text-[#1F2937] data-[state=active]:shadow-sm"
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab Content */}
            {tabItems.map((item) => (
              <TabsContent key={item.value} value={item.value} className="mt-0">
                <TemplateGrid
                  templates={cardData.filter(
                    (card) =>
                      item.value === "all" || card.category === item.value
                  )}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};
