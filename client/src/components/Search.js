import React from "react";
import Tweets from "./Tweets"

const Search = () => {
  return (
    <div className="container">
      <form className="form">
        <input type="text" name="text" placeholder="Search Twitter..." />
        <input type="submit" value="Search" className="btn" />
      </form>
      <Tweets />
    </div>
  );
};

export default Search;
