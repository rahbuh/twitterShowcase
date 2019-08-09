import React, { Component } from "react";
import axios from "axios";
import Tweets from "./Tweets";
import "./css/SearchTweets.css";

class SearchTweets extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      tweets: []
    };
  }

  onChange = e => this.setState({ searchText: e.target.value });

  onClickTopic = e => {
    e.preventDefault();
    if (this.state.searchText) {
      this.topicSearch(this.state.searchText);
      this.setState({ searchText: "" });
    }
  };

  onClickHandle = e => {
    e.preventDefault();
    if (this.state.searchText) {
      this.handleSearch(this.state.searchText);
      this.setState({ searchText: "" });
    }
  };

  topicSearch = text => {
    const url = "/api/topic/" + text;
    this.getTweets(url);
  };

  handleSearch = text => {
    const url = "/api/handle/" + text;
    this.getTweets(url);
  };

  getTweets = url => {
    axios
      .get(url)
      .then(response => {
        this.setState({ tweets: response.data.data });
      })
      .catch(error => {
        console.log("Returned Error: " + error);
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
            onClick={this.onClickHandle}
            type="submit"
            value="Search by User Handle"
            className="btn btn-right"
          />
        </form>
        <div className="tweet-list">
          <ul>
            {(this.state.tweets && this.state.tweets !== null)
              ? this.state.tweets.map(tweet => (
                  <Tweets key={tweet.id} tweet={tweet} />
                ))
              : <li className="tweet">No tweets found</li>}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchTweets;
