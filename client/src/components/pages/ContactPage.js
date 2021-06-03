import React from "react"

// IMPORT STYLE
import "../../styles/components/contacto.css"
import "../../styles/components/testimonials.css"

// IMPORT DATA
import { testimonials } from "../../assets/data"
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

  const renderTestimonials = () => {
    return (
      <section className="testimonials">
        <div className="container">
          <ul className="testimonials-list">
            {testimonials.map((testimonial, i) => (
              <li key={i} className="testimonials-item">
                <p>{testimonial.quote}</p>
                <p>{testimonial.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  //MAIN RENDER
  return (
    <main>
      {renderIcons()}
      {renderTestimonials()}
    </main>
  )
}

export default ContactPage
