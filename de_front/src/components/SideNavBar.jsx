import React from 'react';
import { FaHome, FaQuestionCircle, FaTags } from 'react-icons/fa';







const SideNavBar = () => {
  return (
    <div className="min-h-screen text-gray-200 w-[200px] flex-shrink-0"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url('https://img.freepik.com/free-vector/gradient-futuristic-background-with-connection-concept_23-2149104857.jpg?t=st=1708964383~exp=1708967983~hmac=6bfae60619269375d18e6bfd4f88e6827d22105f8dd026e1b837cc124cb57eb9&w=826')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity:'50'
      }}
    >
      <div className="flex flex-col items-center justify-between h-full py-4">
        <div className="flex flex-col items-center">
          <ul className="space-y-8">
            <li className="flex items-center space-x-2  bg-gradient-to-l hover:from-[rgb(24,204,216)] hover:to-[rgb(239,104,8)] rounded-md p-2">
              <FaHome className="text-white" />
              <a href="/Home" className="text-white font-sans">Home</a>
            </li>
            <li className="flex items-center space-x-2 bg-gradient-to-l hover:from-[rgb(24,204,216)] hover:to-[rgb(239,104,8)] rounded-md p-2">
              <FaQuestionCircle className="text-white" />
              <a href="/Ask" className="text-white font-sans">Ask Questions</a>
            </li>
            <li className="flex items-center space-x-2 bg-gradient-to-l hover:from-[rgb(24,204,216)] hover:to-[rgb(239,104,8)] rounded-md p-2">
              <FaTags className="text-white" />
              <a href="/Tags" className="text-white font-sans">Tags</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;
