import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

import logo from '../assets/stats/logo.png';
import loginTitle from '../assets/stats/login.png';
import emailIcon from '../assets/stats/E-mail.png';
import passwordIcon from '../assets/stats/password.png';
import eyeIcon from '../assets/stats/eye.png';
import forgetButton from '../assets/stats/forget_button.png';
import loginButton from '../assets/stats/login_button.png';
import registerButton from '../assets/stats/registation_button.png';
import googleButton from '../assets/stats/Google_button.png';
import googleOverlay from '../assets/stats/google.png';
import facebookButton from '../assets/stats/facebook-btn.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogoClick = () => navigate('/');
  const handleRegister = () => navigate('/register');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Вхід успішний!");
      navigate("/");
    } catch (error) {
      alert("Помилка: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Вхід через Google успішний!");
      navigate("/");
    } catch (error) {
      alert("Помилка: " + error.message);
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Вхід через Facebook успішний!");
      navigate("/");
    } catch (error) {
      alert("Помилка: " + error.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img
          src={logo}
          alt="Talk Track Logo"
          className="login-logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
        <img src={loginTitle} alt="Увійти" className="login-title-img" />

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="label-img">
            <img src={emailIcon} alt="E-mail" />
          </label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password" className="label-img">
            <img src={passwordIcon} alt="Пароль" />
          </label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="text-input"
              required
            />
            <button
              type="button"
              className="eye-button"
              onClick={togglePassword}
              aria-label={showPassword ? 'Сховати пароль' : 'Показати пароль'}
            >
              <img src={eyeIcon} alt="Показати/Сховати" />
            </button>
          </div>

          <a href="#" className="login-forgot-img">
            <img src={forgetButton} alt="Забули пароль?" />
          </a>

          <button type="submit" className="login-image-button">
            <img src={loginButton} alt="Увійти" />
          </button>
        </form>

        <div className="register-image-wrapper" onClick={handleRegister}>
          <img src={registerButton} alt="Не маєте акаунту? Зареєструватись" className="register-image" />
          <a className="register-click-zone" aria-label="Зареєструватись"></a>
        </div>

        <div className="divider">Або</div>

        <div className="login-social">
          <button onClick={handleGoogleLogin} className="social-btn-with-bg">
            <img src={googleButton} alt="Google Button" className="social-bg" />
            <img src={googleOverlay} alt="Google" className="social-overlay" />
          </button>

          <button onClick={handleFacebookLogin} className="social-btn-with-bg">
            <img src={facebookButton} alt="Facebook Button" className="social-bg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
