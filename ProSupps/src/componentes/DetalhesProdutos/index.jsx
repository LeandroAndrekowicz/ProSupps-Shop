import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from '../Header';
import Footer from "../Footer";
import './Detalhes.css';
import PreTreino from "./PreTreino";
import { WheyProtein } from "./WheyProtein";
import Carnitia from "./Carnitia";
import Creatina from "./Creatina";
import Hipercalorico from "./Hipercalorico";
import Multivitaminico from "./Multivitaminico";
import api from "../../service/api";

export default function Detalhes() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const { tag } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get('/products/');
        const selectedProduct = res.data.find(item => item.tag === tag);

        if (selectedProduct) {
          setProdutoSelecionado(selectedProduct);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [tag]);

  return (
    <div className="container-produtosss">
      <div>
        <Header />
      </div>
      <div>
        {produtoSelecionado ? (
          <div className="product">
            <div className="product-img">
              <img src={produtoSelecionado.URL} alt="" />
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
        ) : (
          <p>Produto não encontrado.</p>
        )}
      </div>
      <div>
        {produtoSelecionado && (
          <>
            {produtoSelecionado.categoria === 'pretreino' && <PreTreino />}
            {produtoSelecionado.categoria === 'wheyprotein' && <WheyProtein />}
            {produtoSelecionado.categoria === 'carnitina' && <Carnitia />}
            {produtoSelecionado.categoria === 'creatina' && <Creatina />}
            {produtoSelecionado.categoria === 'hipercalorico' && <Hipercalorico />}
            {produtoSelecionado.categoria === 'multivitaminico' && <Multivitaminico />}
          </>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
