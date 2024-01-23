import React from "react";

const Search = () => {
  return (
    <div>
      <form className="border flex border-black/50 rounded-full overflow-hidden hover:shadow-xl">
        <input
          type="text"
          className="py-2 px-4 outline-none"
          placeholder="Type.."
        />
        <button type="submit" className="text-sm px-4 border-l border-black/50">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
