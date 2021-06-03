import React from "react"
import { withRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"

// IMPORT PAGES
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import Error404Page from "./pages/Error404Page"
import CasesPage from "./pages/CasesPage"
import ServicesPage from "./pages/ServicesPage"

// IMPORT COMPONENTS
import Header from "./layout/Header"
import Footer from "./layout/Footer"

// IMPORT STYLE
import "../styles/layout/reset.css"
import "../styles/layout/main.css"

const App = ({ history }) => {
  const routes = [
    { path: "/", component: HomePage },
    { path: "/contacto", component: ContactPage },
    { path: "/casos", component: CasesPage },
    { path: "/servicios", component: ServicesPage }
  ]

  return (
    <>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} exact path={route.path} component={route.component} />
        ))}
        <Route exact component={Error404Page} />
      </Switch>
      <Footer />
    </>
  )
}

export default withRouter(App)
