import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Navbar from './Navbar'; 
import SideNavBar from './SideNavBar';

const Tags = () => {

  return (
    <div>
        <Navbar /> 
        <div className='flex'>
        <SideNavBar />
        <div className="container mx-auto mt-8">
        <div className="flex-col items-center space-y-4 mx-4">
        <h1 className="text-2xl font-semibold">TAGS :</h1>
        <p className='text-gray-400'>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Filter by tag name"
            className="px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500 pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <button
              type="submit"
              className="bg-gradient-to-l from-[rgb(24,204,216)] to-[rgb(239,104,8)] hover:from-[rgba(21,112,209,0.82)] hover:to-[rgba(21,112,209,0.82)]  text-white font-semibold px-4 py-2 rounded-md ml-4">
              Search
        </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Tags;
