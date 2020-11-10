import React from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Contactus from "./components/Contactus"
import Facilities from "./components/Facilities"
import Gallery from "./components/Gallery"
import Home from "./components/Home"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          exact path="/"
          render={() => <Home />}
        />
        <Route
          exact path="/contactus"
          render={() => <Contactus />}
        />
        <Route
          exact path="/facilities"
          render={() => <Facilities />}
        />
        <Route
          exact path="/gallery"
          render={() => <Gallery />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
