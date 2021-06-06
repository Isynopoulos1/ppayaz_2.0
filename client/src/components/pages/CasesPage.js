import React from "react"
import { Link } from "react-router-dom"

// IMPORT STYLING
import "../../styles/components/casos_item.css"

// IMPORT COMPONENT
import List from "../common/List"

// IMPORT DATA
import { cases } from "../../assets/data"

const CasesPage = () => {
  //MAIN RENDER
  return (
    <main>
      <List list={cases} />
    </main>
  )
}

export default CasesPage
