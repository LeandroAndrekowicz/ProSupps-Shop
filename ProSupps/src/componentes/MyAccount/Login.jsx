import React, { useEffect, useState } from "react"
import  './MyAccount.css'
import Header from '../Header'
import api from '../../service/api.js'

import md5 from 'md5'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function () {
  let [authMode, setAuthMode] = useState("signin");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [data, setData] = useState([]);
  const [usuario, setUsuario] = useState({
    nome: '',
    usuario: '',
    senha: '',
  });


  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      await getUsers();
    } catch (err) {
      console.error(err);
    }
  };
  
  const getUsers = async () => {
    try {
      const res = await api.get('/users/');
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  //Seta dados que serão salvos no banco
  const handleChangeValues = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  };

  //Salva dados no banco
  const handleClickRegister = async () =>{
    event.preventDefault();
    try{
        const res = await api.post('/register/', usuario);
        if(res.data === false){
            setFailure(true);
            toast.warn('Email ja cadastrado !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else{
            setSuccess(true);
            setAuthMode('signup')
        }
    }
    catch (err){
        console.log(err);
    }
  }

  const handleClickLogin = async () =>{
    event.preventDefault();
    let senha = md5(usuario.senha)
    try{
        data.map((item) =>{
            if(usuario.usuario === item.usuario && item.senha === senha){
                console.log('deu boa')
            }
            else{
                
            }
        })
    }
    catch{

    }
  } 

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
        <>
            <Header />
            <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleClickLogin}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Entrar</h3>
                    <div>
                        Não tem registro?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Inscrever-se
                        </span>
                    </div>
                    <div className="container-linha">
                        <label>Email </label>
                        <input
                            type="email"
                            placeholder="E-mail" 
                            name="usuario"
                            value={usuario.usuario}
                            onChange={handleChangeValues}
                            required/>
                    </div>
                    <div className="container-linha">
                        <label>Senha </label>
                        <input
                            type="password"
                            placeholder="Senha" 
                            name="senha"
                            value={usuario.senha}
                            onChange={handleChangeValues}
                            required/>
                    </div>
                    <div className="button-login">
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </div>
                    <p className="text-center">
                        Esqueceu a <a href="#">senha?</a>
                    </p>
                </div>
            </form>
        </div>
        </>
    )
  }

  return (
    <>
        <Header />
        <div className="Auth-form-container">
            <ToastContainer/>
            <form className="Auth-form" onSubmit={handleClickRegister}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Registrar</h3>
                    <div>
                        Já possui registro?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Entrar
                        </span>
                    </div>
                    <div className="container-linha">
                        <label>Nome </label>
                        <input
                        type="text"
                        placeholder="Nome completo"
                        name="nome"
                        value={usuario.nome}
                        onChange={handleChangeValues}
                        required
                        />
                    </div>
                    <div className="container-linha">
                        <label>Email</label>
                        <input
                        type="email"
                        placeholder="Email"
                        name="usuario"
                        value={usuario.usuario}
                        onChange={handleChangeValues}
                        required
                        />
                    </div>
                    <div className="container-linha">
                        <label>Senha</label>
                        <input
                        type="password"
                        placeholder="Senha"
                        name="senha"
                        value={usuario.senha}
                        onChange={handleChangeValues}
                        required
                        />
                    </div>
                    <div className="button-login">
                        <button type="submit" className="btn">
                            Cadastrar
                        </button>
                    </div>
                    <p className="text-center">
                      Esqueceu a <a href="#">senha?</a>
                  </p>
                </div>
          </form>
      </div>
    </>
  )
}