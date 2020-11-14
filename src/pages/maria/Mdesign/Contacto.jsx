import React from 'react'
import { NavLink } from 'react-router-dom'

const Contacto = () => {
  return (
    <div className="contacto">
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
      <h2>Contactanos a traves de nuestros asesores!!</h2>
      <table border="7" align="center">
        <caption><h2 style={{ textAlign: "center" }}><u>Recibe asesoria con:</u></h2></caption>
        <tr>
          <th>Asesor 1</th>
          <td>Maria</td>
          <td>Tlf:7474575858578</td>
        </tr>
        <tr>
          <th>Asesor 2</th>
          <td>Mariana</td>
          <td>Tlf:7474575858578</td>
        </tr>
        <tr>
          <th>Asesor 3</th>
          <td>Mariangel</td>
          <td>Tlf:7474575858578</td>
        </tr>
        <tr>
          <th>Asesor 4</th>
          <td>Sofia</td>
          <td>Tlf:7474575858578</td>
        </tr>
        <tr>
          <th>Asesor 5</th>
          <td>Mateo</td>
          <td>Tlf:7474575858578</td>
        </tr>
        <tr>
          <th>Asesor 6</th>
          <td>Marcos</td>
          <td>Tlf:7474575858578</td>
        </tr>
        <tr>
          <th>Asesor 7</th>
          <td>Marcelo</td>
          <td>Tlf:7474575858578</td>
        
        </tr>
      </table>

      <h3>Gracias por preferirnos!!!</h3>

    </div>
  )
}

export default Contacto
