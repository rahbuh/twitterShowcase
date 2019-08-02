import React, { Component } from "react";
// import axios from "axios";
// import Tweets from "./Tweets";
import RandomUsers from "./RandomUsers";
import favorites from "../randomUsersData";
import "./RandomTweets.css";

class RandomTweets extends Component {
  state = {
    searchText: "",
    users: favorites
  };

  render() {
    return (
      <div className="container white-background">
        <p>
          Select one of my favorite Twitter users, listed here, to display a
          random tweet from their account.
        </p>
        <div className="favorite-list">
          {this.state.users.map(user => (
            <RandomUsers key={user.id} favorite={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomTweets;
