import React, { useState } from "react";
import TabelaClientes from "./components/TabelaCliente";
import NewForm from "./components/NewForm";
import "./App.css";
import TabelaEntregas from "./components/TabelaEntrega";
import ImageComponent from "./components/ImageLogo";

function App() {
  const [mostrarTabelaClientes, setMostrarTabelaClientes] = useState(true);

  const alternarTabela = () => {
    setMostrarTabelaClientes(!mostrarTabelaClientes);
  };


  return (
    <div className="App">
      
      <ImageComponent src="https://www.aguabarueri.com.br/images/logo-aguabarueri.png" alt="logo-aguas-barueri"   />
      
      <NewForm />

      {mostrarTabelaClientes ? <TabelaClientes /> : <TabelaEntregas />}
      
      <button id="btn-change-table" className="btn-change-table" onClick={alternarTabela}>
        <span class="material-symbols-outlined">
          trending_flat
        </span>
      </button>
      
    </div>
  );
}

export default App;
