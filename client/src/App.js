import React, { Component } from "react";
import "./App.css";
import Bookpage from "./pages/SearchContainer";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container-fluid">
          <Nav />
          <Jumbotron />
          <SearchBar />
          <Switch >
              <Route exact path="/" component={} />
              <List>
                  <ListItem />
                  <ListItem />
              </List>
          </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
