import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./pages/SearchContainer";
import SavedContainer from "./pages/SavedContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
            <Nav />
            <Jumbotron />
            <Switch>
            <Route exact path="/save" component={SavedContainer} />
            <Route component={SearchContainer} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
