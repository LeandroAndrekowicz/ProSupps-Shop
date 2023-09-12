import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Header from '../Header'
import Footer from "../Footer";
import './Detalhes.css'
import PreTreino from "./PreTreino";
import { WheyProtein } from "./WheyProtein";
import Carnitia from "./Carnitia";
import Creatina from "./Creatina";
import Hipercalorico from "./Hipercalorico";
import Multivitaminico from "./Multivitaminico";


export default function Detalhes(){

    const [multivitaminico, setMultivitaminico] = useState(false)
    const [hipercalorico, setHipercalorico] = useState(false)
    const [preTreino, setPreTreino] = useState(false); 
    const [wheyProtein, setWheyProtein] = useState(false);
    const [carnitia, setCarnitia] = useState(false);
    const [creatina, setCreatina] = useState(false)
    const [produtoSelecionado, setProdutoSelecionado] = useState({
        nome: '',
        preco: '',
        img: '',
    });
    
    const {tag} = useParams();

    window.onload = () => {
        produtos.map((item) => {
            if (item.tag === tag) {
                setProdutoSelecionado({
                    nome: item.nome,
                    preco: item.preco,
                    img: item.imagem
                });
                if(item.categoria === 'pretreino'){
                    setPreTreino(true)
                }
                else if(item.categoria === 'wheyprotein'){
                    setWheyProtein(true)
                }
                else if(item.categoria === 'carnitina'){
                    setCarnitia(true)
                }
                else if(item.categoria === 'creatina'){
                    setCreatina(true)
                }
                else if(item.categoria === 'hipercalorico'){
                    setHipercalorico(true)
                }
                else if(item.categoria === 'multivitaminico'){
                    setMultivitaminico(true)
                }
            }
        });
    }

    return(
        <div className="container-produtosss">
            <div>
                <Header />
            </div>
            <div>
                <div className="product">
                    <div className="product-img">
                        <img src={produtoSelecionado.img} alt=""/>
                    </div>
                    <div className="product-listing">
                        <div className="content">
                            <h1 className="name">{produtoSelecionado.nome}</h1>
                            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                            <p className="price">R$ {produtoSelecionado.preco}</p>
                            <div className="btn-and-rating-box">
                                <div className="rating">
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star.png?raw=true" alt=""/>
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star.png?raw=true" alt=""/>
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star.png?raw=true" alt=""/>
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star.png?raw=true" alt=""/>
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star%20stroke.png?raw=true" alt=""/>
                                </div>
                            <button className="btn">Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {preTreino && <PreTreino />}
                {wheyProtein && <WheyProtein />}
                {carnitia && <Carnitia />}
                {creatina && <Creatina />}
                {hipercalorico && <Hipercalorico />}
                {multivitaminico && <Multivitaminico />}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}