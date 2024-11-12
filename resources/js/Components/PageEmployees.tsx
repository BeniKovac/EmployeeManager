import React from 'react'
import DataTable from './DataTable';
import PrimaryButton from './BreezeComponents/PrimaryButton';
import SecondaryButton from './BreezeComponents/SecondaryButton';

interface Props {
  employees: any[]
}

const PageEmployees = ({ employees }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <h2 className="p-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
          Employees
      </h2>
      <DataTable 
        data={employees} 
        displayedFields={['id', 'name', 'position', 'department', 'actions']}
        customRenderers={{'actions': (employee) => {
                                        return <div className="flex gap-4 justify-center">
                                                <PrimaryButton disabled={false}>Edit</PrimaryButton>
                                                <SecondaryButton disabled={false}>Delete</SecondaryButton>
                                              </div>
                                      }
        }}
      >
      </DataTable>
    </div>
  );
}

export default PageEmployees