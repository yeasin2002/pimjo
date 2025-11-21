import { AnalyticsOverviewCards } from './analytics-cards'
import { AnalyticsHeader } from './analytics-header'

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
