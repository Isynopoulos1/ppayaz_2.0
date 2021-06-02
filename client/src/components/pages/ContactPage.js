import React from "react"

// IMPORT STYLE
import "../../styles/components/contacto.css"
import "../../styles/components/testimonials.css"

// IMPORT DATA
import { testimonials } from "../../assets/data"

const ContactPage = () => {
  return (
    <main>
      <section class="contacto">
        <div class="container">
          <h1>Contáctanos</h1>
          <h2>ppayaz.freshpeople@gmail.com</h2>
          <p>También puedes seguirnos en:</p>
          <div class="contacto-social">
            <a href="https://www.instagram.com/ppayaz_fresh" target="_blank" rel="noreferrer">
              <img src="../../assets/icons/instagram.svg" alt="instagram logo" />
            </a>
            <a href="https://www.behance.net/ppayazfreshp" target="_blank" rel="noreferrer">
              <img src="../../assets/icons/behance.svg" alt="behance logo" />
            </a>
            <a href="https://www.linkedin.com/in/ppayaz-fresh-people-5988371a5/" target="_blank" rel="noreferrer">
              <img src="../../assets/icons/linked_in.svg" alt="linkedin logo" />
            </a>
          </div>
        </div>
      </section>
      <section class="testimonials">
        <div class="container">
          <ul class="testimonials-list">
            {testimonials.map(testimonial => (
              <li class="testimonials-item">
                <p>{testimonial.quote}</p>
                <p>{testimonial.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
