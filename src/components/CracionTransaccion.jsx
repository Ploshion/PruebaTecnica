import React from 'react'
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  Collapse  
} from "react-bootstrap";

const CracionTransaccion = () => {
  const baseURL = import.meta.env.VITE_BACKEND_URL

  
  let token =  localStorage.getItem('tk') 

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const [Nombre, setNombre] = useState('')
  const [Apellido, setApellido] = useState('')
  const [Email, setEmail] = useState('')
  const [Telefono, setTelefono] = useState('')
  const [Direccion, setDireccion] = useState(0)
  const [ciudad, setciudad] = useState([])
  const [vehiculo, setVehiculo] = useState([])
  const [MedioPago, setMedioPago] = useState([])
  const [vehiculoElegido, setvehiculoElegido] = useState([])

  const [archivosImg, setArchivosImg] = useState([])

  const [Ciudades, setCiudades] = useState([])
  const [Vehiculos, setVehiculos] = useState([])
  const [MedioPagos, setMedioPagos] = useState([])

  const [open, setOpen] = useState(false);

  const [ProductoCodigo, setProductoCodigo] = useState([])


  const dataCiudad = async () => {
    try {
       await axios.get(baseURL+"/api/Ciudades", config)
      .then(function (response) {
        console.log(response.data);
        setCiudades(response.data)
                  
      })
    } catch (error) {
      console.log(error)
    }
  }

  const dataVehiculo = async () => {
    try {
      await axios.get(baseURL+"/api/Vehiculos", config)
      .then(function (response) {
        console.log(response.data);
        setVehiculos(response.data)
                  
      })
    } catch (error) {
      console.log(error)

    }
  }

  const dataVehiculobyId = async (Id) => {
    try {
      await axios.get(baseURL+"/api/Vehiculos/"+Id, config)
      .then(function (response) {
        console.log(response.data, 'vehiculo elegido');
        setvehiculoElegido(response.data)
                  
      })
    } catch (error) {
      console.log(error)

    }
  }

  const dataMedioPago = async () => {
    try {
      await axios.get(baseURL+"/api/MetodoPagos", config)
      .then(function (response) {
        console.log(response.data);
        setMedioPagos(response.data)
                  
      })
    } catch (error) {
      console.log(error)

    }
  }

  const Carusel = (image) => {
    console.log(image.image)
    return (
    <Carousel variant="dark" className='mb-1'>
      <Carousel.Item>
        <img 
          className="avatar border-gray"
          src={image.image} />
      </Carousel.Item>
    </Carousel>
    )
  }


  useEffect(() => {
    dataVehiculo();
    dataMedioPago();
    dataCiudad();
  }, [])

  useEffect(() => {
    dataVehiculobyId(vehiculo);
  }, [vehiculo])

  const crearTransaccion = async () => {
    if (!Nombre) {
      alertaCampos("Nombre");
      return;
    }

    if (!Apellido) {
      alertaCampos("Apellido");
      return;
    }

    if (!Email) {
      alertaCampos("Email");
      return;
    }

    if (!Telefono) {
      alertaCampos("Telefono");
      return;
    }

    if (!Direccion) {
      alertaCampos("Direccion");
      return;
    }

    if (!ciudad) {
      alertaCampos("ciudad");
      return;
    }

    if (vehiculo.length === 0) {
      alertaCampos("vehiculo");
      return;
    }

    if (MedioPago.length === 0) {
      alertaCampos("MedioPago");
      return;
    }

    {
      console.log(Nombre, "Nombre");
    }
    {
      console.log(Apellido, "Apellido");
    }
    {
      console.log(Email, "Email");
    }
    {
      console.log(Telefono, "Telefono");
    }
    {
      console.log(Direccion, "Direccion");
    }
    {
      console.log(ciudad, "ciudad");
    }
    {
      console.log(vehiculo, "vehiculo");
    }
    {
      console.log(MedioPago, "MedioPago");
    }
    {
      console.log(MedioPago, "MedioPago");
    }

    try {
      console.log(baseURL);

      await axios
        .post(baseURL+"/api/Transacciones",
          {
            numTransaccion: null,
            estado: null,
            valor: vehiculoElegido.precio,
            metodoPagoId: parseInt(MedioPago),
            usuarioId: 2,
            vehiculoId: parseInt(vehiculo),
            Nombres: Nombre,
            Apellidos: Apellido,
            Email: Email,
            Telefono: Telefono,
            Direccion: Direccion,
            CiudadId: parseInt(ciudad),
          },
          config
        )
        .then(function (response) {
          // console.log(parseInt(response.data[0].id),"EL IIIIIDDDD")
          console.log(response);
          window.location.href = "/Inicio";
        });
    } catch (e) {
      console.log(e);
      // productoCreadoAlertError()
    }
  }


  return (
    <>
    <Container fluid>
      <Row>
        <Col md="8">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Generar Factura</Card.Title>
            </Card.Header>
            <Card.Body>
            <ToastContainer/>
              <Form  >
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Nombre* </label>
                      <Form.Control
                        onChange={ e => setNombre(e.target.value)}              
                        placeholder="Nombre"
                        type="text"
                        required
                      ></Form.Control>
                    </Form.Group>
                    
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label htmlFor="">
                      Apellido
                      </label>
                      <Form.Control
                        placeholder="Apellido"
                        onChange={ e => setApellido(e.target.value)}         
                        type="text"
                        required
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Email</label>
                      <Form.Control
                        onChange={ e => setEmail(e.target.value)}         
                        placeholder="email"
                        type="text"
                        required
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Telefono</label>
                      <Form.Control
                        onChange={ e => setTelefono(e.target.value)} 
                        placeholder="telefono"
                        type="text"
                        step="any"
                        required
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="" md="10">
                      <Form.Group>
                        <label>Dirección</label>
                        <Form.Control
                        onChange={ e => setDireccion(e.target.value)} 
                          placeholder="Direccion"
                          type="text"
                          min="10"
                          required
                        ></Form.Control>
                      </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Ciudad</label>
                      <Form.Select required onChange={ e => setciudad(e.target.value)} >
                        <option value="">Selecciona</option>
                        {Ciudades.map((cat, index) =>                      
                        <option key={index} value={cat.ciudadId}>{cat.nombre}</option>        
                        )} 
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md="6">
                    <Form.Group>
                      <label>Vehiculo</label>
                      <Form.Select required onChange={ e => setVehiculo(e.target.value)} >
                        <option value="">Selecciona</option>
                        {Vehiculos.map((cat, index) =>                      
                        <option key={index} value={cat.vehiculoId}>{cat.modelo.nombre}</option>        
                        )} 
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row> 
                <Row>
                  <Col md="6">
                    <Form.Group>
                      <label>Medio Pago</label>
                      <Form.Select required onChange={ e => setMedioPago(e.target.value)} >
                        <option value="">Selecciona</option>
                        {MedioPagos.map((cat, index) =>                      
                        <option key={index} value={cat.metodoPagoId}>{cat.nombre}</option>        
                        )} 
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <div className='m-3'>
                </div>

              </Form>
              <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="primary"
                  onClick={crearTransaccion}
                >
                  Crear Producto
                </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="4">
          <Card style={{ maxWidth: '25rem', textAlign: "center" }}>
            <Card.Body>
              <div className={!vehiculoElegido.imagenUrl ? 'fichaEmpty' : 'card-image' }>
                <Carusel image={vehiculoElegido.imagenUrl}/>
              </div> 
                        
            </Card.Body>
            <hr></hr>
           
          </Card>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default CracionTransaccion