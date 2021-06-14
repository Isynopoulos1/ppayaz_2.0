import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

// IMPORT COMPONENTS
import App from "./components/App"

ReactDOM.render(
  <HelmetProvider>
    <Router>
      <App />
    </Router>
  </HelmetProvider>,
  document.getElementById("root")
)
