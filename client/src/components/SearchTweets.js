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

  onSubmit = e => {
    e.preventDefault();
    this.search(this.state.searchText);
    this.setState({ searchText: "" });
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
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="searchText"
            placeholder="Search Twitter..."
            value={this.state.searchText}
            onChange={this.onChange}
          />
          <input type="submit" value="Search by Topic" className="btn" />
        </form>
        <Tweets />
      </div>
    );
  }
}

export default SearchTweets;
