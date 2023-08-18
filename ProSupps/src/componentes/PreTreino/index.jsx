import React, { useEffect, useState } from 'react'
import './PreTreino.css'
import Header from '../Header'
import {BiSolidSearchAlt2} from 'react-icons/bi'
import {MdAccountCircle} from 'react-icons/md'
import {BsFillCartFill} from 'react-icons/bs'
import Produtos from '../Inicio/Produtos'
import {produtos} from '../../../public/Produtos.json'
import Footer from '../Footer'


const PreTreino = () => {
  const [haveProducts, setHaveProducts] = useState(false);
  const [products, setProducts] = useState()

  window.onload = (verificaProdutos)

  function verificaProdutos(){
    produtos.map((item) =>{
      if (item.categoria === 'pretreino') {
        setHaveProducts(true);
        const data = produtos.filter((item) => item.categoria === 'pretreino');
        setProducts(data)
      }
    })
  }

  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
          <div>
            <div>
              <div className='container-inicio'>
                  <div className='container-inicio-logo'>
                      <a href="/lancamentos">
                          <div className='img-logo' ></div>
                      </a>
                  </div>
                  <div className='container-inicio-input'>
                      <input type="text" className='input' placeholder='Digite o que deseja...'/>
                      <BiSolidSearchAlt2 className='icone-pesquisa'/>
                  </div>
                  <div className='container-inicio-login'>
                      <a href="/minha-conta" className='container-conta'>
                          <MdAccountCircle className='conta' />
                          <span>Minha conta</span>
                      </a>
                      <a href="/" className='container-carrinho'>
                          <BsFillCartFill className='carrinho'/>
                      </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-pre-treino'>
          <div className='banner-pre-treino'>
            <img src="../imagensPreTreino/bannerPreTreino.jpg" alt="Banner PreTreino" />
          </div>
          <div className='container-produtos-pre-treino'>
            {haveProducts && <Produtos produtos={products} />}
          </div>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default PreTreino