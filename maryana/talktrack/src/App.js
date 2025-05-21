import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
      <div className="logo">
  <img src="/images/logo.png" alt="Talk Track Logo" className="logo-image" />
</div>

        <nav>
          <a href="#">Головна</a>
          <a href="#">Мови</a>
          <a href="#">Рекомендації</a>
          <a href="#">Ігри</a>
          <a href="#">Контакти</a>
        </nav>
        <div className="profile">
          <span>69 🔥</span>
          <button>
       <img src="/images/profile_button.png" alt="Профіль"/>
</button>

        </div>
      </header>

      <section className="hero">
      <section className="hero">
  <img src="/images/title.png" alt="Обирай мову" className="hero-image" />
  
</section>

<div className="filter-bar">
  <div className="filters">
    <button className="filter-btn">
      <img src="/images/languages_button.png" alt="Мови(5)" />
    </button>
    <button className="filter-btn">
      <img src="/images/popular_button.png" alt="Найпопулярніші" />
    </button>
  </div>
  <div className="pagination">
  <button>
    <img src="/images/left_button.png" alt="Попередня сторінка" />
  </button>
  <span>1</span>
  <button>
    <img src="/images/right_button.png" alt="Наступна сторінка" />
  </button>
</div>

</div>

      </section>

      <section className="carousel">
        <div className="cards">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
       
      </section>
    </div>
  );
}


function CourseCard() {
  return (
    <div className="card">
      <button className="start-btn-wrapper">
        <img src="/images/button_start_course.png" alt="Розпочати курс" className="start-btn-image" />
      </button>
    </div>
  );
}


export default App;
