import React from "react";

interface Props {
    selectedItemIndex: number,
    onClickItemFunction: (index: number) => void
}

export default function SideBar({ selectedItemIndex, onClickItemFunction }: Props) 
{
    const sidebarItemLabels = ["Dashboard", "Employees", "Departments"];

    return (
        <>
            <div className="p-6">
                <h2 className="text-2xl font-semibold">Home</h2>
            </div>
            <nav>
                <ul className="space-y-4 p-6">
                    {sidebarItemLabels.map((Label, index) => (
                        <li key={index} className={`${selectedItemIndex === index ? 'active' : ''}`} onClick={() => onClickItemFunction(index)}>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
                                {Label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
