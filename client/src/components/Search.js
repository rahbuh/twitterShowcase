import React, {Component} from "react";
import Tweets from "./Tweets"
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="search white-background">
        <form className="form">
          <input type="text" name="text" placeholder="Search Twitter" />
          <input type="submit" value="Search" className="btn" />
        </form>
        <Tweets />
      </div>
    );
  }
}

export default Search;
