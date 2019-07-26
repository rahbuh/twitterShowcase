import React, { Component } from "react";
import "./Tweets.css";

class Tweets extends Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    };
  }

  componentDidMount() {
    const USER_TOKEN =
      "AAAAAAAAAAAAAAAAAAAAAM5O%2FQAAAAAA4PUqURKvlaYZE123WLpGFsLFIuo%3D8Zee34fRfseVOhCH53BbhlcpPd4jzmXL9Xy34o2dBDngAfmkfu";
    const URL =
      "https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular&count=1";

    const AuthStr = "Bearer ".concat(USER_TOKEN);
    axios
      .get(URL, { headers: { Authorization: AuthStr } })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("error " + error);
      });
  }

  render() {
    return (
      <div className="tweet-list">
        <h1>Tweets</h1>
        <ul>
          {this.state.tweets.map(tweet => (
            <li className="tweet" key={tweet.id}>
              {tweet.tweet}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Tweets;
