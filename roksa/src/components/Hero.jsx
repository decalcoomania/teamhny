import React from "react";
import "./Hero.css";
import logoImage from "../assets/stats/logo.png";
import bgImage from "../assets/stats/fon.png";
import hedgehog from "../assets/stats/headhehog.png";
import languages from "../assets/stats/language.png";
import users from "../assets/stats/users.png";
import reviews from "../assets/stats/reviews.png";
import btnChooseLang from "../assets/stats/choose-language.png";
import btnCheckLevel from "../assets/stats/check-level.png";
import profileIcon from "../assets/stats/profile.png";

import homeIcon from "../assets/stats/home.png";
import languagesIcon from "../assets/stats/languages.png";
import recommendationsIcon from "../assets/stats/recommendations.png";
import gamesIcon from "../assets/stats/games.png";
import contactsIcon from "../assets/stats/contacts.png";
import discord from "../assets/stats/discord.png";
import discordprem from "../assets/stats/discordprem.png";
import prembut from "../assets/stats/prembut.png";
import joinbut from "../assets/stats/joinbut.png";
import image1 from "../assets/stats/image1.png";
import image2 from "../assets/stats/image2.png";
import image3 from "../assets/stats/image3.png";


const Hero = () => {
  return (
    <div className="hero">
      <img src={bgImage} alt="Background" className="bg-image" />

      <nav className="navbar">
        <div className="logo">
          <img src={logoImage} alt="Логотип" />
        </div>

        <ul className="nav-links">
          <li className="nav-item">
            <img
              src={homeIcon}
              alt="Головна"
              className="nav-button"
              onClick={() => console.log("Головна")}
            />
          </li>
          <li className="nav-item">
            <img
              src={languagesIcon}
              alt="Мови"
              className="nav-button"
              onClick={() => console.log("Мови")}
            />
          </li>
          <li className="nav-item">
            <img
              src={recommendationsIcon}
              alt="Рекомендації"
              className="nav-button"
              onClick={() => console.log("Рекомендації")}
            />
          </li>
          <li className="nav-item">
            <img
              src={gamesIcon}
              alt="Ігри"
              className="nav-button"
              onClick={() => console.log("Ігри")}
            />
          </li>
          <li className="nav-item">
            <img
              src={contactsIcon}
              alt="Контакти"
              className="nav-button"
              onClick={() => console.log("Контакти")}
            />
          </li>
        </ul>

        <div className="profile" onClick={() => console.log("Профіль")}>
          <img src={profileIcon} alt="Профіль" className="nav-button" />
        </div>

      </nav>

      <div className="hero-content">
        <div className="text">
          <h1>
            <span className="pink">Мрій</span> без обмежень
          </h1>
          <h2>
            Спілкуйся без <span className="pink">бар'єрів</span>
          </h2>

          <p>
            Вивчай мови з нами, щоб відкрити світ без меж, спілкуйся з людьми<br />
            з різних куточків планети та реалізовуй свої мрії без бар'єрів.
          </p>

          <div className="buttons">
            <div className="btn-choose" onClick={() => console.log("Обрати мову натиснуто")}>
              <img src={btnChooseLang} alt="Обрати мову" />
            </div>
            <div className="btn-check" onClick={() => console.log("Визначити рівень натиснуто")}>
              <img src={btnCheckLevel} alt="Визначити рівень" />
            </div>
          </div>
        </div>

        <div className="image">
          <img src={hedgehog} alt="Hedgehog with laptop" />
        </div>
      </div>

      <div className="stats">
        <img src={languages} alt="Languages" />
        <img src={users} alt="Users" />
        <img src={reviews} alt="Reviews" />
      </div>

      <div className="join-section">
  <h2>
    Приєднуйся <span className="pink">до нас!</span>
  </h2>

  {/* Контейнер з позиціонуванням */}
  <div className="join-buttons-wrapper">
    {/* Основні кнопки */}
    <div className="join-buttons">
      <img
        src={discord}
        alt="Звичайний Discord"
        className="join-button choose-lang-button"
        onClick={() => console.log("Обрати мову натиснуто")}
      />
      <img
        src={discordprem}
        alt="Discord Premium"
        className="join-button check-level-button"
        onClick={() => console.log("Визначити рівень натиснуто")}
      />
    </div>

    {/* Кнопки поверх */}
        <div className="extra-buttons">
          <img
            src={joinbut}
            alt="Кнопка зверху - Discord"
            className="button-discord"
            onClick={() => console.log("Натиснуто звичайний Discord")}
          />
          <img
            src={prembut}
            alt="Кнопка зверху - Premium"
            className="button-discord-premium"
            onClick={() => console.log("Натиснуто Discord Premium")}
          />
        </div>
      </div>
    </div>
    <div className="bottom-images">
      <img src={image1} alt="Зображення 1" className="bottom-img img-one" />
      <img src={image2} alt="Зображення 2" className="bottom-img img-two" />
      <img src={image3} alt="Зображення 3" className="bottom-img img-three" />
    </div>
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} TalkTrack. Усі права захищені.</p>
        <div className="footer-links">
          <a href="#">Політика конфіденційності</a>
          <a href="#">Умови використання</a>
          <a href="#">Зв'язок</a>
        </div>
      </div>
    </footer>

</div>
  );
};

export default Hero;

