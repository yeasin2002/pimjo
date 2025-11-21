import Image from 'next/image'
import { featureStats } from './analytics-overview-data'

interface Props {
  feature: (typeof featureStats)[0]
}

export const AnalyticsOverviewCard = ({ feature }: Props) => {
  return (
    <div className="space-y-9 rounded-xl border border-[#E5E7EB] bg-white px-5 py-9 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] md:border-none md:px-10 md:shadow-none">
      <div className="flex size-14 items-center justify-center rounded-[14px] bg-white p-0 shadow-[0px_3px_6px_2px_rgba(0,0,0,0.1),0_1px_4px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(0,0,0,0.01)]">
        <Image src={feature.icon} width={36} height={36} alt="Icon" />
      </div>
      <div className="space-y-4">
        <h3 className="text-[44px] leading-normal font-medium text-[#1F2937]">{feature.number}</h3>
        <div className="space-y-3">
          <p className="text-2xl leading-8 font-medium text-[#374151]">{feature.title}</p>
          <p className="text-base leading-6 tracking-[-0.2px] text-[#6B7280]">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  )
}
