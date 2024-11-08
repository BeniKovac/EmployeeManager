import MainContent from "@/Components/PageDashboard";
import DashboardSideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Employee Manager" />
            <div className="flex min-h-screen bg-gray-100">
                <div className="w-64 bg-black text-white">
                    <DashboardSideBar></DashboardSideBar>
                </div>
                <div className="flex-1 p-6">
                    <MainContent></MainContent>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
