import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/content/Home";
// import Search from "./components/content/Search";
import "./App.css";

class App extends Component {
  state = {
    tweets: []
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <div className="container">
            <Home />
            {/* <Search /> */}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
