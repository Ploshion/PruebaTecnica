import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../assets/css/creacion.css'

const Transaccion = () => {
  let token =  localStorage.getItem('tk') 
  const baseURL = import.meta.env.VITE_BACKEND_URL

  const [data, setdata] = useState([])

  const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const getDataFacturas = async () => {    
  try {
    await axios.get(baseURL+"/api/Facturas",config)
    .then(function (response) {
      console.log(response.data,"facturas");
      setdata(response.data)
      // getImages()
    })
  } catch (error) {
    console.log(error)
  }
}

const eliminarTransaccion = async (e, Id) => {
  try {
    await axios.delete(baseURL+"/api/Facturas/Eliminar/"+Id, config)
    .then(function (response) {
      console.log(response.data,"Eliminado");
      getDataFacturas();
    })
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getDataFacturas();
}, [])


const Cargando = () => {
  return (
    <>
     <div className='text-center'>
     <div scope="row">Cargando</div>
    </div>
    </>
  )
}


  return (
    <>
      <main className="main-content position-relative border-radius-lg ">
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl m-2 "
          id="navbarBlur"
          data-scroll="false"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb" className="">
              <h3>Transacciones y ventas</h3>
            </nav>
          </div>
        </nav>
        <div className="col-12">
          <div className="card m-2">
            <div className="card-header pb-0">
              <h6>Tabla de transacciones</h6>
            </div>
            <table className="table align-items-center mb-0">
              <thead>
                <tr>
                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Imagen
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Transaccion Id
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                    Valor
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    N° Factura
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Fecha
                  </th>
                  <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Cliente
                  </th>
                  <th className="text-secondary opacity-7"></th>
                  <th className="text-secondary opacity-7"></th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((data, index) => (
                    <tr key={index}>
                      {console.log(data.transaccion)}
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img
                              src={
                                data.transaccion
                                  ? data.transaccion.vehiculo.imagenUrl
                                  : "noP.png"
                              }
                              className="avatar avatar-sm me-3"
                              alt="user1"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center text-sm">
                         <span className="text-xs text-secondary mb-0 font-weight-bold">
                          {data.transaccion.transaccionId}
                        </span>
                      </td>
                      <td className="align-middle text-center text-sm">
                      <p className="text-xs text-secondary mb-0 font-weight-bold">
                          {data.precioVenta}
                        </p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-secondary text-xs font-weight-bold">
                          {data.facturaId}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {data.fechaVenta}
                        </span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">
                          {data.transaccion.cliente.nombres + " " + data.transaccion.cliente.apellidos}
                        </span>
                      </td>
                      <td className="align-middle">
                        <Link
                          to={`/Editar/${data.facturaId}`}
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Edit"
                          onClick={(e) => editarProducto(e, data.facturaId)}
                        >
                          Editar
                        </Link>
                      </td>
                      <td className="align-middle">
                        <Link
                          className="text-secondary font-weight-bold text-xs"
                          data-toggle="tooltip"
                          data-original-title="Eliminar"
                          style={{color: 'red !important' }}
                          onClick={(e) => eliminarTransaccion(e, data.facturaId)}
                        >
                          Eliminar
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <Cargando />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

export default Transaccion