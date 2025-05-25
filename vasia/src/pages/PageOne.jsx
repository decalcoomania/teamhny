import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import './PageOne.css';
import { Link } from 'react-router-dom';

const PageOne = () => (
  <div className="page-one">
    <header className="main-header">
      <img src="/logo.png" alt="Logo" className="logo" />
      <nav className="nav-bar">
        <Link to="/">Головна</Link>
        <Link to="/languages">Мови</Link>
        <Link to="/recommend">Рекомендації</Link>
        <Link to="/games">Ігри</Link>
        <Link to="/contacts">Контакти</Link>
      </nav>
      <div className="profile-block">
        <span className="streak">69</span>
        <img src="/flame.png" alt="Streak" className="flame" />
        <button className="profile-btn">Профіль</button>
      </div>
    </header>
    <CategoryGrid title="Фільми" />
    <CategoryGrid title="Серіали" />
    <CategoryGrid title="Книги" />
  </div>
);

export default PageOne;
