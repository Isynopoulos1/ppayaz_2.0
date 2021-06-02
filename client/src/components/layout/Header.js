import React from "react"
import { Link } from "react-router-dom"

// IMPORT STYLE
import "../../styles/layout/header.css"

const Header = () => {
  const links = ["servicios", "casos", "contacto"]

  // MAIN RENDER
  return (
    <header>
      <div className="container header-wrapper">
        <Link to="/">
          <img src="https://ik.imagekit.io/ppayaz/ppayaz-website/LOGO_azul_efUyKHTR7w8.png" alt="ppayaz logo" />
        </Link>
        <nav className="nav-main" id="nav-main">
          {links.map(link => (
            <Link to={`/${link}`}>{link}</Link>
          ))}
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
