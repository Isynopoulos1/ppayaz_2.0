import React from "react"
import { Link } from "react-router-dom"

// IMPORT STYLING
import "../../styles/components/casos_list.css"

const List = ({ list }) => {
  return (
    <ul className="casos-list">
      {list.map((cover, i) => (
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

export default List
