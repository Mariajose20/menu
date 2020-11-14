import React from 'react'
import { NavLink } from 'react-router-dom'

const Informacion = () => {
  return (
    <>
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

      <div className="main">
        <div className="contenedor-info">
          <div className="card" id="web">
            <div className="imagn">
            </div>
            <div className="texto">
              <h3>Community Manager.</h3><br/>
              <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. Ab inventore, fuga tenetur neque nobis veritatis deserunt, necessitatibus repellendus dolorum accusantium cumque voluptatibus temporibus odio laborum possimus, vitae quam voluptates. Aspernatur.</p>
            </div>
          </div>

          <div className="card" id="">
            
            <div className="texto">
              <h3>Vector Tracing.</h3><br/>
              <p>Lorem ipsum dolor sit amet, consectetur 
                        adipisicing elit. Ab inventore, fuga tenetur neque nobis veritatis deserunt, necessitatibus repellendus dolorum accusantium cumque voluptatibus temporibus odio laborum possimus, vitae quam voluptates. Aspernatur.</p>
            </div>
            <div className="imagn">
            </div>
          </div>

          <div className="card" id="">
            <div className="imagn">
            </div>
            <div className="texto">
              <h3>Diseño de Logos.</h3><br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab inventore, fuga tenetur neque nobis veritatis deserunt, necessitatibus repellendus dolorum accusantium cumque voluptatibus temporibus odio laborum possimus, vitae quam voluptates. Aspernatur.</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>Diseñado por: María Piñerúa <br/> C.I 28.320.983| Octubre 2020</p><br/>
        <p>Derechos Reservados 2021.</p>
      </footer>
    </>
  )
}

export default Informacion
