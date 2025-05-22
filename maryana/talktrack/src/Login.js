import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src="/images/logo.png" alt="Talk Track Logo" className="login-logo" />

        <img src="/images/login.png" alt="Увійти" className="login-title-img" />

        <form className="login-form">
          <label htmlFor="email" className="label-img">
            <img src="/images/E-mail.png" alt="E-mail" />
          </label>
          <input type="email" id="email" />

          <label htmlFor="password" className="label-img">
            <img src="/images/password.png" alt="Пароль" />
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
              <img
                src={showPassword ? '/images/eye.png' : '/images/eye.png'}
                alt=""
              />
            </button>
          </div>

          <a href="#" className="login-forgot-img">
            <img src="/images/forget_button.png" alt="Забули пароль?" />
          </a>

          <button type="submit" className="login-image-button">
            <img src="/images/login_button.png" alt="Увійти" />
          </button>
        </form>

        <div className="register-image-wrapper">
          <img src="/images/registation_button.png" alt="Не маєте акаунту? Зареєструватись" className="register-image" />
          <a href="#" className="register-click-zone" aria-label="Зареєструватись"></a>
        </div>

        <div className="divider">Або</div>

        <div className="login-social">
          <button className="social-btn-with-bg">
            <img src="/images/Google_button.png" alt="Google Button" className="social-bg" />
            <img src="/images/google.png" alt="Google" className="social-overlay" />
          </button>

          <button className="social-btn-with-bg">
            <img src="/images/facebook-btn.png" alt="Facebook Button" className="social-bg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
