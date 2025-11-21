import {
  BounceRateCard,
  TotalPageviewsCard,
  UniqueVisitorsCard,
  VisitDurationCard,
} from './statics-cards'

export const StaticsCards = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
      <UniqueVisitorsCard />

      <TotalPageviewsCard />
      <BounceRateCard />
      <VisitDurationCard />
    </div>
  )
}
