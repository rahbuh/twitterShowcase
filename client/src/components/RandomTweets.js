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
    const favorites = this.state.users;

    return (
      <div className="container white-background">
        <p>
          Select one of my favorite Twitter users, listed here, to display a
          random tweet from their account.
        </p>
        <div className="favorite-list">
          {favorites.map(favorite => (
            <RandomUsers key={favorite.user.id} favorite={favorite} />
          ))}
        </div>
      </div>
    );
  }
}

export default RandomTweets;
