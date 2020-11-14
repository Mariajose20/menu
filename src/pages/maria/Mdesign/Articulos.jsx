import React from 'react'
import { NavLink } from 'react-router-dom'

const Articulos = () => {
  return (
    <div className="articulos">
      <header>
        <div className="barra">
          <div className="container">
            <h1 className="logo">Mdesign.</h1>
            <nav>
              <ul>
                <li><NavLink to="/mdesign">Inicio</NavLink></li>
                <li><NavLink to="/mdesign/articulos">Articulos</NavLink></li>
                <li><NavLink to="/mdesign/informacion">Informacion</NavLink></li>
                <li><NavLink to="/mdesign/contacto">Contacto</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>

      </header>
      <br/>
      <h2>Articulos Disponibles</h2>
      
      <h1>Lo Mejor de Marketing Digital</h1>
      <table width="80%" border="1" cellspacing="0" cellpadding="5">
        <tr>
            <th>Servicios</th>
            <td>Administracion de redes sociales</td>
            <td rowSpan="2">Diseno de Interiores</td>
            <td rowSpan="3">Posters</td>
            <td rowSpan="4">Flyers</td>
        </tr>
        <tr>
            <th>Informacion</th>
            <td rowSpan="2">Las mejores tendecias para el 2021</td>
        </tr>
        <tr>
          <th>Desing</th>
          <td rowSpan="2">Desarrollo web</td>
        </tr>
        <tr>
            <th>Publicidad</th>
            <td> Community Manager</td>
            <td>Vector Tracing</td>
        </tr>
      </table>
    </div>
  )
}

export default Articulos
