import React from "react";
import SearchField from "../SearchField";
import "./header.css";
const Header = ({ handleSearchArticle, setQuery, keyUp, query }) => {
  return (
    <div className="header_container">
      <SearchField
        handleSearchArticle={handleSearchArticle}
        setQuery={setQuery}
        keyUp={keyUp}
        query={query}
      />
    </div>
  );
};

export default Header;
