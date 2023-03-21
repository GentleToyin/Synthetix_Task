import React from "react";
import SearchField from "../SearchField";
import "./header.css";
const Header = ({ handleSearchArticle, setQuery, keyUp }) => {
  return (
    <div className="header_container">
      <SearchField
        handleSearchArticle={handleSearchArticle}
        setQuery={setQuery}
        keyUp={keyUp}
      />
    </div>
  );
};

export default Header;
