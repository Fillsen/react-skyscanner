// Sys
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Tickets from "./components/Tickets";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Tickets} />
      </Switch>
    </Router>
  )
}
