import React from 'react'
import DataTable from './DataTable'
import '../../css/PageDashboard.css'

const PageDashboard = (latestEmployees) => {
  return (
    <>
      <div className="flex mt-4 gap-4">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-500">Total Employees</h1>
          <b>X</b>
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-500">Departments</h1>
          <b>Y</b>
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-500">New this month</h1>
          <b>Z</b>
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-gray-500">Average employment time</h1>
          <b>V</b>
        </div>
      </div>

      <div className="flex mt-4 gap-4 custom-right-margin">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-black">Recent Employees</h1>
          <DataTable data={latestEmployees} displayedFields={['id', 'name', 'position', 'department']}></DataTable>
        </div>
        <div className="flex-1"></div>
      </div>
    </>
  )
}

export default PageDashboard