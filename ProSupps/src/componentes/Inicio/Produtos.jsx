import React from 'react'
import './Produtos.css'

const Produtos = ({produtos}) => {
  return (
    <div className='cards'>
      <div className='cardGrid'>
        {produtos.map((item) =>{
          return(
            <a 
              href={`/produtos/${item.tag}`}
              key={item.idProdutos}
              className='cadaproduto'>
              <div className="card">
                <div className='texto'>
                  <h2>{item.produto}</h2>
                </div>
                <img src={item.URL} alt={item.produto} />
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