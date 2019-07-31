import React from "react";
import TwitterLogo from "../assets/img/twitter-logo.jpg";

const Home = () => {
  return (
    <div className="container white-background">
      <div className="content left">
        <h1>Welcome to Twitter Showcase</h1>
        <p><strong><em>Search</em></strong> for recent tweets by user's handle (@) or by a topic.</p>
        <p>Or view a <strong><em>Random</em></strong> tweet from one of my favorite Twitter users.</p>
      </div>
      <div className="image right">
        <img src={TwitterLogo} alt="Twitter logo" className="logo round" />
      </div>
    </div>
  );
};

export default Home;
