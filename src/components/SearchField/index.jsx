import React from "react";
import "./searchField.css";

const SearchField = ({ setQuery, handleSearchArticle, keyUp }) => {
  return (
    <div className="search_container">
      <input
        placeholder="What are you searching for?"
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="search_btn" onClick={handleSearchArticle}>
        Search
      </span>
    </div>
  );
};

export default SearchField;
