import React from "react"

// IMPORT COMPONENT
import Head from "../common/Head"

// IMPORT STYLING
import "../../styles/components/servicios.css"

// IMPORT DATA
import { services } from "../../assets/data"

const ServicesPage = () => {
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
    <>
      <Head title="Servicios digitales | Ppayaz" description="i have to create a description" index />
      <main>
        <section className="servicios">
          <div className="container">
            <h2>¿Qué hacemos?</h2>
            <div className="servicios-content">{renderServices()}</div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ServicesPage
