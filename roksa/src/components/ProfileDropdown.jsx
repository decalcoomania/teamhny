import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileDropdown.css';

const ProfileDropdown = ({ isLoggedIn, onClose, onLogout }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Login');
    onClose();
  };

  const handleProfile = () => {
    navigate('/profile');
    onClose();
  };

  const handleLogout = () => {
    alert('Ви вийшли з акаунту');
    onLogout();
    onClose();
  };

  return (
    <div className="dropdown-menu">
      {isLoggedIn ? (
        <>
          <button onClick={handleProfile}>Мій профіль</button>
          <button onClick={handleLogout}>Вийти</button>
        </>
      ) : (
        <button onClick={handleLogin}>Увійти</button>
      )}
    </div>
  );
};

export default ProfileDropdown;
