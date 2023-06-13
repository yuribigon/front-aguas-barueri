import fakeData from "../MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function TabelaClientes() {
  // const [showTable, setShowTable] = React.useState(true);

  // const toggleTable = () => {
  //   setShowTable(!showTable);
  // };

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "CNPJ",
        accessor: "cnpj",
      },
      {
        Header: "Razão Social",
        accessor: "razao_social",
      },
      {
        Header: "Nome Fantasia",
        accessor: "nome_fantasia",
      },
      {
        Header: "Contato",
        accessor: "contact",
      },
      {
        Header: "Valor (m\u00b3)",
        accessor: "value",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    
      <div className="container">
        
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
    
  );
}

export default TabelaClientes;
