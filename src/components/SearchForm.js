import React from "react";

export default function SearchForm({ onChange, value }) {
  // STRETCH TODO: Add stateful logic for query/form data
  return (
    <section className="search-form">
      <input
        onChange={e => {
          onChange(e.target.value);
        }}
        placeholder="name"
        value={value}
        type="text"
      />
      <button type="submit">Search</button>
    </section>
  );
}
