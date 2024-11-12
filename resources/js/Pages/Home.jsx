import MainContent from "@/Components/MainContent";
import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Home() {
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
