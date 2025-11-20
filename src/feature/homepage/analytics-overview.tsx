import componentImage from "@/assets/images/component.png";
import layerImg from "@/assets/images/layer.png";
import variableImage from "@/assets/images/variable.png";
import Image from "next/image";

export function AnalyticsOverview() {
  return (
    <div className="mt-10">
      <section className="max-w-[88.3%] mx-auto w-full ">
        <AnalyticsHeader />
        <div className="relative before:absolute after:absolute before:left-0 after:left-0 before:w-screen after:w-screen before:h-px after:h-px before:bg-[--pattern-fg] after:bg-[--pattern-fg] before:-translate-x-1/2 after:-translate-x-1/2 before:left-1/2 after:left-1/2 before:top-0 after:bottom-0 before:block after:block">
          <AnalyticsOverviewCards />
        </div>
      </section>
    </div>
  );
}

const AnalyticsHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 md:px-0 px-3">
      <div className="md:col-span-4 space-y-3 md:space-y-[18px] pt-8 pb-8 pl-0 md:pt-20 md:pb-10 md:pl-10">
        <h2 className="text-3xl leading-10 max-w-full md:text-[40px] font-medium md:leading-12 tracking-[-1.6px] text-[#1F2937] md:max-w-xl">
          The perfect foundation to kickstart any project.
        </h2>
        <p className="text-[#6B7280] text-md md:text-lg leading-normal md:leading-7 tracking-[-0.2px] max-w-full md:max-w-[800px] w-full">
          {" "}
          A comprehensive UI kit — thoughtfully crafted with{" "}
          <span className="font-medium text-[#374151]">
            Auto Layout 5.0, smart variants, variables
          </span>
          , and built-in WCAG accessibility for a seamless design experience.
        </p>
      </div>
      {/* Making extra spaces */}
      <div></div>
    </div>
  );
};

const AnalyticsOverviewCards = () => {
  return (
    <div className="bg-[url('/assets/section-gradient.png')] md:bg-no-repeat bg-size-[auto_650px] bg-position-[center_top_0rem] overflow-hidden md:px-0 px-1.5">
      <div className="py-1.5 md:py-[11px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-1.5 md:gap-x-2.5">
          {featureStats.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl md:px-10 px-5 py-9 bg-white space-y-9 md:border-none border border-[#E5E7EB] md:shadow-none shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            >
              <div className="bg-white shadow-[0px_3px_6px_2px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)] rounded-[14px] size-14 p-0 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  width={36}
                  height={36}
                  alt="Icon"
                  className=""
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-[#1F2937] text-[44px] leading-normal font-medium">
                  {feature.number}
                </h3>
                <div className="space-y-3">
                  <p className="text-[#374151] leading-8 text-2xl font-medium">
                    {feature.title}
                  </p>
                  <p className="text-base leading-6 text-[#6B7280] tracking-[-0.2px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const featureStats = [
  {
    icon: layerImg,
    number: "400+",
    title: "Widgets & Examples",
    description:
      "Explore a rich collection of ready-to-use widgets and examples — built to inspire and speed up your design workflow.",
  },
  {
    icon: componentImage,
    number: "10000+",
    title: "Components & Variant",
    description:
      "Discover hundreds of flexible components and variants — crafted to help you design faster and maintain consistency effortlessly.",
  },
  {
    icon: variableImage,
    number: "650+",
    title: "Styles, Variable & Tokens",
    description:
      "Access well-structured styles, variables, and tokens — ensuring seamless scalability and visual harmony across every design.",
  },
];
