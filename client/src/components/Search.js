import React, { Component, Fragment } from "react";
const axios = require("axios");

class Search extends Component {
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

    async function testAPI() {
      let res = await axios.get(url)
       
      let data = res.data;
      console.log('Response: ' + data);
      this.setState({ tweets: data });
    }

    testAPI();
    console.log(this.state.tweets)
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="searchText"
            placeholder="Search Twitter..."
            value={this.state.searchText}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="btn" />
        </form>
      </Fragment>
    );
  }
}

export default Search;
