import React from "react";

const Search = () => {
  return (
    <div className="container">
      <form className="form">
        <input type="text" name="text" placeholder="Search Twitter..." />
        <input type="submit" value="Search" className="btn" />
      </form>
    </div>
  );
};

export default Search;
