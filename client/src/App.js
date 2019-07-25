import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  state = {
    tweets: []
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
