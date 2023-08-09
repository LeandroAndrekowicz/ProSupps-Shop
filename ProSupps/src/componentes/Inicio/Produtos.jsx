import React from 'react'
import './Produtos.css'
import { Link } from 'react-router-dom'

const Produtos = ({produtos}) => {
  return (
    <div className='cards'>
      <div className='cardGrid'>
        {produtos.map((item) =>{
          return(
            <a 
              href={`/produtos/${item.tag}`}
              key={item.id}
              className='cadaproduto'>
              <div className="card">
                <div className='texto'>
                  <h2>{item.nome}</h2>
                </div>
                <img src={item.imagem} alt={item.nome} />
                <div className='textoPreco'>
                  <h2 className='preco'>R$ {item.preco}</h2>
                </div>
            </div>
            </a>
          )
        })}
      </div>
    </div>
    )
}

export default Produtos