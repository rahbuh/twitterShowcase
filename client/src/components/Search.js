import React, { Component, Fragment } from "react";

class Search extends Component {
  state = {
    searchText: ""
  };

  onChange = e => this.setState({ searchText: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.searchText);
    this.setState({ searchText: '' });
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
