import StaticsCards from "./statics-cards";
import UserTable from "./user-table";

const NewDashboardPage = () => {
    return (
        <section className="max-w-full mx-auto w-full -mt-px">
            <div className="bg-sec min-h-dvh md:space-y-[30px] space-y-[15px] md:p-10 p-4">
                <StaticsCards />
                <UserTable />
            </div>
        </section>
    );
};

export default NewDashboardPage;
