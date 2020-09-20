import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";
// Pages
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import DaftarFilm from "./Pages/DaftarFilm";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <Home />
        </Route>
        <Router path="/daftarfilm">
          <DaftarFilm />
        </Router>
        <Route>
          <Login />
        </Route>
        <Route>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
