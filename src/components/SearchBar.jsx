import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text" 
        placeholder="Search by title..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
