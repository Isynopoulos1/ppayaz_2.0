import React from "react"

// IMPORT STYLING
import "../../styles/components/description.css"

const Carousel = ({ content, name }) => {
  return (
    <section className="container carousel">
      {content.map((c, i) => (
        <div key={i} className="carousel-item">
          {c.type === "video" ? (
            <video src={c.url} autoPlay muted loop>
              Tu navegador no admite el elemento <code>video</code>.
            </video>
          ) : (
            <img src={c.url} alt={`project ${i + 1} of ${name.split("-").join(" ")}`} />
          )}
        </div>
      ))}
    </section>
  )
}

export default Carousel
