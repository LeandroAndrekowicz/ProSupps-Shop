import React from 'react'
import './Header.css'
import {ImMenu} from 'react-icons/im'

const Header = () => {
  return (
    <div className='container-header'>
        <div className='container-header-frase'>
            <h1>Suplementos de qualidade para resultados excepcionais!</h1>
        </div>
        <div>
        </div>
        <div className='container-header-menu'>
            <header className='header'>
                <a className='logo' href="">dasdasd</a>
                <nav className='nav'>
                    <input type="checkbox" id='checkbox' className='checkbox'/>
                    <label for="checkbox" className='label-menu'>
                        Menu 
                        <span className='hamburguer'></span>
                    </label>
                    <ul className='menu'>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/">Teste1</a></li>
                        <li><a href="/">Teste2</a></li>
                        <li><a href="/">Teste3</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    </div>
  )
}

export default Header