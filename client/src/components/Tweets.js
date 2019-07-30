import React, { Component } from "react";
import "./Tweets.css";

class Tweets extends Component {


  render() {
    return (
      <div className="tweet-list">
        <h1>Tweets</h1>
        {/* <ul>
          {this.state.tweets.map(tweet => (
            <li className="tweet" key={tweet.id}>
              {tweet.tweet}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Tweets;
