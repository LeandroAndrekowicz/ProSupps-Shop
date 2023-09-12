import React, { useEffect, useState } from "react"
import  './MyAccount.css'
import Header from '../Header'
import axios from 'axios'

export default function () {
  let [authMode, setAuthMode] = useState("signin");
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    nome: '',
    usuario: '',
    senha: '',
  });
  const [listUsers, setListUsers] = useState();
  const [usuario, setUsuario] = useState({});
  const [failure, setFailure] = useState(false);

  useEffect(() =>{
    // axios.get('http://localhost:8080/users/').then((res) =>{
    //     setListUsers(res.data);
    // });
  }, []);

  //Seta dados que serão salvos no banco
  const handleChangeValues = (data) =>{
    setData(prevValues => ({
      ...prevValues,
      [data.target.name]: data.target.value,
    }))
  }

  //Seta dados que serão necessarios para verificar o login
  const handleChangeLogin = (usuario) =>{
    setUsuario(prevValues =>({
        ...prevValues,
        [usuario.target.name]: usuario.target.value,
    }))
  }

  //Salva dados no banco
  const handleClickButton = () =>{
    event.preventDefault();
    axios.post('http://localhost:8080/register/', data).then((res) =>{
        console.log(res);
        setSuccess(true);   
        setFailure(false);
        if(res.AxiosError.response.status === 422){
            console.log('Infernooooooooooooo');
        }
    }).catch((err) =>{
        console.log(err);
    });
  }
  console.log(usuario);

  //Verifica se o login esta correto

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
        <>
            <Header />
            <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Entrar</h3>
                    <div className="text-center">
                        Não tem registro?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Inscrever-se
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email </label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="E-mail" 
                            name="usuario"
                            onChange={handleChangeLogin}
                            required/>
                    </div>
                    <div className="form-group mt-3">
                        <label>Senha </label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Senha" 
                            name="senha"
                            onChange={handleChangeLogin}
                            required/>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </div>
                    <p className="text-center mt-2">
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
          <form className="Auth-form">
              <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Registrar</h3>
                  <div className="text-center">
                      Já possui registro?{" "}
                      <span className="link-primary" onClick={changeAuthMode}>
                          Entrar
                      </span>
                  </div>
                  <div className="form-group mt-3">
                      <label>Nome completo</label>
                      <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="e.g Jane Doe" 
                          name="nome"
                          onChange={handleChangeValues}
                          required/>
                  </div>
                  <div className="form-group mt-3">
                      <label>Email</label>
                      <input
                          type="email"
                          className="form-control mt-1"
                          placeholder="Email Address" 
                          name="usuario"
                          onChange={handleChangeValues}
                          required/>
                  </div>
                  <div className="form-group mt-3">
                      <label>Senha</label>
                      <input
                          type="password"
                          className="form-control mt-1"
                          placeholder="Password"
                          name="senha"
                          onChange={handleChangeValues}
                          required/>
                  </div>
                  <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary" onClick={() => handleClickButton()}>
                          Enviar
                      </button>
                      {success && <p>Cadastrado com sucesso</p>}
                      {failure && <p>Usuario já está cadastrado</p>}
                  </div>
                  <p className="text-center mt-2">
                      Esqueceu a <a href="#">senha?</a>
                  </p>
              </div>
          </form>
      </div>
    </>
  )
}