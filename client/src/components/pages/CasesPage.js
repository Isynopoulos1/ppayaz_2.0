import React from "react"

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
