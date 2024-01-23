"use client";
import { useState } from 'react';
import axiosBase from '@/axios/baseURL';

const Search = ({ setUsers, getData }: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    if (event.target.value === '') {
      getData();
    } else {
      handleSearch(event.target.value);
    }
  };

  const handleSearch = async (query: any) => {
    try {
      const response = await axiosBase.get(`/user/search?q=${query || searchTerm}`);
      setUsers(response?.data?.users);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

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
        <button type="button" onClick={handleSearch} className="text-sm px-4 border-l border-black/50">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
