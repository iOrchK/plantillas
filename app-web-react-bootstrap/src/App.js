import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import QuienSoy from "./pages/QuienSoy";
import Contacto from "./pages/Contacto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Bootstrap</h1>
      <Router>
        <div>
          <Link to="/">
            <Button>Inicio</Button>
          </Link>
          <Link to="/quien-soy">
            <Button>Quien Soy</Button>
          </Link>
          <Link to="/contacto">
            <Button>Contacto</Button>
          </Link>

          <Switch>
            <Route path="/quien-soy">
              <QuienSoy></QuienSoy>
            </Route>
            <Route path="/contacto">
              <Contacto></Contacto>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
