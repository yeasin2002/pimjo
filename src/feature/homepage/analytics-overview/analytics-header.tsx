export const AnalyticsHeader = () => {
  return (
    <div className="grid grid-cols-1 px-3 md:grid-cols-6 md:px-0">
      <div className="space-y-3 pt-8 pb-8 pl-0 md:col-span-4 md:space-y-[18px] md:pt-20 md:pb-10 md:pl-10">
        <h2 className="max-w-full text-3xl leading-10 font-medium tracking-[-1.6px] text-[#1F2937] md:max-w-xl md:text-[40px] md:leading-12">
          The perfect foundation to kickstart any project.
        </h2>
        <p className="text-md w-full max-w-full leading-normal tracking-[-0.2px] text-[#6B7280] md:max-w-[800px] md:text-lg md:leading-7">
          A comprehensive UI kit — thoughtfully crafted with{' '}
          <span className="font-medium text-[#374151]">
            Auto Layout 5.0, smart variants, variables
          </span>
          , and built -in WCAG accessibility for a seamless design experience.
        </p>
      </div>
      {/* Making extra spaces */}
      <div></div>
    </div>
  )
}
