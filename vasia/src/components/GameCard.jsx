import React from 'react';
import './GameCard.css';

const GameCard = ({ title, description, icon, color }) => (
  <div className="game-card" style={{ backgroundColor: color }}>
    <div>
      <h3 className="game-title">{title}</h3>
      <p className="game-description">{description}</p>
    </div>
    <img src={icon} alt={title} className="game-icon" />
  </div>
);

export default GameCard;