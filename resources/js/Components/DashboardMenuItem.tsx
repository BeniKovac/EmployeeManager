import React from "react";

interface Props {
    text: String
}

export default function DashboardMenuItem() {
    return (
        <>
            <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
                    Dashboard
                </a>
            </li>
        </>
    );
}
