import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.clear();
    setTimeout(() => navigate('/'), 2000);
  }, [navigate]);

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <h2>You have been logged out. Redirecting...</h2>
    </div>
  );
};

export default Logout;
