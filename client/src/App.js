import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchTweets from "./components/SearchTweets";
import RandomTweets from "./components/RandomTweets";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchTweets} />
          <Route path="/random" component={RandomTweets} />
        </main>
      </div>
    </Router>
  );
};

export default App;
