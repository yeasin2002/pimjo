import { StaticsCards, UserTable } from '@/feature/dashboard'
import { Suspense } from 'react'

const NewDashboardPage = () => {
  return (
    <section className="mx-auto -mt-px w-full max-w-full">
      <div className="bg-sec min-h-dvh space-y-[15px] p-4 md:space-y-[30px] md:p-10">
        <StaticsCards />
        <Suspense fallback={<UserTableSkeleton />}>
          <UserTable />
        </Suspense>
      </div>
    </section>
  )
}

// Skeleton fallback for Suspense
function UserTableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-16 rounded-t-xl bg-white" />
      <div className="h-96 bg-white" />
      <div className="h-16 rounded-b-xl bg-white" />
    </div>
  )
}

export default NewDashboardPage
