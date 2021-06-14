import React from "react"

// IMPORT COMPONENT
import Head from "../common/Head"

// IMPORT STYLE
import "../../styles/components/not-found.css"

const Error404Page = () => {
  return (
    <>
      <Head title="Error | Ppayaz" index={false} />
      <main className="not-found">
        <img src="https://ik.imagekit.io/ppayaz/ppayaz-website/404_error_W7X3lu08c.png" alt="not found design" />
      </main>
    </>
  )
}

export default Error404Page
