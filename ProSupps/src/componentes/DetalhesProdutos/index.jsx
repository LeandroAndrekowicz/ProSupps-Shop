import { useParams } from "react-router-dom"
import {produtos} from "../../../public/Produtos.json";
import { useEffect, useState } from "react";
import Header from '../Header'
import Footer from "../Footer";
import './Detalhes.css'


export default function Detalhes(){

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
            }
        });
    }

    console.log(produtoSelecionado.img);
    return(
        <div className="container-produtosss">
            <div>
                <Header />
            </div>
            <div>
                <div class="product">
                    <div class="product-img">
                        <img src={produtoSelecionado.img} alt=""/>
                    </div>
                    <div class="product-listing">
                        <div class="content">
                            <h1 class="name">{produtoSelecionado.nome}</h1>
                            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum optio natus quibusdam ea nam odit vitae id unde officia.</p>
                            <p class="price">R$ {produtoSelecionado.preco}</p>
                            <div class="btn-and-rating-box">
                                <div class="rating">
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star.png?raw=true" alt=""/>
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star.png?raw=true" alt=""/>
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star.png?raw=true" alt=""/>
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star.png?raw=true" alt=""/>
                                    <img src="https://github.com/kunaal438/product-page/blob/master/img/star%20stroke.png?raw=true" alt=""/>
                                </div>
                            <button class="btn">buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}