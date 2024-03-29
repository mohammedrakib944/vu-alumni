"use client";
import { useState, useDeferredValue, useEffect } from "react";
import axiosBase from "@/axios/baseURL";

const Search = ({ setUsers, getData }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    if (event.target.value === "") {
      getData();
    }
  };

  const handleSearch = async (query: any) => {
    try {
      const response = await axiosBase.get(
        `/user/search?q=${query || searchTerm}`
      );
      setUsers(response?.data?.users);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchTerm === "") return;
      handleSearch(searchTerm);
    }, 100);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  return (
    <div>
      <div className="border flex border-black/50 rounded-full overflow-hidden hover:shadow-xl">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="py-2 px-4 outline-none"
          placeholder="Type.."
        />
        <button
          type="button"
          onClick={() => handleSearch(searchTerm)}
          className="text-sm px-4 border-l border-black/50"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
