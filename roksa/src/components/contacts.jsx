import React, { useState, useRef, useEffect } from 'react';
import logo from "../assets/stats/logo.png";
import './contacts.css';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const textareaRef = useRef(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

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
    <div className="contacts-container">
      <div className="contacts-left-section">
        <Link to="/">
            <img src={logo} alt="Talk Track Logo" className="contacts-logo" />
        </Link>

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

      <div className="contacts-right-section">
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
          <label className="contacts-message-label">Як можемо допомогти?</label>
          <div className="contacts-textarea-wrapper">
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
            <div className="contacts-underline"></div>
          </div>
          <button type="submit">Надіслати</button>
        </form>
      </div>

      {isModalOpen && (
        <div className="contacts-modal-overlay">
          <div className="contacts-modal-content">
            <p>Ваше звернення надіслано</p>
            <button onClick={closeModal}>Закрити</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;