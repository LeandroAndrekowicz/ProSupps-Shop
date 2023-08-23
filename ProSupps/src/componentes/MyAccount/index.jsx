import { useState } from 'react';
import './MyAccount.css';
import Usuario from './Usuario'
import Login from './Login';

const Conta = () => {
  const [logged, setLogged] = useState(false)

  return (
    <>
      {logged && <Usuario />}
      <Login />
    </>
  )
}

export default Conta