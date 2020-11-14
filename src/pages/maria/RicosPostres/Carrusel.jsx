import React, { useEffect } from 'react'
import './styles/estilos1.scss'
import ImgUno from './images/1.jpg'
import ImgDos from './images/2.jpg'
import ImgTres from './images/3.jpg'
import ImgCuatro from './images/4.jpg'
import ImgCinco from './images/5.jpg'
import ImgSeis from './images/6.jpg'
import ImgSiete from './images/7.jpg'
import { NavLink } from 'react-router-dom'

const Carrusel = () => {
  
    // Variables
    const IMAGENES = [
        ImgDos,
        ImgTres,
        ImgCuatro,
        ImgCinco,
        ImgSeis,
        ImgSiete,
        ImgUno,

    ];
    useEffect(() => {
        const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
        let posicionActual = 0;
        let $botonRetroceder = document.querySelector('#retroceder');
        let $botonAvanzar = document.querySelector('#avanzar');
        let $imagen = document.querySelector('#imagen');
        let $botonPlay = document.querySelector('#play');
        let $botonStop = document.querySelector('#stop');
        let intervalo;
    
        // Funciones
    
        /**
         * Funcion que cambia la foto en la siguiente posicion
         */
        function pasarFoto() {
            if(posicionActual >= IMAGENES.length - 1) {
                posicionActual = 0;
            } else {
                posicionActual++;
            }
            renderizarImagen();
        }
    
        /**
         * Funcion que cambia la foto en la anterior posicion
         */
        function retrocederFoto() {
            if(posicionActual <= 0) {
                posicionActual = IMAGENES.length - 1;
            } else {
                posicionActual--;
            }
            renderizarImagen();
        }
    
        /**
         * Funcion que actualiza la imagen de imagen dependiendo de posicion Actual
         */
        function renderizarImagen () {
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }
    
        /**
         * Activa el autoplay de la imagen
         */
        function playIntervalo() {
            intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
            // Desactivamos los botones de control
            $botonAvanzar.setAttribute('disabled', true);
            $botonRetroceder.setAttribute('disabled', true);
            $botonPlay.setAttribute('disabled', true);
            $botonStop.removeAttribute('disabled');
    
        }
    
        /**
         * Para el autoplay de la imagen
         */
        function stopIntervalo() {
            clearInterval(intervalo);
            // Activamos los botones de control
            $botonAvanzar.removeAttribute('disabled');
            $botonRetroceder.removeAttribute('disabled');
            $botonPlay.removeAttribute('disabled');
            $botonStop.setAttribute('disabled', true);
        }
    
        // Eventos
        $botonAvanzar.addEventListener('click', pasarFoto);
        $botonRetroceder.addEventListener('click', retrocederFoto);
        $botonPlay.addEventListener('click', playIntervalo);
        $botonStop.addEventListener('click', stopIntervalo);
        // Iniciar
        renderizarImagen();
      
    }, [])
  return (
    <div className="carousel-page">
      <h1>POSTRES DELICIOSOS</h1>
    <div className="carousel">
        <button id="retroceder">Retroceder</button>
        <div id="imagen"></div>
        <button id="avanzar">Avanzar</button>
    </div>
    <div className="controles">
        <button id="play">Play</button>
        <button id="stop" disabled>Stop</button>
    </div>
    <div className= "inicio">
            <button id="regresar"><NavLink to={"/ricos-postres"}>Inicio</NavLink></button>
        </div>
    </div>
  )
}

export default Carrusel
