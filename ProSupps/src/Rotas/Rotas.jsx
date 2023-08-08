import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from '../componentes/Inicio'
import Lancamentos from "../componentes/Lancamentos";
import Detalhes from "../componentes/DetalhesProdutos";


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/lancamentos" element={<Lancamentos />}/>
                <Route path="/produtos/:tag" element={<Detalhes />} />
            </Routes>
        </BrowserRouter>
    )
}