import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Dulcemente from '../pages/maria/Dulcemente/Dulcemente'
import Mdesign from '../pages/maria/Mdesign/Mdesign'
import Carrusel from '../pages/maria/RicosPostres/Carrusel'
import RicosPostres from '../pages/maria/RicosPostres/RicosPostres'
import Menu from './Menu'

const Layout = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/inicio" component={Home}/>
        <Route exact path="/ricos-postres" component={RicosPostres}/>
        <Route exact path="/ricos-postres/carrusel" component={Carrusel}/>
        <Route exact path="/dulcemente" component={Dulcemente}/>
        <Route path="/mdesign" component={Mdesign}/>
        <Route exact path="/contacto" component={Contact}/>
        <Redirect exact from="/" to="/inicio"/>
      </Switch>
    </div>
  )
}

export default Layout
