import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { auth } from '../auth/FireBase';
import { useNavigate } from 'react-router-dom';







const ProfileIcon = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleSignout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Signout error:', error);
    }
  };

  return (
    <div className="relative">
      <FaUser
        className="h-10 w-10 cursor-pointer text-white bg-gradient-to-l from-[rgb(24,204,216)] to-[rgb(239,104,8)] p-[5px] rounded-full"
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <div className="border-black border-[1px] hover:bg-gray-200 absolute top-12 right-0 mt-2 py-1 px-4 bg-white rounded shadow-md">
          <button className="px-3 py-1 text-sm text-black font-medium font-sans " onClick={handleSignout}>SignOut</button>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
