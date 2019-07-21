import React, { Component } from "react";
import TwitterLogo from "../assets/img/twitter-logo.jpg";

class MainContent extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="content left">
            <h1>Welcome to Twitter Showcase</h1>
            <p>Search for recents tweets by Twitter users or by topic.</p>
            <p> Or view the latest tweets from one of my favorite Twitter users.</p>
          </div>
          <div className="image right">
            <img src={TwitterLogo} alt="Twitter logo" className="logo round" />
          </div>
        </div>
      </main>
    );
  }
}

export default MainContent;
