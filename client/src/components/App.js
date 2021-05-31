import React from "react"
import { withRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"

// IMPORT PAGES
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Error404 from "./pages/Error404"
import Cases from "./pages/Cases"
import Services from "./pages/Services"

// IMPORT COMPONENTS
import Header from "./layout/Header"
import Footer from "./layout/Footer"

// IMPORT STYLE
import "../styles/layout/reset.css"
import "../styles/layout/main.css"

const App = ({ history }) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/casos" component={Cases} />
        <Route exact path="/servicios" component={Services} />
        <Route exact component={Error404} />
      </Switch>
      <Footer />
    </>
  )
}

export default withRouter(App)
