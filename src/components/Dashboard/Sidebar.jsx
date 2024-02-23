import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import imgLogin from '../../assets/img/sidebar-2.jpg'
import NavbarHeader from './NavbarHeader';
import Transaccion from '../Transaccion';
import '../../assets/css/Dashboard.css'

import { Button } from "react-bootstrap";
import CracionTransaccion from '../CracionTransaccion';

const Sidebar = () => {

    const Salir = () => {
      localStorage.removeItem('tk');
      window.location.replace('')
      localStorage.clear();
    }

    const dashboardRoutes = [
        {
          path: "Inicio",
          name: "Transacciones",
          icon: "nc-icon nc-chart-pie-35",
          component: Transaccion,
        },
        {
          upgrade: true,
          name: "Crear Transaccion",
          path: "Creacion",
          icon: "nc-icon nc-alien-33",
          component: CracionTransaccion,
        }
        
      ];

      let email =  localStorage.getItem('email') 

  return (
    <>
       <div className='sticky'>
    <div className="wrapper">
       <div className="sidebar" >
      <div
        className="sidebar-background"
        style={{
          backgroundImage: `url(${imgLogin})`
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href=""
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              {/* <img src={Logo} alt="..." /> */}
              <p>{email}</p>
            </div>
          </a>
          <a className="simple-text" href="">
            
          </a>
        </div>
        <div className='nav'>
                {dashboardRoutes.map((ruta, index) => 
               
                 <li key={index}
                 
                 className="">
                  
                  <Link className="nav-link" to={ruta.path}  >
                   <i className="nc-icon nc-zoom-split" />
                   <p>{ruta.name}</p>
                 </Link>
               </li>          

                )} 
                <li className="">
                  
                  <Button to={"AdminStc"} className="nav-link boton-salir" variant="danger" onClick={Salir} >
                   <Link className="nav-link" to={"/Login"}  >
                   <i className="nc-icon nc-zoom-split" />
                   <p className='text-salir' >Salir</p>
                 </Link>
                 </Button>
               </li>   
                
        </div>
      </div>
    </div>
     
        <div className="main-panel" >
          <NavbarHeader/>
          <div className="content">

            <section>
                 <Outlet/> 
            </section>
           
          </div>
          {/* <Footer /> */}
        </div>
      </div>
  
       

    </div>
    </>
  )
}

export default Sidebar