import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string
  changePercentage: string
  changeLabel?: string
  isPositive?: boolean
}

export const StatCard = ({
  title,
  value,
  changePercentage,
  changeLabel = 'Vs last month',
  isPositive = true,
}: StatCardProps) => {
  return (
    <div className="space-y-3 rounded-2xl border border-[#E4E7EC] bg-white p-6">
      <p className="text-sm leading-5 tracking-[-0.2px] text-[#667085]">{title}</p>
      <div className="flex items-baseline justify-between">
        <h5 className="text-2xl leading-8 font-semibold tracking-[-0.5px] text-[#1D2939]">
          {value}
        </h5>
        <div className="flex items-center space-x-1">
          <span
            className={cn(
              'flex items-center rounded-full px-2 py-0.5 text-xs leading-[18px] font-medium',
              isPositive ? 'bg-[#ECFDF3] text-[#039855]' : 'bg-[#FEF3F2] text-[#D92D20]'
            )}
          >
            {changePercentage}
          </span>
          <p className="text-xs leading-4 tracking-[-0.2px] text-[#667085]">{changeLabel}</p>
        </div>
      </div>
    </div>
  )
}
