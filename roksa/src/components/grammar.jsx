import React from "react";
import "../App.css";
import "./grammar.css";

function Grammar() {
  return (
    <div className="grammar-page">
      <div className="grammar-container">
        <header className="grammar-header">
          <div className="grammar-logo">
            <img src="/logo.svg" alt="Logo" />
            <span>Talk Track</span>
          </div>
          <nav className="grammar-nav">
            <a href="#">Головна</a>
            <a href="#">Мови</a>
            <a href="#">Рекомендації</a>
            <a href="#">Ігри</a>
            <a href="#">Контакти</a>
          </nav>
          <div className="grammar-profile">
            <span>69 🔥</span>
            <button>Профіль</button>
          </div>
        </header>

        <main className="grammar-main">
          <h1>
            Складніші курси стануть доступні після завершення попередніх —{" "}
            <span className="grammar-highlight">
              вчися послідовно й відкривай нові горизонти!
            </span>
          </h1>

          <section className="grammar-recommendation">
            <h2>Рекомендовано для початківців:</h2>

            <div className="grammar-course-card">
              <h3>Граматика рівня A1</h3>
              <p>Курс, що охоплює граматику для початківців.</p>
              <button>Переглянути відео</button>
              <label>
                <input type="checkbox" /> Позначити, як пройдене
              </label>
            </div>

            <div className="grammar-levels">
              {["A2", "B1", "B2", "C1"].map((level) => (
                <div className="grammar-level-card" key={level}>
                  <span>{level}</span>
                  <button>Детальніше</button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Grammar;
