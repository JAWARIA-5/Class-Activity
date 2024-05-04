import React, { useState } from 'react';
import './search.css';
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={null}
      />
      <button type="submit">Search</button>
    </form>
    </div>
  );
}

export default SearchBar;
