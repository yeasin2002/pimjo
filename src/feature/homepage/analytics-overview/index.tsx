import { AnalyticsOverviewCard } from './analytics-cards'
import { AnalyticsHeader } from './analytics-header'
import { featureStats } from './analytics-overview-data'

export function AnalyticsOverview() {
  return (
    <div className="mt-10">
      <section className="mx-auto w-full max-w-[88.3%]">
        <AnalyticsHeader />
        <div className="relative before:absolute before:top-0 before:left-0 before:left-1/2 before:block before:h-px before:w-screen before:-translate-x-1/2 before:bg-[--pattern-fg] after:absolute after:bottom-0 after:left-0 after:left-1/2 after:block after:h-px after:w-screen after:-translate-x-1/2 after:bg-[--pattern-fg]">
          <div className="overflow-hidden bg-[url('/section-gradient.png')] bg-size-[auto_650px] bg-position-[center_top_0rem] px-1.5 md:bg-no-repeat md:px-0">
            <div className="py-1.5 md:py-[11px]">
              <div className="grid grid-cols-1 gap-y-1.5 lg:grid-cols-2 lg:gap-x-2.5">
                {featureStats.map((feature, index) => (
                  <AnalyticsOverviewCard key={index} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
