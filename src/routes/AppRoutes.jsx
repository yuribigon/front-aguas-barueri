import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyled } from "../theme/GlobalStyled";
import Pedidos from "../page/Pedidos";

function AppRoutes(){
    return (
        <>
            <GlobalStyled/>
            <BrowserRouter>            
                <Routes>
                    <Route path="*" element={<h1>Not Found</h1>}/>
                    <Route path="/" element={<Pedidos/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;