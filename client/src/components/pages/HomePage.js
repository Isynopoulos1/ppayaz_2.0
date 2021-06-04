import React from "react"

// IMPORT STYLING
import "../../styles/components/video.css"

// IMPORT COMPONENT
import Testimonials from "../common/Testimonials"
import Description from "../common/Description"
import List from "../common/List"

// IMPORT DATA
import { home } from "../../assets/data"

const HomePage = () => {
  return (
    //VIDEO SECTION
    <main>
      <section className="video">
        <video id="video" src="https://ik.imagekit.io/ppayaz/ppayaz-website/PPAYAZ_HOME_2_Kq2H-AjI13O.mp4" autoPlay muted loop>
          Tu navegador no admite el elemento <code>video</code>.
        </video>
      </section>
      <Description title={home.title} description={home.description} />
      <List list={home.cases} />
      <Testimonials />
    </main>
  )
}

export default HomePage
