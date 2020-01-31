import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchContainer from "./pages/SearchContainer";

class App extends Component {
  render() {
    return (
      
      <div className="container-fluid">
          <Nav />
          <Jumbotron />
          <SearchContainer />
      </div>
  
    );
  }
}

export default App;
