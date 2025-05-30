import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "./header.css";

import logoImage from "../assets/stats/logo.png";
import homeIcon from "../assets/stats/home.png";
import languagesIcon from "../assets/stats/languages.png";
import recommendationsIcon from "../assets/stats/recommendations.png";
import gamesIcon from "../assets/stats/games.png";
import contactsIcon from "../assets/stats/contacts.png";
import loginIcon from "../assets/stats/login.png";
import profileIcon from "../assets/stats/profile.png";


const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logoImage} alt="Логотип" />
        </div>

        <ul className="nav-links">
          <li className="nav-item" onClick={() => navigate("/")}>
            <img src={homeIcon} alt="Головна" className="nav-button" />
          </li>
          <li className="nav-item" onClick={() => navigate("/languages")}>
            <img src={languagesIcon} alt="Мови" className="nav-button" />
          </li>
          <li className="nav-item" onClick={() => navigate("/recommendations")}>
            <img src={recommendationsIcon} alt="Рекомендації" className="nav-button" />
          </li>
          <li className="nav-item" onClick={() => navigate("/games")}>
            <img src={gamesIcon} alt="Ігри" className="nav-button" />
          </li>
          <li className="nav-item" onClick={() => navigate("/contacts")}>
            <img src={contactsIcon} alt="Контакти" className="nav-button" />
          </li>
        </ul>

        {/* 👇 Кнопка профілю або входу */}
        <div className="auth-buttons-container">
          {isLoggedIn ? (
            <button className="auth-button profile-access-button" onClick={handleProfileClick}>
            <img src={profileIcon} alt="Мій профіль" className="profile-icon" />
          </button>
          
          ) : (
            <button className="auth-button login-access-button" onClick={handleLoginClick}>
  <img src={loginIcon} alt="Увійти" className="login-icon" />
</button>

          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
