import React from 'react'
import { useState } from 'react'
import './Objetivos.css'
import Header from '../Header'
import {BiSolidSearchAlt2} from 'react-icons/bi'
import {MdAccountCircle} from 'react-icons/md'
import {BsFillCartFill} from 'react-icons/bs'
import CarouselObjetivos from './CarouselObjetivos'
import Footer from '../Footer'

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
            <div className='container-texto-objetivos'>
                <p>Os benefícios dos suplementos alimentares são os mais variados. Há quem tome para ter bem-estar, melhorar a saúde, aumentar o nível de determinado nutriente, ganhar músculos e emagrecer. </p>
                <p>O uso de suplementos vitamínicos, por exemplo, pode ajudar a suprir a falta de alguma vitamina que uma dieta não conseguiu atingir. No Brasil, muitas pessoas buscam os benefícios dos suplementos alimentares. </p>
                <p>Associação Brasileira da Indústria de Alimentos para Fins Especiais e Congêneres (Abiad) mostrou que em quase <strong>60% dos lares brasileiros existe ao menos uma pessoa utilizando algum suplemento alimentar.</strong> A grande maioria utiliza para obter um complemento à sua alimentação ou buscando saúde e bem-estar.</p>
                <p>Embora seja possível comprar os suplementos alimentares como os suplementos vitamínicos, por exemplo, sem nenhuma prescrição, é importante estar atento às quantidades.</p>
                <p>Isso porque caso você faça uso de suplementos vitamínicos, ou de qualquer outro tipo de complemento, de forma errada é possível tanto não obter o resultado desejado, como sofrer algum dano, principalmente em caso de uma dosagem acima do indicado, podendo causar intoxicações e até mesmo sobrecarga nos rins, já que ele é responsável por filtrar estas substâncias. Por isso, é importante seguir as orientações de um profissional. </p>
                <div className='container-imagem-objetivos'>
                    <img src="../imagensObjetivos/suplements1.png" alt="Imagem dos Suplementos" />
                </div>
            </div>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Objetivos