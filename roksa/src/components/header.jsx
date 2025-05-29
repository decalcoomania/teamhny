import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

import logoImage from "../assets/stats/logo.png";
import homeIcon from "../assets/stats/home.png";
import languagesIcon from "../assets/stats/languages.png";
import recommendationsIcon from "../assets/stats/recommendations.png";
import gamesIcon from "../assets/stats/games.png";
import contactsIcon from "../assets/stats/contacts.png";
import profileIcon from "../assets/stats/profile.png";

import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔑 стан логіну
  const profileRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Закрити меню при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={logoImage} alt="Логотип" />
        </div>

        <ul className="nav-links">
          <li className="nav-item">
            <img src={homeIcon} alt="Головна" className="nav-button" onClick={() => navigate("/")} />
          </li>
          <li className="nav-item">
            <img src={languagesIcon} alt="Мови" className="nav-button" onClick={() => navigate("/languages")} />
          </li>
          <li className="nav-item">
            <img src={recommendationsIcon} alt="Рекомендації" className="nav-button" onClick={() => navigate("/recommendations")} />
          </li>
          <li className="nav-item">
            <img src={gamesIcon} alt="Ігри" className="nav-button" onClick={() => navigate("/games")} />
          </li>
          <li className="nav-item">
            <img src={contactsIcon} alt="Контакти" className="nav-button" onClick={() => navigate("/contacts")} />
          </li>
        </ul>

        {/* 👇 Кнопка Профіль з випадаючим меню */}
        <div className="profile-dropdown-container" ref={profileRef}>
          <div className="profile" onClick={toggleDropdown}>
            <img src={profileIcon} alt="Профіль" className="nav-button" />
          </div>
          {dropdownOpen && (
            <ProfileDropdown
              isLoggedIn={isLoggedIn}
              onClose={closeDropdown}
              onLogout={() => setIsLoggedIn(false)} // ⛔ вихід
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
