import React from 'react';

const Header = () => {
  const username = sessionStorage.getItem('username');
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
      <img src="./appointment.png" alt="Logo" height="50" />
      <div>Welcome, {username}</div>
    </header>
  );
};

export default Header;
