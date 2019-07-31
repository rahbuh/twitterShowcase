import React, { Component } from "react";
import axios from "axios";
import Tweets from "./Tweets";
import "./SearchTweets.css";

class SearchTweets extends Component {
  state = {
    searchText: "",
    tweets: []
  };

  onChange = e => this.setState({ searchText: e.target.value });

  onClickTopic = e => {
    e.preventDefault();
    this.search(this.state.searchText);
    this.setState({ searchText: "" });
  };

  onClickUser = e => {
    e.preventDefault();
    // this.search(this.state.searchText);
    // this.setState({ searchText: "" });
  };

  search = text => {
    const url = "/api/search/" + text;
    axios
      .get(url)
      .then(response => {
        this.setState({ tweets: response.data.data });
      })
      .catch(error => {
        console.log("error " + error);
      });
  };

  render() {
    return (
      <div className="search white-background">
        <form className="form">
          <input
            type="text"
            name="searchText"
            placeholder="Search Twitter..."
            value={this.state.searchText}
            onChange={this.onChange}
          />
          <input
            onClick={this.onClickTopic}
            type="submit"
            value="Search by Topic"
            className="btn btn-left"
          />
          <input
            onClick={this.onClickUser}
            type="submit"
            value="Search by User Handle"
            className="btn btn-right"
          />
        </form>
        <div className="tweet-list">
          <ul>
            {this.state.tweets.map(tweet => (
              <Tweets key={tweet.id} tweet={tweet} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchTweets;
