import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Menu from './Menu'

const Layout = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/inicio" component={Home}/>
        <Route exact path="/contacto" component={Contact}/>
        <Redirect from="/" to="/inicio"/>
      </Switch>
    </div>
  )
}

export default Layout
