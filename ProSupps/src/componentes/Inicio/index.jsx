import React, { useEffect, useState } from 'react';
import Header from '../Header';
import './Inicio.css';
import Pesquisa from './Inicio';
import Carousel from './Carousel';
import Produtos from './Produtos';
import Carousel2 from './Carousel2';
import Footer from '../Footer';
import api from '../../service/api.js';

const Inicio = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await api.get('/products/');
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const fetchData = async () => {
    try {
      await getProducts();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Header />
        <Pesquisa />
      </div>

      <div className='container-carousel'>
        <Carousel />
        <Carousel2 />
      </div>

      <div className='container-rodape'>
        {products.length > 0 && <Produtos produtos={products.filter((item) => item.idProdutos <= 4)} />}
        <Footer />
      </div>
    </>
  )
}

export default Inicio;