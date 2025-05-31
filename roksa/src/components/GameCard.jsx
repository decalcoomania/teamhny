import React from 'react';
import './GameCard.css';

const GameCard = ({
  title,
  description,
  icon,
  background,
  titleColor,
  textColor,
  headerBackground,
  onClick
}) => (
  <div className="game-card" style={{ backgroundColor: background }} onClick={onClick}>
    <div
      className="game-card-header"
      style={{
        color: titleColor,
        backgroundColor: headerBackground,
        border: '2px solid #C33048'
      }}
    >
      {title}
    </div>
    <p className="game-card-description" style={{ color: textColor }}>
      {description}
    </p>
    <img src={icon} alt={title} className="game-card-icon" />
  </div>
);

export default GameCard;
