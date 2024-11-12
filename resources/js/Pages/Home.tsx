import MainContent from "@/Components/MainContent";
import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

interface Props {
    averageEmploymentTime: number,
    departments: any[],
    employees: any[],
    positions: any[],
    recentEmployees: any[],
    totalThisMonthEmployees: number
}

export default function Home({ recentEmployees, employees, departments, positions, totalThisMonthEmployees, averageEmploymentTime }: Props) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    return (
        <AuthenticatedLayout>
            <Head title="Employee Manager" />
            <div className="flex min-h-screen">
                <div className="w-64 bg-black text-white">
                    <SideBar
                        selectedItemIndex={selectedItemIndex}
                        onClickItemFunction={setSelectedItemIndex}
                    ></SideBar>
                </div>
                <div className="flex-1 p-6">
                    <MainContent
                        averageEmploymentTime={averageEmploymentTime}
                        departments={departments}
                        employees={employees}
                        positions={positions}
                        recentEmployees={recentEmployees}
                        totalThisMonthEmployees={totalThisMonthEmployees}
                        visiblePageIndex={selectedItemIndex}
                    ></MainContent>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
