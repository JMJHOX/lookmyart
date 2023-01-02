import React from "react";

import SearchLook from "./../../../assets/search.svg";
import "./SearchBarComponent.css";
const SearchBarComponent = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Find Me" />
      <img className="icon" src={SearchLook} alt="Your SVG" />
    </div>
  );
};
export default SearchBarComponent;
