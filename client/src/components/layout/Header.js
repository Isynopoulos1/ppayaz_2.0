import React from "react"
import { Link } from "react-router-dom"

// IMPORT STYLE
import "../../styles/layout/header.css"

const Header = () => {
  return (
    <header>
      <div className="container header-wrapper">
        <Link to="/">LOGO</Link>
        <nav className="nav-main" id="nav-main">
          <Link to="/servicios">servicios</Link>
          <Link to="/casos">casos</Link>
          <Link to="/contact">contacto</Link>
        </nav>
        <svg className="nav-mobile" id="nav-mobile" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
    </header>
  )
}

export default Header
