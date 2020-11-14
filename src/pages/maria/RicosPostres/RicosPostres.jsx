import React from 'react'
import { NavLink } from 'react-router-dom'
import Img1 from './images/1.jpg'
import './styles/estilos.scss'

const RicosPostres = () => {
  return (
    <div className="ricos-postres">
      <h1 className="titulo">RICOS POSTRES</h1>
      <header className="azul fila">
        {/* <!--header, define una cabecera para el contenido del documento,
                generalmente encontramos logos, formularios de acceso,
                navegaciones,encabezados, etc.-->   */}
        POSTRES ITALIANOS
      </header>
      <nav className="azul fila">
        {/* <!--Define un menu de navegacion en el documento...--> */}
        Dulce tentacion  
      </nav>
      <section id="contenedor" className="fila">
          <section id="principal" className="azul">
            {/* <!--Section, define un area o zona de contenido especifico
                    en el documento, por ejemplo en una publicacion la zona de 
                    comentarios es un section.--> */}
            Los 7 mejores postres de chocolate
            <article>
              {/* <!--article, se define como un contenido independiente,por ejemplo
                      en la zona de comentarios de una publicacion, cada comentario
                      es un article--> */}
              TOP #1 TIRAMISU
              <br />
              <img  style={{ width: "150px", height: "150px" }} src={Img1} alt="Imagen"/>
            </article>
            <br />
            <article>
              {/* <!--article, se define como un contenido independiente,por ejemplo
                      en la zona de comentarios de una publicacion, cada comentario
                      es un article--> */}
              TOP #2 PASTEL DE FRUTAS
              <br />
              <img  style={{ width: "150px", height: "150px" }} src={Img1} alt="Imagen" />
            </article>
          </section>
          
          <aside className="azul">
            {/* <!--aside, define contenido secundario y/o sin relevancia
                    que puede o no acompañar a un contenido principal, por ejemplo,
                    la publucidad, la barra lateral de un blog, etc.--> */}
            Postres de galletas
            {/* |<a href="carrusel.html">Ver catalogo de postres</a> */}
            |<NavLink to={"/ricos-postres/carrusel"}>Ver catalogo de postres</NavLink>
          </aside>
      </section>
      <footer className="azul fila">
          {/* <!--footer, define un pie de pagina para el contenido del documento,
              generalmente encontramos informacion del autor,legales,navegaciones,
              etc.--> */}
          <p><mark>Diseñado por: María Piñerúa <br /> C.I. 28.320.983| Noviembre 2020</mark></p><br />
      </footer>
    </div>
  )
}

export default RicosPostres
