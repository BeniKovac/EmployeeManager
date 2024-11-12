import React, { useState } from 'react'
import DataTable from './DataTable';
import PrimaryButton from './BreezeComponents/PrimaryButton';
import SecondaryButton from './BreezeComponents/SecondaryButton';
import axios from 'axios';
import SweetAlert from './CustomUtilities/SweetAlert';
import FormCreateEmployee from './FormCreateEmployee';

interface Props {
  departments: any[],
  positions: any[],
  employees: any[]
}

const PageEmployees = ({ departments, positions, employees }: Props) => {
  const [employeeData, setEmployeeData] = useState(employees);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleCreateClick = () => {
    setIsFormVisible((prevState) => !prevState);
  }

  const handleCreateEmployee = (response) => {
    console.log(employees);
    console.log(response.employee);
    setEmployeeData((prevData) => [...prevData, response.employee]);
    setIsFormVisible(false);
  };

  const handleDelete = (employeeId: number) => {
    axios.delete(`/employees/${employeeId}`)
      .then((response) => {
        setEmployeeData(employeeData.filter((employee) => employee.id !== employeeId));
        SweetAlert(response.data.message, "success");
      })
      .catch((error) => {
        SweetAlert(error.data.message, "error");
      });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <h2 className="p-4 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Employees
      </h2>
      <div className="p-6 flex justify-end">
        <PrimaryButton disabled={false} onClick={handleCreateClick}>{isFormVisible ? 'Cancel' : 'Create Employee'}</PrimaryButton>
      </div>
      {isFormVisible && (
      <FormCreateEmployee
        departments={departments}
        positions={positions}
        onCreate={handleCreateEmployee}/>
      )}
      <DataTable 
        data={employeeData} 
        displayedFields={['id', 'name', 'position.position_title', 'department.department_title', 'employment_date', 'actions']}
        customRenderers={{'actions': (employee) => {
                                        return <div className="flex gap-4 justify-center">
                                                <PrimaryButton disabled={false}>Edit</PrimaryButton>
                                                <SecondaryButton 
                                                  disabled={false}
                                                  onClick={() => handleDelete(employee.id)}
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

export default PageEmployees