import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
  return (
    <header className="App-header App-background">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <FontAwesomeIcon icon={faUser} className="App-logo text-primary" style={{ width: "240px" }} />
      <p>
        Página realizada por <span style={{ color: "#e83e8c" }}>MARÍA PIÑERUA</span>.
      </p>
      <a
        className="App-link"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", cursor: "default" }}
      >
        Contacto
      </a>
    </header>
  )
}

export default Contact
