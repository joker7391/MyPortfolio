import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="flex justify-end w-1/4">
      <div className="w-full">
        <input
          onChange={(e) => handleSearch(e)}
          className="w-full py-2 pl-2 pr-5 border border-black focus:outline-none"
          placeholder="Search post title"
        />
      </div>
    </div>
  );
}

export default Search;
