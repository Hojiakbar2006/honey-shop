import React from "react";
import "./style.css";

export function Search({ setSearch }) {
  return (
    <div id="search">
      <h1>Welcome Our Product</h1>
      <label>
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </label>
    </div>
  );
}
