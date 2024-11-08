import React from "react";

interface Props {
    children: String,
    itemIndex: number
}

export default function DashboardSidebarItem({ children }: Props) {
    return (
        <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
                {children}
            </a>
        </li>
    );
}
