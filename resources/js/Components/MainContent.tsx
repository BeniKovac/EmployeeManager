import React from 'react'
import PageDashboard from './PageDashboard'
import PageEmployees from './PageEmployees'
import PageDepartments from './PageDepartments'

interface Props {
    visiblePageIndex: number
}

const MainContent = ({ visiblePageIndex }: Props) => {
    const pages = [<PageDashboard/>, <PageEmployees/>, <PageDepartments/>];

    return (
        <>
            {pages[visiblePageIndex]}
        </>
    )
}

export default MainContent