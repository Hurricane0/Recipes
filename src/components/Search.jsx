import React from "react";

export default ({ submitSearch, search, setSearch, mode }) => (
  <div className={`search_form`}>
    <form className="form">
      <input
        value={search}
        className={`search_bar ${
          mode ? "light_search_bar" : "dark_search_bar"
        }`}
        placeholder="Search for some yummy"
        onChange={e => setSearch(e.target.value)}
      />
      <button
        className={`search_button ${
          mode ? "light_search_button" : "dark_search_button"
        }`}
        onClick={submitSearch}
      >
        Search
      </button>
    </form>
  </div>
);
