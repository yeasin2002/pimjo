import componentImage from '@/assets/images/component.png'
import layerImg from '@/assets/images/layer.png'
import variableImage from '@/assets/images/variable.png'
import Image from 'next/image'

export function AnalyticsOverview() {
  return (
    <div className="mt-10">
      <section className="mx-auto w-full max-w-[88.3%]">
        <AnalyticsHeader />
        <div className="relative before:absolute before:top-0 before:left-0 before:left-1/2 before:block before:h-px before:w-screen before:-translate-x-1/2 before:bg-[--pattern-fg] after:absolute after:bottom-0 after:left-0 after:left-1/2 after:block after:h-px after:w-screen after:-translate-x-1/2 after:bg-[--pattern-fg]">
          <AnalyticsOverviewCards />
        </div>
      </section>
    </div>
  )
}

const AnalyticsHeader = () => {
  return (
    <div className="grid grid-cols-1 px-3 md:grid-cols-6 md:px-0">
      <div className="space-y-3 pt-8 pb-8 pl-0 md:col-span-4 md:space-y-[18px] md:pt-20 md:pb-10 md:pl-10">
        <h2 className="max-w-full text-3xl leading-10 font-medium tracking-[-1.6px] text-[#1F2937] md:max-w-xl md:text-[40px] md:leading-12">
          The perfect foundation to kickstart any project.
        </h2>
        <p className="text-md w-full max-w-full leading-normal tracking-[-0.2px] text-[#6B7280] md:max-w-[800px] md:text-lg md:leading-7">
          {' '}
          A comprehensive UI kit — thoughtfully crafted with{' '}
          <span className="font-medium text-[#374151]">
            Auto Layout 5.0, smart variants, variables
          </span>
          , and built-in WCAG accessibility for a seamless design experience.
        </p>
      </div>
      {/* Making extra spaces */}
      <div></div>
    </div>
  )
}

const AnalyticsOverviewCards = () => {
  return (
    <div className="overflow-hidden bg-[url('/section-gradient.png')] bg-size-[auto_650px] bg-position-[center_top_0rem] px-1.5 md:bg-no-repeat md:px-0">
      <div className="py-1.5 md:py-[11px]">
        <div className="grid grid-cols-1 gap-y-1.5 sm:grid-cols-2 md:grid-cols-3 md:gap-x-2.5">
          {featureStats.map((feature, index) => (
            <div
              key={index}
              className="space-y-9 rounded-xl border border-[#E5E7EB] bg-white px-5 py-9 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] md:border-none md:px-10 md:shadow-none"
            >
              <div className="flex size-14 items-center justify-center rounded-[14px] bg-white p-0 shadow-[0px_3px_6px_2px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)]">
                <Image src={feature.icon} width={36} height={36} alt="Icon" className="" />
              </div>
              <div className="space-y-4">
                <h3 className="text-[44px] leading-normal font-medium text-[#1F2937]">
                  {feature.number}
                </h3>
                <div className="space-y-3">
                  <p className="text-2xl leading-8 font-medium text-[#374151]">{feature.title}</p>
                  <p className="text-base leading-6 tracking-[-0.2px] text-[#6B7280]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const featureStats = [
  {
    icon: layerImg,
    number: '400+',
    title: 'Widgets & Examples',
    description:
      'Explore a rich collection of ready-to-use widgets and examples — built to inspire and speed up your design workflow.',
  },
  {
    icon: componentImage,
    number: '10000+',
    title: 'Components & Variant',
    description:
      'Discover hundreds of flexible components and variants — crafted to help you design faster and maintain consistency effortlessly.',
  },
  {
    icon: variableImage,
    number: '650+',
    title: 'Styles, Variable & Tokens',
    description:
      'Access well-structured styles, variables, and tokens — ensuring seamless scalability and visual harmony across every design.',
  },
]
