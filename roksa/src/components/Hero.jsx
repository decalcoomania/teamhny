import React from "react";
import "./Hero.css";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

import bgImage from "../assets/stats/fon.png";
import hedgehog from "../assets/stats/headhehog.png";
import languages from "../assets/stats/language.png";
import users from "../assets/stats/users.png";
import reviews from "../assets/stats/reviews.png";
import btnChooseLang from "../assets/stats/choose-language.png";
import btnCheckLevel from "../assets/stats/check-level.png";
import discord from "../assets/stats/discord.png";
import discordprem from "../assets/stats/discordprem.png";
import prembut from "../assets/stats/prembut.png";
import joinbut from "../assets/stats/joinbut.png";
import image1 from "../assets/stats/image1.png";
import image2 from "../assets/stats/image2.png";
import image3 from "../assets/stats/image3.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero">
        <img src={bgImage} alt="Background" className="bg-image" />
        <Header />
        <div className="hero-content">
          <div className="text">
            <h1>
              <span className="pink">Мрій</span> без обмежень
            </h1>
            <h2>
              Спілкуйся без <span className="pink">бар'єрів</span>
            </h2>

            <p>
              Вивчай мови з нами, щоб відкрити світ без меж, спілкуйся з людьми
              <br />
              з різних куточків планети та реалізовуй свої мрії без бар'єрів.
            </p>

            <div className="buttons">
              <div
                className="btn-choose"
                onClick={() => navigate('/languages')}
              >  
                <img src={btnChooseLang} alt="Обрати мову" />
              </div>
              <div
                className="btn-check"
                onClick={() => navigate('/test')}
              >
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

          <div className="join-buttons-wrapper">
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
    </>
  );
};

export default Hero;