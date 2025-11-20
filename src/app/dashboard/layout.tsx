import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Check if user is logged in
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // If user is NOT logged in, redirect to sign-in page
    if (!session) {
        redirect("/sign-in");
    }

    return <>{children}</>;
}
