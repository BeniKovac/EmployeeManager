import React from 'react'
import PageDashboard from './PageDashboard'
import PageEmployees from './PageEmployees'
import PageDepartments from './PageDepartments'

interface Props {
    averageEmploymentTime: number
    departments: any[],
    employees: any[],
    recentEmployees: any[],
    totalThisMonthEmployees: number,
    visiblePageIndex: number,
}

const MainContent = ({ averageEmploymentTime, departments, employees, recentEmployees, visiblePageIndex, totalThisMonthEmployees }: Props) => {
    const pages = [
        <PageDashboard 
            averageEmploymentTime={averageEmploymentTime}
            recentEmployees={recentEmployees}
            totalDepartments={departments.length}
            totalEmployees={employees.length}
            totalThisMonthEmployees={totalThisMonthEmployees}
        />,
        <PageEmployees employees={employees}/>,
        <PageDepartments departments={departments}/>
    ];
    return (
        <>
            {pages[visiblePageIndex]}
        </>
    )
}

export default MainContent