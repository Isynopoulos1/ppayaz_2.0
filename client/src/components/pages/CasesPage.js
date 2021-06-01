import React from "react"
import { Link } from "react-router-dom"

// IMPORT STYLING
import "../../styles/components/casos_list.css"

// IMPORT DATA
import { cases } from "../../assets/data"

const CasesPage = () => {
  // RENDER FUNCTIONS
  const renderCovers = () => {
    return (
      <ul>
        {cases.map((cover, i) => (
          <li key={i}>
            <Link to={`/casos/${cover.href}`}>{cover.alt}</Link>
          </li>
        ))}
      </ul>
    )
  }

  //MAIN RENDER
  return (
    <main>
      <section className="casos">
        <div className="container">
          <div className="cases-content">{renderCovers()}</div>
        </div>
      </section>
    </main>
  )
}

export default CasesPage
