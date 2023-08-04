import React from 'react'
import './Produtos.css'

const Produtos = ({produtos}) => {
  return (
    <div className='cards'>
      <div className='cardGrid'>
        {produtos.map((item) =>{
          return(
            <div className="card">
              <div className='texto'>
                <h2>{item.nome}</h2>
              </div>
              <img src={item.imagem} alt={item.nome} />
              <div className='textoPreco'>
                <h2>R$ {item.preco}</h2>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    )
}

export default Produtos