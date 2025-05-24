import React, { useState } from 'react';
import hedgehogs from './hedgehogs.png'; // Path to your hedgehogs image
import openedEye from './opened-eye.png'; // Path to opened eye icon
import closedEye from './closed-eye.png'; // Path to closed eye icon
import facebookIcon from './facebook-icon.png';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Реєстрація успішна!');
    setFormData({ name: '', surname: '', email: '', password: '' });
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1>Реєстрація</h1>
        <form onSubmit={handleSubmit}>
          <label>Ім'я</label>
          <input
            type="text"
            name="name"
            placeholder=""
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>Прізвище</label>
          <input
            type="text"
            name="surname"
            placeholder=""
            value={formData.surname}
            onChange={handleInputChange}
            required
          />
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder=""
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label>Пароль</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder=""
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <img
              src={showPassword ? openedEye : closedEye}
              alt="Toggle Password Visibility"
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <button type="submit">Зареєструватись</button>
        </form>
        <div className="account-text">
          <p>Маєте акаунт? <a href="/feedback">Увійти</a></p>
          <div className="separator">
            <span className="separator-line"></span>
            <span className="separator-text">Або</span>
            <span className="separator-line"></span>
          </div>
        </div>
        <div className="social-login">
          <button className="google-btn">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google Icon"
              className="social-icon"
            />
            <span className="button-text">Продовжити через Google</span>
          </button>
          <button className="facebook-btn">
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className="social-icon"
            />
            <span className="button-text">Продовжити через Facebook</span>
          </button>
        </div>
      </div>
      <div className="register-right">
        <img src={hedgehogs} alt="Hedgehogs" className="hedgehogs-img" />
      </div>
    </div>
  );
};

export default Register;