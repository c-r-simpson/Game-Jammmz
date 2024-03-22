import React, { useState, useEffect } from "react";

function SearchBar() {
  return (
    <>
      <label for="searchBar" style={{ fontSize: "1.5rem" }}>
        Search Gamz:
      </label>
      <input
        style={{
          height: 50,
          width: "75%",
          marginBottom: "1rem",
          fontSize: "1.5rem",
        }}
        type="text"
        id="searchBar"
        name="searchBar"
        placeholder="What're'ya Buyin'?"
      />
    </>
  );
}

export default SearchBar;
