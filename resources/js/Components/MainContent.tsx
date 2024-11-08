import React from 'react'
import PageDashboard from './PageDashboard'
import PageEmployees from './PageEmployees'
import PageDepartments from './PageDepartments'

interface Props {
    visiblePageIndex: number
}

const MainContent = ({ visiblePageIndex }: Props) => {
    const pageComponents = [PageDashboard, PageEmployees, PageDepartments];

    return (
        <>
            {pageComponents.map((Component, index) => (
                index === visiblePageIndex && <Component />
            ))}
        </>
    )
}

export default MainContent