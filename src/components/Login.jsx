import {React, useState } from 'react'
import axios from 'axios';
import imgLogin from '../assets/img/img-login.jpg'
import Sidebar from './Dashboard/Sidebar';
import '../assets/css/login.css';

const Login = () => {

    const [dataUser, setdataUser] = useState([])
    const [Correo, setCorreo] = useState('')
    const [Contraseña, setContraseña] = useState('')

    const baseURL = import.meta.env.VITE_BACKEND_URL
  
    const InputCorreo = (e) => {
        setCorreo(e.target.value);
    }   

    const InputContraseña = (e) => {
        setContraseña(e.target.value);
    }
  
    const dataUsuario = () => {
        console.log(baseURL)
      try {
          axios.post(baseURL+"/Validar", {
            email: "sa@prueba.com",
            contraseña: "Dev123"
        }).then((response) => {
            console.log(response)
            setdataUser(response.data);
            localStorage.setItem('Correo', response.data.usuario[0].email);
            localStorage.setItem('tk', response.data.token);
            })
        
      } catch (error) {
        console.log(error) 
      }
    }

    let usuarioSesion =  localStorage.getItem('tk')


  return (
    <>
      {!usuarioSesion ? (
        <div className="">
          <main className="main-content  mt-0">
            <section>
              <div className="page-header min-vh-100">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                      <div className="card card-plain">
                        <div className="card-header pb-0 text-start">
                          <h4 className="font-weight-bolder">Inicia sesion</h4>
                          <p className="mb-0">
                            Ingresa tu usuario y contraseña
                          </p>
                        </div>
                        <div className="card-body">
                          <form role="form">
                            <div className="mb-3">
                              <input
                                type="sa@prueba.com"
                                onChange={InputCorreo}
                                className="form-control form-control-lg"
                                placeholder="Correo"
                                aria-label="Email"
                              />
                            </div>
                            <div className="mb-3">
                              <input
                                type="Dev123.."
                                onChange={InputContraseña}
                                className="form-control form-control-lg"
                                placeholder="Contraseña"
                                aria-label="Password"
                              />
                            </div>
                            <div className="text-center">
                              <button
                                type="button"
                                onClick={dataUsuario}
                                className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                              >
                                Iniciar Sesion
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                      <div
                        className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                        style={{
                          backgroundImage: `url(${imgLogin})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <span className="mask bg-gradient-primary opacity-6"></span>
                        <h4 className="mt-5 text-white font-weight-bolder position-relative">
                          "Attention is the new currency"
                        </h4>
                        <p className="text-white position-relative">
                          The more effortless the writing looks, the more effort
                          the writer actually put into the process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      ) : (
        <Sidebar />
      )}
    </>
  );
}

export default Login
