const StaticsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-4 gap-2">
      {/* Unique Visitors Card */}
      <div className="bg-white rounded-2xl p-6 border-[#E4E7EC] border space-y-3">
        <p className="text-[#667085] leading-5 tracking-[-0.2px] text-sm">
          Unique Visitors
        </p>
        <div className="flex items-baseline justify-between">
          <h5 className="text-2xl leading-8 tracking-[-0.5px] font-semibold text-[#1D2939]">
            24.7K
          </h5>
          <div className="flex items-center space-x-1">
            <span className="text-xs leading-[18px] font-medium flex items-center px-2 py-0.5 rounded-full text-[#039855] bg-[#ECFDF3]">
              +20%
            </span>
            <p className="text-[#667085] leading-4 text-xs tracking-[-0.2px]">
              Vs last month
            </p>
          </div>
        </div>
      </div>

      {/* Total Pageviews Card */}
      <div className="bg-white rounded-2xl p-6 border-[#E4E7EC] border space-y-3">
        <p className="text-[#667085] leading-5 tracking-[-0.2px] text-sm">
          Total Pageviews
        </p>
        <div className="flex items-baseline justify-between">
          <h5 className="text-2xl leading-8 tracking-[-0.5px] font-semibold text-[#1D2939]">
            55.9K
          </h5>
          <div className="flex items-center space-x-1">
            <span className="text-xs leading-[18px] font-medium flex items-center px-2 py-0.5 rounded-full text-[#039855] bg-[#ECFDF3]">
              +4%
            </span>
            <p className="text-[#667085] leading-4 text-xs tracking-[-0.2px]">
              Vs last month
            </p>
          </div>
        </div>
      </div>

      {/* Bounce Rate Card */}
      <div className="bg-white rounded-2xl p-6 border-[#E4E7EC] border space-y-3">
        <p className="text-[#667085] leading-5 tracking-[-0.2px] text-sm">
          Bounce Rate
        </p>
        <div className="flex items-baseline justify-between">
          <h5 className="text-2xl leading-8 tracking-[-0.5px] font-semibold text-[#1D2939]">
            54%
          </h5>
          <div className="flex items-center space-x-1">
            <span className="text-xs leading-[18px] font-medium flex items-center px-2 py-0.5 rounded-full text-[#D92D20] bg-[#FEF3F2]">
              -1.59%
            </span>
            <p className="text-[#667085] leading-4 text-xs tracking-[-0.2px]">
              Vs last month
            </p>
          </div>
        </div>
      </div>

      {/* Visit Duration Card */}
      <div className="bg-white rounded-2xl p-6 border-[#E4E7EC] border space-y-3">
        <p className="text-[#667085] leading-5 tracking-[-0.2px] text-sm">
          Visit Duration
        </p>
        <div className="flex items-baseline justify-between">
          <h5 className="text-2xl leading-8 tracking-[-0.5px] font-semibold text-[#1D2939]">
            2m 56s
          </h5>
          <div className="flex items-center space-x-1">
            <span className="text-xs leading-[18px] font-medium flex items-center px-2 py-0.5 rounded-full text-[#039855] bg-[#ECFDF3]">
              +7%
            </span>
            <p className="text-[#667085] leading-4 text-xs tracking-[-0.2px]">
              Vs last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticsCards;
