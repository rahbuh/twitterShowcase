import React, { Component } from "react";
import axios from "axios";
// import Tweets from "./Tweets";
import RandomUsers from "./RandomUsers";
import favorites from "../randomUsersData";
import "./RandomTweets.css";

class RandomTweets extends Component {
  state = {
    users: favorites,
    tweets: [],
    random: {}
  };

  getUserTweets = screenName => {
    const url = "/api/random/" + screenName;
    this.api(url);
  };

  api = url => {
    axios
      .get(url)
      .then(response => {
        this.setState({ tweets: response.data.data });
        this.selectTweet();
        this.setState({ tweets: [] });
      })
      .catch(error => {
        console.log("error " + error);
      });
  };

  selectTweet = () => {
    const randomIndex = Math.floor(Math.random() * 100);
    this.setState({ random: this.state.tweets[randomIndex] });
    console.log(this.state.random.user.name);
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
            <button
              key={favorite.user.id}
              className="random-user"
              onClick={() => this.getUserTweets(favorite.user.screen_name)}
            >
              <RandomUsers favorite={favorite} />
            </button>
          ))}
        </div>
        <div className="tweet-list">
          {/* <Tweets key={this.state.random.id} tweet={this.state.random} /> */}
        </div>
      </div>
    );
  }
}

export default RandomTweets;
