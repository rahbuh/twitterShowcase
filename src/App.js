import React, {Component} from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./App.css";

class App extends Component {
  state = {
    tweets: []
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainContent />
      </div>
    );
  }
}

export default App;
