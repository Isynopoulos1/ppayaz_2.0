import React from "react"

// IMPORT COMPONENT
import Head from "../common/Head"
import List from "../common/List"

// IMPORT DATA
import { cases } from "../../assets/data"

const CasesPage = () => {
  //MAIN RENDER
  return (
    <>
      <Head title="Casos de diseño digital | Ppayaz" description="i have to create a description" index />
      <main>
        <List list={cases} />
      </main>
    </>
  )
}

export default CasesPage
