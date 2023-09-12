import React from 'react'
import {BiSolidSearchAlt2} from 'react-icons/bi'
import {BsFillCartFill} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'

const Pesquisa = () => {
  return (
    <div className='container-inicio'>
        <div className='container-inicio-logo'>
            <div className='img-logo'></div>
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
  )
}

export default Pesquisa