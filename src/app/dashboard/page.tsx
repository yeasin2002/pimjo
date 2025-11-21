import { StaticsCards, UserTable } from '@/feature/dashboard'

const NewDashboardPage = () => {
  return (
    <section className="mx-auto -mt-px w-full max-w-full">
      <div className="bg-sec min-h-dvh space-y-[15px] p-4 md:space-y-[30px] md:p-10">
        <StaticsCards />
        <UserTable />
      </div>
    </section>
  )
}

export default NewDashboardPage
