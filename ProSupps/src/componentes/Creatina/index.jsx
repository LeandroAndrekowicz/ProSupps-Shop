import React from 'react'
import { useState, useEffect } from 'react'
import './Creatina.css'
import Header from '../Header'
import Produtos from '../Inicio/Produtos'
import Footer from '../Footer'
import Pesquisa from '../Inicio/Inicio'
import api from '../../service/api'


const Creatina = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
      try {
        const res = await api.get('/products/creatina/');
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
            <img src="https://cdn.shoppub.io/gsn/media/filer_public/21/9e/219ee546-576c-4ad0-a548-8daf4f255741/creatina-max-titanium-banner.jpeg" alt="Banner PreTreino" />
          </div>
          <div className='container-produtos-pre-treino'>
            {products.length > 0 && <Produtos produtos={products} />}
          </div>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Creatina