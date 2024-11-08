import DashboardMenuItem from "@/Components/DashboardMenuItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Employee Manager" />
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="w-64 bg-black text-white">
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold">Dashboard</h2>
                    </div>
                    <nav>
                        <ul className="space-y-4 p-6">
                            <DashboardMenuItem></DashboardMenuItem>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                                >
                                    Employees
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 hover:bg-gray-700 rounded"
                                >
                                    Departments
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h1 className="text-3xl font-semibold mb-4">
                            Welcome to your Dashboard!
                        </h1>
                        <p className="text-gray-700">
                            Here is a general overview of your employees:
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
