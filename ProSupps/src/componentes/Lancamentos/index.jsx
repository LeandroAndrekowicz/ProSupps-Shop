import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Produtos from  '../Inicio/Produtos.jsx'
import {produtos} from '../../../public/Produtos.json'
import {BiSolidSearchAlt2} from 'react-icons/bi'
import {MdAccountCircle} from 'react-icons/md'
import {BsDashCircleDotted, BsFillCartFill} from 'react-icons/bs'

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

    const Inicio = () =>{
        window.location.href = '/'
    }


  return (
    <div className='container-lancamentos'>
        <div>
            <Header />
        </div>    
        <div>
            <div className='container-inicio'>
                <div className='container-inicio-logo' onClick={() => Inicio}>
                    <div className='img-logo' ></div>
                </div>
                <div className='container-inicio-input'>
                    <input type="text" className='input' placeholder='Digite o que deseja...'/>
                    <BiSolidSearchAlt2 className='icone-pesquisa'/>
                </div>
                <div className='container-inicio-login'>
                    <a href="/" className='container-conta'>
                    <MdAccountCircle className='conta' />
                    <span>Minha conta</span>
                    </a>
                    <a href="/" className='container-carrinho'>
                    <BsFillCartFill className='carrinho'/>
                    </a>
                </div>
            </div>
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