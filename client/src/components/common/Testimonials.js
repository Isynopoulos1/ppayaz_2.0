import React from "react"

// IMPORT DATA
import { testimonials } from "../../assets/data"

// IMPORT STYLING
import "../../styles/components/testimonials.css"

const Testimonials = () => {
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

export default Testimonials
