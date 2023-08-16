import React from 'react'
import { useState } from 'react'
import './Objetivos.css'
import Header from '../Header'
import {BiSolidSearchAlt2} from 'react-icons/bi'
import {MdAccountCircle} from 'react-icons/md'
import {BsFillCartFill} from 'react-icons/bs'
import Produtos from '../Inicio/Produtos'
import {produtos} from '../../../public/Produtos.json'
import Footer from '../Footer'
import CarouselObjetivos from './CarouselObjetivos'

const Objetivos = () => {
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
          </div>
        </div>
        <div className='container-objetivos'>
            <h2>Qual seu Objetivo?</h2>
            <CarouselObjetivos />
        </div>
    </div>
  )
}

export default Objetivos