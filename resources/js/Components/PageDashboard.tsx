import React from 'react'
import DataTable from './DataTable'
import '../../css/PageDashboard.css'

interface Props {
  averageEmploymentTime: number
  recentEmployees: any[],
  totalDepartments: number,
  totalEmployees: number,
  totalThisMonthEmployees: number
}

const PageDashboard = ({ averageEmploymentTime, recentEmployees, totalDepartments, totalEmployees, totalThisMonthEmployees }: Props) => {
  return (
    <>
      <div className="flex mt-4 gap-4">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-500">Total Employees</h1>
          <b>{totalEmployees}</b>
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-500">Departments</h1>
          <b>{totalDepartments}</b>
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-500">New this month</h1>
          <b>{totalThisMonthEmployees}</b>
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-500">Average employment time (days)</h1>
          <b>{averageEmploymentTime}</b>
        </div>
      </div>

      <div className="flex mt-4 gap-4 custom-right-margin">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-black">Recent Employees</h1>
          <DataTable data={recentEmployees} displayedFields={['id', 'name', 'position.position_title', 'department.department_title', 'employment_date']}></DataTable>
        </div>
        <div className="flex-1"></div>
      </div>
    </>
  )
}

export default PageDashboard