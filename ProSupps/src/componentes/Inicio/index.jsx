import React from 'react'
import Header from '../Header'
import './Inicio.css'
import {BiSolidSearchAlt2} from 'react-icons/bi'
import {BsFillCartFill} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'
import Carousel from './Carousel'
import Produtos from './Produtos'
import Carousel2 from './Carousel2'
import Footer from '../Footer'
import {produtos} from '../../../public/Produtos.json'

const Inicio = () => {
  return (
    <>
        <Header />
        <div className='container-inicio'>
            <div className='container-inicio-logo'>
                <div className='img-logo'></div>
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
        <div className='container-carousel'>
          <Carousel />
          <Carousel2/>
        </div>
        <div className='container-rodape'>
          <Produtos produtos={produtos}/>
          <Footer/>
        </div>
    </>
  )
}

export default Inicio