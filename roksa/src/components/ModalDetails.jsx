import React, { useState } from 'react';
import './ModalDetails.css';


const ModalDetails = ({ item, onClose }) => {
  const [saved, setSaved] = useState(false);

  const handleSaveClick = () => {
    setSaved(!saved);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>Закрити</button>
        <div className="modal-body">
          <div className="modal-left">
            <img src={item.img} alt={item.title} className="modal-img" />
            <button
              className={`save-btn ${saved ? 'saved' : ''}`}
              onClick={handleSaveClick}
            >
              ❤️ {saved ? 'Збережено' : 'Зберегти'}
            </button>
          </div>
          <div className="modal-right">
            <h2 className="modal-title">{item.title}</h2>
            <p className="modal-description">{item.fullDescription || item.description}</p>
            <div className="modal-info">
              <p><strong>Автор:</strong> {item.author || 'Невідомий'}</p>
              <p><strong>Оригінальна назва:</strong> {item.originalTitle || '---'}</p>
              <p><strong>Рік першого видання:</strong> {item.year || '---'}</p>
              <p><strong>Жанр:</strong> {item.genre || '---'}</p>
            </div>
            <button className="modal-visit-btn" onClick={() => window.open(item.link || '#', '_blank')}>
              Перейти на офіційний сайт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
