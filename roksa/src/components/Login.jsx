import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

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
  const navigate = useNavigate(); // 🧭 навігація

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src={logo} alt="Talk Track Logo" className="login-logo" />
        <img src={loginTitle} alt="Увійти" className="login-title-img" />

        <form className="login-form">
          <label htmlFor="email" className="label-img">
            <img src={emailIcon} alt="E-mail" />
          </label>
          <input type="email" id="email" />

          <label htmlFor="password" className="label-img">
            <img src={passwordIcon} alt="Пароль" />
          </label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="text-input"
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
          <button className="social-btn-with-bg">
            <img src={googleButton} alt="Google Button" className="social-bg" />
            <img src={googleOverlay} alt="Google" className="social-overlay" />
          </button>

          <button className="social-btn-with-bg">
            <img src={facebookButton} alt="Facebook Button" className="social-bg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
