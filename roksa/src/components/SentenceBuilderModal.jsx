import React, { useState, useEffect } from 'react';
import './SentenceBuilderModal.css';

const SentenceBuilderModal = ({ isOpen, onClose, exercises }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [userSentence, setUserSentence] = useState([]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentLevel(0);
      setUserSentence([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const { words, correctSentence } = exercises[currentLevel];

  const handleWordClick = (word) => {
    setUserSentence([...userSentence, word]);
  };

  const handleClear = () => {
    setUserSentence([]);
  };

  const handleCheck = () => {
    const formatStr = (str) =>
      str.toLowerCase().trim().replace(/\s+/g, ' ');

    const userStr = formatStr(userSentence.join(' '));
    const correctStr = formatStr(correctSentence);

    if (userStr === correctStr) {
      if (currentLevel + 1 < exercises.length) {
        alert('Вірно! Переходимо до наступного рівня 🎉');
        setCurrentLevel(currentLevel + 1);
        setUserSentence([]);
      } else {
        alert('Вітаємо! Ти завершив всі рівні!');
        onClose();
      }
    } else {
      alert('Невірно, спробуй ще раз.');
    }
  };

  return (
    <div className="sb-modal-overlay" onClick={onClose}>
      <div className="sb-modal-content" onClick={e => e.stopPropagation()}>
        <button className="sb-close-btn" onClick={onClose}>✕</button>

        <h3>Рівень {currentLevel + 1} з {exercises.length}</h3>

        <div className="sb-sentence-box">
          {userSentence.length === 0 ? (
            <span className="sb-placeholder">Тут буде твоє речення</span>
          ) : (
            userSentence.map((word, idx) => (
              <span key={idx} className="sb-word-in-sentence">{word}</span>
            ))
          )}
        </div>

        <div className="sb-words-container">
          {words.map((word, idx) => (
            <button
              key={idx}
              className="sb-word-btn"
              onClick={() => handleWordClick(word)}
            >
              {word}
            </button>
          ))}
        </div>

        <div className="sb-controls">
          <button className="sb-clear-btn" onClick={handleClear}>Очистити</button>
          <button className="sb-check-btn" onClick={handleCheck}>Перевірити</button>
        </div>
      </div>
    </div>
  );
};

export default SentenceBuilderModal;
