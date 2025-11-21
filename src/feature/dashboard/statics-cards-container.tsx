import { StatCard } from './stat-card'

export const StaticsCards = () => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
      <StatCard title="Unique Visitors" value="24.7K" changePercentage="+20%" isPositive={true} />
      <StatCard title="Total Pageviews" value="55.9K" changePercentage="+4%" isPositive={true} />
      <StatCard title="Bounce Rate" value="54%" changePercentage="-1.59%" isPositive={false} />
      <StatCard title="Visit Duration" value="2m 56s" changePercentage="+7%" isPositive={true} />
    </div>
  )
}
