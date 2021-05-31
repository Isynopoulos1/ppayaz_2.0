import React from "react"

// IMPORT STYLING
import "../../styles/components/servicios.css"

// IMPORT DATA
import { services } from "../../assets/data"

const Services = () => {
  // RENDER FUNCTIONS
  const renderServices = () => {
    return services.map((service, i) => (
      <article key={i}>
        <i>{service.icon}</i>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </article>
    ))
  }

  // MAIN RENDER
  return (
    <main>
      <section className="servicios">
        <div className="container">
          <h2>¿Qué hacemos?</h2>
          <div className="servicios-content">{renderServices()}</div>
        </div>
      </section>
    </main>
  )
}

export default Services
