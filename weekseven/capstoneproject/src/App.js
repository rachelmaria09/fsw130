import React from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Contactus from "./components/Contactus"
import Facilities from "./components/Facilities"
import Services from "./components/Services"
import Home from "./components/Home"

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          path="/home"
          render={() => <Home />}
        />
        <Route
          path="/contactus"
          render={() => <Contactus />}
        />
        <Route
          path="/facilities"
          render={() => <Facilities />}
        />
        <Route
          path="/services"
          render={() => <Services />}
        />
      </Switch>
    </div>
  );
}

export default App;
