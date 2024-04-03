import React from 'react';
import { FaSearch } from 'react-icons/fa';
import ProfileIcon from './ProfileIcon'; 



function Navbar() {
  return (
    <nav className="p-4 pt-0 pb-0"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://img.freepik.com/free-vector/gradient-futuristic-background-with-connection-concept_23-2149104857.jpg?t=st=1708964383~exp=1708967983~hmac=6bfae60619269375d18e6bfd4f88e6827d22105f8dd026e1b837cc124cb57eb9&w=826')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '50'
      }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" className="h-16 w-16 mr-2" alt="MS_logo" />
          <span className='bg-gradient-to-l text-transparent from-[rgb(239,104,8)] to-[rgb(24,204,216)] bg-clip-text font-bold text-2xl font-sans'>DEVEXCHANGE</span>
        </div>
        <div className="flex items-center justify-center relative ml-2">
          <FaSearch className="h-4 w-4 absolute left-0 top-0 mt-3 ml-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="px-4 pl-8 py-2 border border-gray-300 rounded-md ml-4 font-sans"
          />
        </div>
        <div className="flex items-center">
           <ProfileIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
