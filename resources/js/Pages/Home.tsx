import MainContent from "@/Components/MainContent";
import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

interface Props {
    recentEmployees: any[];
    employees: any[];
    departments: any[];
}

export default function Home({}: Props) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    return (
        <AuthenticatedLayout>
            <Head title="Employee Manager" />
            <div className="flex min-h-screen bg-gray-100">
                <div className="w-64 bg-black text-white">
                    <SideBar
                        selectedItemIndex={selectedItemIndex}
                        onClickItemFunction={setSelectedItemIndex}
                    ></SideBar>
                </div>
                <div className="flex-1 p-6">
                    <MainContent
                        visiblePageIndex={selectedItemIndex}
                    ></MainContent>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}