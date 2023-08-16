import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from '../componentes/Inicio'
import Lancamentos from "../componentes/Lancamentos";
import Detalhes from "../componentes/DetalhesProdutos";
import PreTreino from "../componentes/PreTreino";
import Creatina from "../componentes/Creatina";
import Objetivos from "../componentes/Objetivos";
import MassaMuscular from "../componentes/Objetivos/MassaMuscular";


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/lancamentos" element={<Lancamentos />}/>
                <Route path="/produtos/:tag" element={<Detalhes />} />
                <Route path="/pre-treino" element={<PreTreino />} />
                <Route path="/creatina" element={<Creatina />} />
                <Route path="/objetivos" element={<Objetivos />} />
                <Route path="/objetivos/massa-muscular" element={<MassaMuscular />} />
            </Routes>
        </BrowserRouter>
    )
}