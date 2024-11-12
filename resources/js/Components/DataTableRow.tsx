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
      {displayedFields.map((fieldName) => {
        const hasDot = fieldName.includes(".");
        const [beforeDot, afterDot] = hasDot ? fieldName.split(".") : [fieldName, null];
        return (
          <td key={fieldName} className="p-4 border-b text-center">
            {customRenderers && customRenderers[fieldName]
              ? customRenderers[fieldName](dataPoint)
              : hasDot
              ? dataPoint[beforeDot]?.[afterDot]
              : dataPoint[beforeDot]
            }
          </td>
        );
      })}
    </tr>
  );
};

export default DataTableRow;