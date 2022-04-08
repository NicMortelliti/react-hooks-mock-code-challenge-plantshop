import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  function updateSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={e => updateSearchTerm(e)}
      />
    </div>
  );
}

export default Search;
