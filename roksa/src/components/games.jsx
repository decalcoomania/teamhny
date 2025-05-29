import React from 'react';
import GameCard from '../components/GameCard';
import './games.css';
import Header from "../components/header";
const Games = () => (
  <div className="games-page">
    <Header />
    <div className="games-game-grid">
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

export default Games;