import React from "react";

export default ({ submitSearch, search, setSearch }) => (
  <div>
    <form>
      <input
        value={search}
        className="search-input"
        onChange={e => setSearch(e.target.value)}
      />
      <button className="search-button" onClick={submitSearch}>
        Search
      </button>
    </form>
  </div>
);
