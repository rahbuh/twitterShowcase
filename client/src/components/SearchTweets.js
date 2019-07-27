import React, { Component } from "react";
import Search from "./Search";
import Tweets from "./Tweets";
import "./SearchTweets.css";

class SearchTweets extends Component {
  render() {
    return (
      <div className="search white-background">
        <Search />
        <Tweets />
      </div>
    );
  }
}

export default SearchTweets;
