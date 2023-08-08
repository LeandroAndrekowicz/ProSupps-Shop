import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Produtos from  '../Inicio/Produtos.jsx'
import {produtos} from '../../../public/Produtos.json'

import './Lancamentos.css'

const Lancamentos = () => {

    const [haveProducts, setHaveProducts] = useState(false);


    useEffect(() =>{
        if(produtos.length > 0){
            setHaveProducts(true);
        }
        else{
            setHaveProducts(false);
        }
    });


  return (
    <div className='container-lancamentos'>
        <div>
            <Header />
        </div>    
        <div className='container-banner'>
            <a href="/lancamentos">
                <img src="./banner.jpg" alt="Banner da pagina" />
            </a>
        </div>
        {
            haveProducts && 
            <div className='produtos-preco'> 
                <Produtos produtos={produtos} />
            </div>
        }
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Lancamentos