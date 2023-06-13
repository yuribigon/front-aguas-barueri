import fakeData from "../MOCK_DATA copy.json";
import * as React from "react";
import { useTable } from "react-table";

function TabelaEntregas() {
    const data = React.useMemo(() => fakeData, []);
    const columns = React.useMemo(
      () => [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Data",
          accessor: "date",
        },
        {
          Header: "Valor (m\u00b3)",
          accessor: "value",
        },
      ],
      []
    );
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
  
    return (
      <div>
        
        <div className="container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
      </div>
    );
}

export default TabelaEntregas;