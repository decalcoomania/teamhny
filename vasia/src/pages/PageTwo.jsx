import React from 'react';
import GameCard from '../components/GameCard';
import './PageTwo.css';

const PageTwo = () => (
  <div className="page-two">
    <header className="main-header">
      <img src="/logo.png" alt="Logo" className="logo" />
      <nav className="nav-bar">
        <a href="#">Головна</a>
        <a href="#">Мови</a>
        <a href="#">Рекомендації</a>
        <a href="#">Ігри</a>
        <a href="#">Контакти</a>
      </nav>
      <div className="profile-block">
        <span className="streak">69</span>
        <img src="/flame.png" alt="Streak" className="flame" />
        <button className="profile-btn">Профіль</button>
      </div>
    </header>
    <div className="game-grid">
      <GameCard
        title="Склади речення"
        description="Складай речення з розкиданих слів, отримуй підказки та набирай бали"
        icon="/puzzle.png"
        color="#FFD6D3"
      />
      <GameCard
        title="Вгадай країну"
        description="Обирай країну за описом чи фото, отримуй підказки та дізнавайся нові факти"
        icon="/countries.png"
        color="#F85A75"
      />
      <GameCard
        title="Флеш-картки"
        description="Тренуй слова та фрази з картками, перевіряй себе та відзначай рівень знання"
        icon="/flash-card.png"
        color="#FFD6D3"
      />
    </div>
  </div>
);

export default PageTwo;