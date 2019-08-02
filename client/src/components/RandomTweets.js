import React, { Component } from "react";
// import axios from "axios";
// import Tweets from "./Tweets";
import "./RandomTweets.css";

class RandomTweets extends Component {
  state = {
    searchText: "",
    tweets: []
  };

  render() {
    return (
      <div className="container white-background">
      <p>Select one of my favorite Twitter users, listed here, to display a random tweet from their account.</p>
        
      </div>
    );
  }
}

export default RandomTweets;
