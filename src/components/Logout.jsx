import React from 'react';
import { googleLogout } from '@react-oauth/google';

const Logout = ({ onLogoutSuccess }) => {
  const handleLogout = () => {
    googleLogout();
    if (onLogoutSuccess) onLogoutSuccess();
  };

  return (
    <div id="signoutButton">
      <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
};

export default Logout;
