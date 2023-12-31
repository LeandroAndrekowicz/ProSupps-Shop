
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from '../componentes/Inicio'
import Lancamentos from "../componentes/Lancamentos";
import Detalhes from "../componentes/DetalhesProdutos";
import PreTreino from "../componentes/PreTreino";
import Creatina from "../componentes/Creatina";
import Objetivos from "../componentes/Objetivos";
import MassaMuscular from "../componentes/Objetivos/MassaMuscular";
import Emagracimento from "../componentes/Objetivos/Emagracimento";
import Energia from "../componentes/Objetivos/Energia";
import QualidadeVida from "../componentes/Objetivos/QualidadeVida";
import Conta from "../componentes/MyAccount";


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
                <Route path="/objetivos/emagrecimento" element={<Emagracimento />} />
                <Route path="/objetivos/energia" element={<Energia />} />
                <Route path="/objetivos/qualidade-de-vida" element={<QualidadeVida />} />
                <Route path="/minha-conta" element={<Conta />} />
            </Routes>
        </BrowserRouter>
    )
}