import React from 'react'
import logo from '../logo.svg'

const Home = () => {
  return (
    <header className="bootstrap-template App-header App-background">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Página realizada por <span style={{ color: "#e83e8c" }}>MARÍA PIÑERUA</span>.
      </p>
      <a
        className="App-link"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", cursor: "default" }}
      >
        Inicio
      </a>
    </header>
  )
}

export default Home
