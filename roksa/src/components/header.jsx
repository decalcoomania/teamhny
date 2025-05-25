import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

import logoImage from "../assets/stats/logo.png";
import homeIcon from "../assets/stats/home.png";
import languagesIcon from "../assets/stats/languages.png";
import recommendationsIcon from "../assets/stats/recommendations.png";
import gamesIcon from "../assets/stats/games.png";
import contactsIcon from "../assets/stats/contacts.png";
import profileIcon from "../assets/stats/profile.png";

const Header = () => {
  const navigate = useNavigate();

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
            <img src={languagesIcon} alt="Мови" className="nav-button" onClick={() => navigate("/Languages")} />
          </li>
          <li className="nav-item">
            <img src={recommendationsIcon} alt="Рекомендації" className="nav-button" onClick={() => navigate("/Recommendations")} />
          </li>
          <li className="nav-item">
            <img src={gamesIcon} alt="Ігри" className="nav-button" onClick={() => navigate("/Games")} />
          </li>
          <li className="nav-item">
            <img src={contactsIcon} alt="Контакти" className="nav-button" onClick={() => navigate("/Contacts")} />
          </li>
        </ul>

        <div className="profile" onClick={() => navigate("/Profile")}>
          <img src={profileIcon} alt="Профіль" className="nav-button" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
