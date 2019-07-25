import React, { Component } from "react";

class Tweets extends Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    fetch("/api/tweets")
      .then(res => res.json())
      .then(tweets => this.setState({ tweets }));
  }

  render() {
    return (
      <div>
        <h1>Tweets</h1>
        <ul>
          {this.state.tweets.map(tweet => 
            <li key={tweet.id}>{tweet.tweet}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Tweets;
