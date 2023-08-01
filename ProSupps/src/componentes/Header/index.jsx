import React from 'react'
import './Header.css'
import {MdAccountCircle} from 'react-icons/md'

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
                <a className='logo' href="">PROSUPPS</a>
                <nav className='nav'>
                    <input type="checkbox" id='checkbox' className='checkbox'/>
                    <label htmlFor="checkbox" className='label-menu'>
                        Menu 
                        <span className='hamburguer'></span>
                    </label>
                    <ul className='menu'>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/">Lançamentos</a></li>
                        <li><a href="/">Pré-treino</a></li>
                        <li><a href="/">Creatina</a></li>
                        <li><a href="/">Objetivos</a></li>
                        <li className='acount'><a href="/" ><MdAccountCircle style={{width: '50px', height: '25px'}} /> Minha conta</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    </div>
  )
}

export default Header