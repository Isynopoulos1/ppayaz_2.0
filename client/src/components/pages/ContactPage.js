import React from "react"

// IMPORT COMPONENT
import Testimonials from "../common/Testimonials"

// IMPORT STYLE
import "../../styles/components/contacto.css"

// IMPORT DATA
import { icons } from "../../assets/data"

const ContactPage = () => {
  // RENDER FUNCTIONS
  const renderIcons = () => {
    return (
      <section className="contacto">
        <div className="container">
          <h1>Contáctanos</h1>
          <h2>ppayaz.freshpeople@gmail.com</h2>
          <p>También puedes seguirnos en:</p>
          <div className="contacto-social">
            {icons.map((icon, i) => (
              <a key={i} href={icon.href} target="_blank" rel="noreferrer">
                <img src={icon.src} alt={icon.network} />
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }

  //MAIN RENDER
  return (
    <main>
      {renderIcons()}
      <Testimonials />
    </main>
  )
}

export default ContactPage
