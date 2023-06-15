import React, { useState } from "react";
import "../App.css";
import ImageLogo from "../components/ImageLogo";
import NewForm from "../components/NewForm";
import TabelaEntregas from "../components/TabelaEntregas";
import TabelaClientes from "../components/TabelaClientes";
import Menu from "../components/Menu";
import BtnLogOut from "../components/ButtonLogOut";


const Pedidos = () => {
  const [mostrarTabelaClientes, setMostrarTabelaClientes] = useState(true);

  const alternarTabela = () => {
    setMostrarTabelaClientes(!mostrarTabelaClientes);
  };


  return (
    <>
      
      <ImageLogo />
      <BtnLogOut/>
      <Menu/>
      <NewForm />

      {mostrarTabelaClientes ? <TabelaClientes /> : <TabelaEntregas />}
      
      <button id="btn-change-table" className="btn-change-table" onClick={alternarTabela}>
        <span class="material-symbols-outlined">
          trending_flat
        </span>
      </button>
      
    </>
  );
}

export default Pedidos;