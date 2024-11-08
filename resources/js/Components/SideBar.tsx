import React from "react";
import SidebarItem from "./SidebarItem";

export default function DashboardSideBar() 
{
    const sidebarItemLabels = ["Dashboard", "Employees", "Departments"];

    return (
        <>
            <div className="p-6">
                <h2 className="text-2xl font-semibold">Dashboard</h2>
            </div>
            <nav>
                <ul className="space-y-4 p-6">
                    {sidebarItemLabels.map((Label, index) => (
                        <SidebarItem itemIndex={index}>{Label}</SidebarItem>
                    ))}
                </ul>
            </nav>
        </>
    );
}
