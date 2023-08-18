import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './MyAccount.css';

const Conta = () => {
  const [isSingUpMode, setIsSingUpMode] = useState(false);

  const handleSignUpClick = () =>{
    setIsSingUpMode(true);
    console.log('udhauhsdhusa');
  }

  const handleSignInClick = () =>{
    setIsSingUpMode(false);
  }

  return (
    <div className={`loginContainer ${isSingUpMode ? 'sign-up-mode' : ''}`}>
      <div className='forms-container'>
        <div className='signin-signup'>
          <form action="#" className='sign-in-form loginForm'>
            <h2 className='title'>Sign in</h2>

            <div className='input-field'>
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
              <input type="text" className='LoginInput' placeholder='Username'/>
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx auto'/>
              <input type="email" className='loginInput' placeholder='Email'/>
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faLock} className='my-auto mx auto'/>
              <input type="password" className='loginInput' placeholder='Password'/>
            </div>

            <button className='btn'>Sign In</button>
            <p className='social-text loginp'>Sign in with social platforms</p>

            <div className='social-media'>
              <a href="/">
                <FontAwesomeIcon icon="fa-brands fa-google" className='my-auto mx-auto'/>
              </a>
              <a href="/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className='my-auto mx-auto'/>
              </a>
            </div>
          </form>

          <form action="#" className='sign-up-form loginForm'>
            <h2>Sign up</h2>
            <div className='input-field'>
              <FontAwesomeIcon icon={faUser} className='my-auto mx-auto' />
              <input type="text" className='loginInput' placeholder='Username'/>
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto' />
              <input type="email" className='loginInput' placeholder='Email'/>
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faLock} className='my-auto mx-auto' />
              <input type="password" className='loginInput' placeholder='Password'/>
            </div>
            
            <button className='btn'>Sign Up</button>
            <p className='social-text loginp'>Sign up with social platforms</p>

            <div className='social-media'>
            <a href="/">
                <FontAwesomeIcon icon="fa-brands fa-google" className='my-auto mx-auto'/>
              </a>
              <a href="/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className='my-auto mx-auto'/>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>Novo aqui?</h3>
            <p className='loginp'>
              dhausdhuashduashduhasudhasuduhauasudasd
            </p>
            <button className='btn transparent' onClick={() => handleSignUpClick()}>
              Sign Up
            </button>
          </div>
          <img src="" alt="" />
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <h3>Ja tem cadastro?</h3>
            <p>dihausidhauhsduahsduiahpfiuasdhfuahfas</p>
            <button className='btn-transparent' id='sign-in-btn' onClick={() => handleSignInClick()}>
              Sign In
            </button>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Conta