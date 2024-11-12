import React, { useState } from 'react'
import DataTable from './DataTable';
import PrimaryButton from './BreezeComponents/PrimaryButton';
import SecondaryButton from './BreezeComponents/SecondaryButton';
import axios from 'axios';
import SweetAlert from './CustomUtilities/SweetAlert';

interface Props {
  departments: any[]
}

const PageDepartments = ({ departments }: Props) => {
  const [departmentData, setDepartmentData] = useState(departments);

  const handleDelete = (departmentId: number) => {
    axios.delete(`/departments/${departmentId}`)
      .then((response) => {
        setDepartmentData(departmentData.filter((department) => department.id !== departmentId));
        SweetAlert(response.data.message, "success");
      })
      .catch((error) => {
        SweetAlert(error.data.message, "error");
      });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <h2 className="p-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
          Departments
      </h2>
      <div className="p-6 flex justify-end">
        <PrimaryButton disabled={false}>Create</PrimaryButton>
      </div>
      <DataTable 
        data={departmentData} 
        displayedFields={['id', 'department_title', 'actions']}
        customRenderers={{'actions': (department) => {
                                        return <div className="flex gap-4 justify-center">
                                                <PrimaryButton disabled={false}>Edit</PrimaryButton>
                                                <SecondaryButton 
                                                  disabled={false}
                                                  onClick={() => handleDelete(department.id)}
                                                >
                                                  Delete
                                                </SecondaryButton>
                                              </div>
                                      }
        }}
        >
        </DataTable>
    </div>
  );
}

export default PageDepartments