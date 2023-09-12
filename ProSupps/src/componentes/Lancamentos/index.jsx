import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Produtos from  '../Inicio/Produtos.jsx'
import './Lancamentos.css'
import Pesquisa from '../Inicio/Inicio'
import api from '../../service/api'

const Lancamentos = () => {

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
    <div className='container-lancamentos'>
        <div>
            <Header />
            <Pesquisa />
        </div>    
        <div className='container-banner'>
            <a href="/lancamentos">
                <img src="https://i.ibb.co/M1fb69r/banner.jpg" alt="Banner da pagina" />
            </a>
        </div>
        {
            products.length && 
            <div className='produtos-preco'> 
                <Produtos produtos={products} />
            </div>
        }
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Lancamentos