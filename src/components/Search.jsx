import React from "react";

export default ({ submitSearch, search, setSearch }) => (
  <form className="search_form">
    <input
      value={search}
      className="search_bar"
      placeholder="Serch for some yummy"
      onChange={e => setSearch(e.target.value)}
    />
    <button className="search_button" onClick={submitSearch}>
      Search
    </button>
  </form>
);
