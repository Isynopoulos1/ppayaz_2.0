import React from "react"

// IMPORT DATA
import { projects } from "../../assets/data"

// IMPORT COMPONENT
import Description from "../common/Description"

const CasesDetailPage = ({ match }) => {
  //MAIN RENDER
  return (
    <main>
      <Description
        title={projects[match.params.name]?.title || "Error 404"}
        description={projects[match.params.name]?.description || "please redirect to home"}
      />
    </main>
  )
}

export default CasesDetailPage
