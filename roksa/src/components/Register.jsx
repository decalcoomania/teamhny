import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import hedgehogs from '../assets/stats/discord.png';
import openedEye from '../assets/stats/opened-eye.png';
import closedEye from '../assets/stats/closed-eye.png';
import facebookIcon from '../assets/stats/contacts.png';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, surname, email, password } = formData;

    try {
      // Реєструємо користувача в Firebase Auth
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      // Оновлюємо профіль користувача в Firebase Auth
      await updateProfile(user, {
        displayName: `${name} ${surname}`
      });

      // Зберігаємо додаткові дані у Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        surname,
        email
      });

      alert("Реєстрація успішна!");
      navigate("/profile");
    } catch (error) {
      alert("Помилка: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Вхід через Google успішний!");
      navigate("/profile");
    } catch (error) {
      alert("Помилка: " + error.message);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Вхід через Facebook успішний!");
      navigate("/profile");
    } catch (error) {
      alert("Помилка: " + error.message);
    }
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
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>Прізвище</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            required
          />
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label>Пароль</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
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
          <p>
            Маєте акаунт?{" "}
            <a onClick={handleLogin} style={{ cursor: 'pointer' }}>Увійти</a>
          </p>
          <div className="separator">
            <span className="separator-line"></span>
            <span className="separator-text">Або</span>
            <span className="separator-line"></span>
          </div>
        </div>

        <div className="social-login">
          <button onClick={handleGoogleLogin} className="google-btn">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google Icon"
              className="social-icon"
            />
            <span className="button-text">Продовжити через Google</span>
          </button>
          <button onClick={handleFacebookLogin} className="facebook-btn">
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
