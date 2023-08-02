import React from 'react'
import './Produtos.css'
import {produtos} from '../../../public/Produtos.json'


const Produtos = () => {
  return (
    <div className='main'>
      <h1>Alguns produtos</h1>
      {produtos.map((item) =>{
        return(
          <ul className='cards'>
            <li className='cards_item'>
              <div className='card_image'>
                <img src={item.imagem} alt={item.nome} />
              </div>
              <div className='card_content'>
                <h2 className='card_title'>{item.nome}</h2>
                <p className='card_text'>{item.preco}</p>
                <button className='btn card_btn'>Ver mais</button>
              </div>
            </li>
          </ul>
        )
      })}
    </div>
    )
}

export default Produtos