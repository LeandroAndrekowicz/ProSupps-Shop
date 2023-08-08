import React from 'react'
import {BsTelephoneFill} from 'react-icons/bs'
import './Footer.css'
import {RiWhatsappFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'


const Footer = () => {
  return (
    <div className='container-footer' style={{background: '#ebebe3'}}>
      <div className='container-quem-somos'>
        <h2>QUEM SOMOS</h2>
        <p>
        A ProSupps Suplementos está no mercado há mais de 20 anos. Em nossa loja você encontra as melhores marcas de suplementos alimentares do mercado nacional e importado. Com atendimento personalizado voltado as necessidades dos nossos clientes, buscamos sempre auxiliar para que o mesmo alcance seus objetivos, sejam eles: aumento de massa muscular, desempenho ou qualidade de vida!
        </p>
      </div>
      <div className='container-atendimento'>
        <h2>ATENDIMENTO</h2>
        <p>
          <RiWhatsappFill/>
          (42) 98831-7272  
        </p>
        <p>
          <BsTelephoneFill />
          (42) 3522-9867
        </p>
        <p>
          <MdEmail />
          suporte.prosupps@gmail.com
        </p>
      </div>
      <div className='container-formas-de-pagamento'>
        <h2>FORMAS DE PAGAMENTO</h2>
        <div className='formas-pagamento'/>
        <h2>SEGURANÇA</h2>
        <a href="/">
          <div className='encripted'></div>
        </a>
      </div>
    </div>
  )
}

export default Footer