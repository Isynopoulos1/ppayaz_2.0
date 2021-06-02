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
      <ul className="casos-list">
        {cases.map((cover, i) => (
          <li className="casos-item" key={i}>
            <Link to={`/casos/${cover.href}`}>
              <img src={cover.src} alt={cover.alt} />
              <button>Ver mas</button>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  //MAIN RENDER
  return <main>{renderCovers()}</main>
}

export default CasesPage
