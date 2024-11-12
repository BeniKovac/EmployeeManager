import React from 'react';
import DataTableHeader from './DataTableHeader';
import DataTableRow from './DataTableRow';

interface Props {
  data: any[];
  displayedFields: string[];
  customRenderers?: {
    [key: string]: (data: any) => JSX.Element;
  };
}

const DataTable = ({ data, displayedFields, customRenderers }: Props) => {
  return (
    <table className="w-full bg-white dark:bg-gray-800">
      <thead>
        <tr>
          {displayedFields.map((fieldName) => (
            <DataTableHeader key={fieldName} headerName={fieldName} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((employee, index) => (
          <DataTableRow
            key={index}
            dataPoint={employee}
            displayedFields={displayedFields}
            customRenderers={customRenderers}
          />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
