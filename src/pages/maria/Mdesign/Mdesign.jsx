import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Articulos from './Articulos'
import Contacto from './Contacto'
import Informacion from './Informacion'
import Inicio from './Inicio'
import './styles/estilos.scss'

const Mdesign = () => {
  return (
    <div className="mdesign">
      <Switch>
        <Route exact path="/mdesign" component={Inicio}/>
        <Route exact path="/mdesign/articulos" component={Articulos}/>
        <Route exact path="/mdesign/informacion" component={Informacion}/>
        <Route exact path="/mdesign/contacto" component={Contacto}/>
      </Switch>
    </div>
  )
}

export default Mdesign
