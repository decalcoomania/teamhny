import './languages.css';

import languagesBtn from '../assets/stats/languages_button.png';
import popularBtn from '../assets/stats/popular_button.png';
import leftBtn from '../assets/stats/left_button.png';
import rightBtn from '../assets/stats/right_button.png';
import startCourseBtn from '../assets/stats/button_start_course.png';
import bgImageLang from '../assets/stats/fon.png';
import Header from "../components/header";

function Languages() {
  return (
    <div className="languages-container">
      {/* Фонове зображення */}
      <img src={bgImageLang} alt="Background" className="bg-image-lang" />

      {/* Хедер */}
      <Header />
        <div className="title-text">
        Обирай <span className="highlight">мову.</span> Відкривай<br />нові можливості
        </div>


      <div className="buttons-after-header">
        <button className="image-button">
            <img src={languagesBtn} alt="Мови(5)" />
        </button>
        <button className="image-button">
            <img src={popularBtn} alt="Найпопулярніші" />
        </button>
        </div>


      {/* Основний контент */}
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
          <LanguageCard />
          <LanguageCard />
          <LanguageCard />
          <LanguageCard />
        </div>
      </section>
    </div>
  );
}

function LanguageCard() {
  return (
    <div className="languages-card">
      <button className="languages-start-btn-wrapper">
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
