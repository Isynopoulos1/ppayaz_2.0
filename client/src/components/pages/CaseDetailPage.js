import React from "react"

// IMPORT DATA
import { projects } from "../../assets/data"

// IMPORT COMPONENT
import Description from "../common/Description"
import Carousel from "../common/Carousel"

// IMPORT STYLING
import "../../styles/components/casos_item.css"

const CasesDetailPage = ({ match }) => {
  //MAIN RENDER
  return (
    <main>
      <Description
        title={projects[match.params.name]?.title || "Error 404"}
        description={projects[match.params.name]?.description || "please redirect to home"}
      />
      <Carousel content={projects[match.params.name]?.carousel} name={match.params.name} />
    </main>
  )
}

export default CasesDetailPage
