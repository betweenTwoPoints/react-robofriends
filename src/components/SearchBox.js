import React from "react";

function SearchBox({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
