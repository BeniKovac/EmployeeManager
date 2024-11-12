import React, { useState } from 'react'
import PrimaryButton from './BreezeComponents/PrimaryButton';
import axios from 'axios';
import SweetAlert from './CustomUtilities/SweetAlert';

const FormCreateEmployee = ({ departments, positions, onCreate }) => {
      const [formData, setFormData] = useState({
          name: '',
          surname: '',
          department_id: '',
          position_id: '',
          employment_date: ''
        });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/employees`, formData)
        .then((response) => {
          onCreate(response.data);
          SweetAlert(response.data.message, "success");
        })
        .catch((error) => {
          SweetAlert(error.data.message, "error");
        });

      };
    
      return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Create Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
    
              {/* Surname Input */}
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
    
              {/* Department Input */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  id="department_id"
                  name="department_id"
                  value={formData.department_id}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>{department.department_title}</option>
                  ))}
                </select>
              </div>
    
              {/* Position Input */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                  Position
                </label>
                <select
                  id="position_id"
                  name="position_id"
                  value={formData.position_id}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Position</option>
                  {positions.map((position) => (
                    <option key={position.id} value={position.id}>{position.position_title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="employment_date" className="block text-sm font-medium text-gray-700">
                  Employment Date
                </label>
                <input
                  type="date"
                  id="employment_date"
                  name="employment_date"
                  value={formData.employment_date}
                  onChange={handleChange}
                  className="mt-1 block w-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

            </div>
    
            <div className="mt-6 text-left">
              <PrimaryButton disabled={false} type="submit">Submit</PrimaryButton>
            </div>
          </form>
        </div>
      );
}

export default FormCreateEmployee