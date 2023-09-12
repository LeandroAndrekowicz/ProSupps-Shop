import React, { useEffect, useState } from 'react'
import './PreTreino.css'
import Header from '../Header'
import Produtos from '../Inicio/Produtos'
import Footer from '../Footer'
import Pesquisa from '../Inicio/Inicio'
import api from '../../service/api'


const PreTreino = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const res = await api.get('/products/pretreino');
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
    <div>
        <div>
            <Header />
            <Pesquisa />
        </div>
        <div className='container-pre-treino'>
          <div className='banner-pre-treino'>
            <img src="https://i.ibb.co/6vgNVKp/banner-Pre-Treino.jpg" alt="Banner PreTreino" />
          </div>
          <div className='container-produtos-pre-treino'>
            {products.length && <Produtos produtos={products} />}
          </div>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default PreTreino