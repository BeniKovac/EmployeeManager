import React from 'react'

interface Props {
    headerName: string
}

const DataTableHeader = ({ headerName }: Props) => {
  return (
    <th className="py-2 px-4 border-b dark:border-gray-700 text-left text-gray-600 dark:text-gray-400">
        {headerName.toUpperCase()}
    </th>
  )
}

export default DataTableHeader