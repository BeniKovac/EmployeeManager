import React from 'react';

interface DataTableRowProps {
  dataPoint: any;
  displayedFields: string[];
  customRenderers?: {
    [key: string]: (data: any) => JSX.Element;
  };
}

const DataTableRow = ({ dataPoint, displayedFields, customRenderers }: DataTableRowProps) => {
  return (
    <tr>
      {displayedFields.map((fieldName) => (
        <td key={fieldName} className="p-4 border-b text-center">
          {customRenderers && customRenderers[fieldName]
            ? customRenderers[fieldName](dataPoint)
            : dataPoint[fieldName]}
        </td>
      ))}
    </tr>
  );
};

export default DataTableRow;