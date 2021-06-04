import React from "react"

// IMPORT STYLING
import "../../styles/components/description.css"

const Description = ({ title, description }) => {
  return (
    <section className="description">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Description
