import React from "react";
import "./SearchResult.css";

const SearchResult = props => {
  const displayResult = props.result.map((item, i) => (
    <li className="search__row" key={i}>{item.name}</li>
  ));

  return (
    <div>
      {
        props.result.length > 0 &&
          <h1>The following are the possible beer types:</h1>
      }
      {
        props.result.length > 0 &&
          <ul className="search__container">{displayResult}</ul>
      }
      {
        props.result.length === 0 &&
          <h1 style={props.style}>No result</h1>
      }
    </div>
  );
};
  

export default SearchResult;
