import React from 'react'

export const BounceRateCard = () => {
  return (
    <div className="space-y-3 rounded-2xl border border-[#E4E7EC] bg-white p-6">
      <p className="text-sm leading-5 tracking-[-0.2px] text-[#667085]">Bounce Rate</p>
      <div className="flex items-baseline justify-between">
        <h5 className="text-2xl leading-8 font-semibold tracking-[-0.5px] text-[#1D2939]">54%</h5>
        <div className="flex items-center space-x-1">
          <span className="flex items-center rounded-full bg-[#FEF3F2] px-2 py-0.5 text-xs leading-[18px] font-medium text-[#D92D20]">
            -1.59%
          </span>
          <p className="text-xs leading-4 tracking-[-0.2px] text-[#667085]">Vs last month</p>
        </div>
      </div>
    </div>
  )
}
