import React from "react"

// IMPORT STYLING
import "../../styles/components/video.css"

// IMPORT COMPONENT
import Head from "../common/Head"
import Testimonials from "../common/Testimonials"
import Description from "../common/Description"
import List from "../common/List"

// IMPORT DATA
import { home } from "../../assets/data"

const HomePage = () => {
  return (
    //VIDEO SECTION
    <>
      <Head title="Fresh People | Ppayaz" description="i have to create a description" index />
      <main>
        <section className="video">
          <video id="video" src="https://ik.imagekit.io/ppayaz/ppayaz-website/secuencia_1_2SQM0fP8D1B.mp4" autoPlay muted loop>
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </section>
        <Description title={home.title} description={home.description} />
        <List list={home.cases} />
        <Testimonials />
      </main>
    </>
  )
}

export default HomePage
