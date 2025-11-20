import TemplateIcon from "@/components/icons/svg/template";

interface SectionHeaderProps {
  badgeText?: string;
  title?: string;
  subtitle?: React.ReactNode;
}

export const SectionHeader = ({
  badgeText = "Templates",
  title = "Ready-to-use Figma templates for building websites faster.",
  subtitle = (
    <>
      Design and explore stunning website layouts with our{" "}
      <span className="font-medium text-[#374151]">ready-made templates.</span>
    </>
  ),
}: SectionHeaderProps) => {
  return (
    <div className="mt-20 border-t border-gray-200">
      <div className="p-12">
        <div>
          <div className="inline-flex items-center gap-2 h-[34px] w-[120px] py-[7px] pl-2.5 pr-3 text-[#6B7280] mb-4 border border-gray-200 rounded-full bg-white">
            <TemplateIcon />
            <span className="text-sm">{badgeText}</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl ">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
