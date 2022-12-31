import React from "react";
import SearchIcon from "./../../icons/IconSearch";
import SearchLook from "./../../assets/search.svg";
import "./searchbar.css";
const SearchBar = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Find Me" />
      <img  className="icon" src={SearchLook} alt="Your SVG" />
    </div>
  );
};
export default SearchBar;
