import "./App.css";
import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function App() {
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

    const newFormRef = React.useRef(null);
    const editFormRef = React.useRef(null);
  
    function showForm() {
      const newForm = newFormRef.current;
      if (newForm.style.display === 'block') {
        newForm.style.display = 'none';
      } else {
        newForm.style.display = 'block';
      }
    }
  
    function showEditForm() {
      const editForm = editFormRef.current;
      if (editForm.style.display === 'block') {
        editForm.style.display = 'none';
      } else {
        editForm.style.display = 'block';
      }
    }
  
    React.useEffect(() => {
      const newForm = newFormRef.current;
      const editForm = editFormRef.current;
  
      if (newForm && editForm) {
        newForm.style.display = 'none';
        editForm.style.display = 'none';
      }
    }, []);
  

  return (
    <div className="App">
      <div ref={newFormRef} className="new-form">
        Novo cadastro
      </div>
      <div ref={editFormRef} className="edit-form">
        Editar cadastro
      </div>
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
      <button id="btn-edit" className="btn-edit" onClick={showEditForm}>
        <span class="material-symbols-outlined">
          edit
        </span>
      </button>
      <button id="btn-new" className="btn-new" onClick={showForm}>
        <span class="material-symbols-outlined">
          add
        </span>
      </button>
    </div>
  );
}

export default App;