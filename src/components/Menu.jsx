import React from 'react'
import {
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import ReactLogo from '../logo.svg';

const Menu = () => {
  return (
    <div className="bootstrap-template">
    <Navbar bg="dark" variant="dark" expand="md" fixed="top">
      <Navbar.Brand as={NavLink} to={"/inicio"}>
      <img
        src={ReactLogo}
        className="d-inline-block align-top React-logo"
        alt="logo"
        width="30"
        height="30"
      />{' '}
      Menú
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ejm1">
          <li>
            <Nav.Link as={NavLink} title="Inicio" to={"/inicio"}>Inicio</Nav.Link>
          </li>
          <li>
            <Nav.Link as={NavLink} title="Ricos Postres" to={"/ricos-postres"}>Ricos Postres</Nav.Link>
          </li>
          <li>
            <Nav.Link as={NavLink} title="Dulcemente" to={"/dulcemente"}>Dulcemente</Nav.Link>
          </li>
          <li>
            <Nav.Link as={NavLink} title="Mdesign" to={"/mdesign"}>Mdesign</Nav.Link>
          </li>
          <li>
            <Nav.Link as={NavLink} title="Contacto" to={"/contacto"}>Contacto</Nav.Link>
          </li>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item>Opción 1</NavDropdown.Item>
            <NavDropdown.Item>Opción 2</NavDropdown.Item>
            <NavDropdown.Item>Opción 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Opción 4</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default Menu
