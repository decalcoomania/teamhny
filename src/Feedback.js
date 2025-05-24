import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.png'; // Шлях до лого
import './Feedback.css';

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const textareaRef = useRef(null); // Створюємо реф для textarea

  // Функція для автоматичного підлаштування висоти textarea
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Скидаємо висоту
      textarea.style.height = `${textarea.scrollHeight}px`; // Встановлюємо висоту на основі вмісту
    }
  };

  // Викликаємо функцію при зміні значення в textarea
  useEffect(() => {
    adjustTextareaHeight();
  }, [formData.message]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="feedback-container">
      <div className="left-section">
        <img src={logo} alt="Talk Track Logo" className="logo" />
        <h2>Напишіть нам</h2>
        <p>Наша дружня команда завжди рада допомогти.</p>
        <p><strong>potuzhni.team123@gmail.com</strong></p>
        <h2>Заходьте до нас</h2>
        <p>Завітайте до нашого офісу</p>
        <p><strong>вул. С.Бандери, 30</strong></p>
        <p><strong>м. Львів, 79040, Україна</strong></p>
        <h2>Подзвоніть нам</h2>
        <p>Працюємо з понеділка по п’ятницю з 10:00 до 18:00</p>
        <p><strong>+380 68 666 54 29</strong></p>
      </div>

      <div className="right-section">
        <h1>Твоє повідомлення - наша усмішка</h1>
        <p>Не соромся звертатися - ми тут, щоб зробити твій день трохи теплішим!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше ім'я та прізвище"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш e-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label className="message-label">Як можемо допомогти?</label>
          <div className="textarea-wrapper">
            <textarea
              ref={textareaRef}
              name="message"
              value={formData.message}
              onChange={(e) => {
                handleInputChange(e);
                adjustTextareaHeight();
              }}
              required
            />
            <div className="underline"></div>
          </div>
          <button type="submit">Надіслати</button>
        </form>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Ваше звернення надіслано</p>
            <button onClick={closeModal}>Закрити</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;