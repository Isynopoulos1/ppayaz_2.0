import React from "react"
import { Helmet } from "react-helmet-async"

const Head = ({ title, description, index }) => {
  return (
    <Helmet defer={false}>
      <html lang="es" dir="ltr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={index ? "index" : "noindex"} />
    </Helmet>
  )
}

export default Head
