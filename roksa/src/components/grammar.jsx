import React, { useState } from "react";
import Header from "../components/header";
import "../App.css";
import "./grammar.css";

import textGrammar from "../assets/stats/text_grammar.png";
import recForBegin from "../assets/stats/rec_for_begin.png";
import gridLevelsFull from "../assets/stats/grid_full.png";
import gridA1 from "../assets/stats/grid_A1.png";
import closeIcon from "../assets/stats/close_grammar.png"; // ❗️імпорт іконки закриття

function Grammar() {
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentLevel, setCurrentLevel] = useState("");

  const handleLevelClick = (level) => {
    if (!isChecked) {
      setCurrentLevel(level);
      setShowModal(true);
    } else {
      alert(`Ти перейшла до курсу ${level}`);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="grammar-page">
      <div className="grammar-container">
        <div className="grammar-header">
        <Header />
</div>
        <main className="grammar-main">
          <div className="grammar-title-image">
            <img src={textGrammar} alt="Текст: вчися послідовно й відкривай нові горизонти" />
          </div>

          <section className="grammar-recommendation">
            <div className="grammar-recommendation-title">
              <img src={recForBegin} alt="Рекомендовано для початківців" />
            </div>

            <div className="grammar-content-blocks">
              {/* Блок A1 */}
              <div className="grammar-a1-wrapper">
                <img src={gridA1} alt="Граматика рівня A1" className="grammar-a1-image" />
                <button
                  className="grammar-a1-btn"
                  onClick={() => alert("Переглянути відео для рівня A1")}
                />
                <label className="grammar-a1-checkbox">
                  <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                  <span>Позначити, як пройдене</span>
                </label>
              </div>

              {/* Блоки A2–C1 */}
              <div className="grammar-grid-wrapper">
                <img
                  src={gridLevelsFull}
                  alt="Рівні A2, B1, B2, C1"
                  className="grammar-grid-image"
                />
                <button className="grammar-grid-btn btn-a2" onClick={() => handleLevelClick("A2")} />
                <button className="grammar-grid-btn btn-b1" onClick={() => handleLevelClick("B1")} />
                <button className="grammar-grid-btn btn-b2" onClick={() => handleLevelClick("B2")} />
                <button className="grammar-grid-btn btn-c1" onClick={() => handleLevelClick("C1")} />
              </div>
            </div>
          </section>
        </main>

        {/* Модальне вікно */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>Щоб пройти рівень {currentLevel}, спочатку завершіть попередній курс!</p>
              <button className="modal-close-btn" onClick={() => setShowModal(false)}>
                <img src={closeIcon} alt="Закрити" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Grammar;
