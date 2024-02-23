import React from 'react'
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import '../../assets/css/navbar.css'

const NavbarHeader = () => {
    
        const mobileSidebarToggle = (e) => {
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        var node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function () {
          this.parentElement.removeChild(this);
          document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
      };
      
  return (
    <>
    <div>
          <Navbar bg="light" expand="lg">
      <Container fluid>
      <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          {/* <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button> */}
          <Navbar.Brand
            href=""
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2 navbar.togle" onClick={mobileSidebarToggle} id="">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        
         
          <Nav className="ml-auto nav-header" >
                   
            {/* <Nav.Item>
              <Nav.Link
                className="m-0"
                href=""
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon  ">
                  <button className='btn btn-danger'>Salir</button> 
                </span>
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    </>
  )
}

export default NavbarHeader