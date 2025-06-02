import React from "react";
import { useNavigate } from "react-router-dom";
import "./languages.css";

import languagesBtn from "../assets/stats/languages_button.png";
import popularBtn from "../assets/stats/popular_button.png";
import leftBtn from "../assets/stats/left_button.png";
import rightBtn from "../assets/stats/right_button.png";
import startCourseBtn from "../assets/stats/button_start_course.png";
import bgImageLang from "../assets/stats/fon.png";
import Header from "../components/header";
import overlayImg1 from "../assets/stats/enghedgehog.png";
import overlayImg2 from "../assets/stats/spanhedgehog.png";
import overlayImg3 from "../assets/stats/koreahedgehog.png";
import overlayImg4 from "../assets/stats/enghedgehog.png";

function Languages() {
  const navigate = useNavigate();

  const handleStartCourse = () => {
    navigate("/grammar");
  };

  return (
    
    <div className="languages-container">
      <img src={bgImageLang} alt="Background" className="bg-image-lang" />
 {/* Оверлей-зображення */}
  <div className="overlays">
    <img src={overlayImg1} alt="Overlay 1" className="overlay-image img1" />
    <img src={overlayImg2} alt="Overlay 2" className="overlay-image img2" />
    <img src={overlayImg3} alt="Overlay 3" className="overlay-image img3" />
    <img src={overlayImg4} alt="Overlay 4" className="overlay-image img4" />
  </div>
      <Header />
      <div className="title-text">
        Обирай <span className="highlight">мову.</span> Відкривай
        <br />
        нові можливості
      </div>

      <div className="buttons-after-header">
        <button className="image-button">
          <img src={languagesBtn} alt="Мови(5)" />
        </button>
      </div>

      <div className="languages-pagination">
        <button>
          <img src={leftBtn} alt="Попередня сторінка" />
        </button>
        <span>1</span>
        <button>
          <img src={rightBtn} alt="Наступна сторінка" />
        </button>
      </div>

      <section className="languages-list">
        <div className="languages-cards">
          <LanguageCard onStartCourse={handleStartCourse} />
          <LanguageCard />
          <LanguageCard />
          <LanguageCard />
        </div>
      </section>
    </div>
  );
}

function LanguageCard({ onStartCourse }) {
  return (
    <div className="languages-card">
      <button
        className="languages-start-btn-wrapper"
        onClick={onStartCourse}
      >
        <img
          src={startCourseBtn}
          alt="Розпочати курс"
          className="languages-start-btn-image"
        />
      </button>
    </div>
  );
}

export default Languages;
