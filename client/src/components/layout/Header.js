import React, { useState } from "react"
import { Link } from "react-router-dom"

// IMPORT STYLE
import "../../styles/layout/header.css"

const Header = () => {
  // HOOKS AND DATA
  const [toogle, setToogle] = useState(false)
  const links = ["servicios", "casos", "contacto"]

  // HANDLEFUNCTION
  const handleClick = () => setToogle(!toogle)
  const handleClose = () => setToogle(false)

  // MAIN RENDER
  return (
    <header>
      <div className="container header-wrapper">
        <Link to="/">
          <img src="https://ik.imagekit.io/ppayaz/ppayaz-website/LOGO_azul_efUyKHTR7w8.png" alt="ppayaz logo" />
        </Link>
        <nav className={`nav-main ${toogle ? "nav-mobile" : ""}`} id="nav-main">
          {toogle && (
            <div className="nav-close" onClick={handleClose}>
              <svg height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </div>
          )}
          {links.map((link, i) => (
            <Link key={i} to={`/${link}`} onClick={handleClose}>
              {link}
            </Link>
          ))}
        </nav>
        <svg className="nav-mobile" id="nav-mobile" height="24" viewBox="0 0 24 24" width="24" onClick={handleClick}>
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
    </header>
  )
}

export default Header
