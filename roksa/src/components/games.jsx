import React, { useState } from 'react'; // ⬅️ додано useState
import GameCard from '../components/GameCard';
import Header from '../components/header';
import './games.css';
import Modal from '../components/Modal';

import puzzleIcon from '../assets/stats/puzzle.png';
import countriesIcon from '../assets/stats/countries.png';
import flashCardIcon from '../assets/stats/flash-card.png';

const Games = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="games-wrapper">
      <div className="games-block">
        <Header />
        <div className="games-cards">
          <GameCard
            title="Склади речення"
            description="Складай речення з розкиданих слів, отримуй підказки та набирай бали"
            icon={puzzleIcon}
            background="#FFF7EF"
            headerBackground="#FFD6D3"
            titleColor="#C33048"
            textColor="#000000"
            onClick={openModal}
          />
          <GameCard
            title="Вгадай країну"
            description="Обирай країну за описом чи фото, отримуй підказки та дізнавайся нові факти"
            icon={countriesIcon}
            background="#FFD6D3"
            headerBackground="#F85A75"
            titleColor="#FFFFFF"
            textColor="#922436"
            onClick={openModal}
          />
          <GameCard
            title="Флеш-картки"
            description="Тренуй слова та фрази з картками, перевіряй себе та відзначай рівень знання"
            icon={flashCardIcon}
            background="#F85A75"
            headerBackground="#FFFFFF"
            titleColor="#35240E"
            textColor="#FFFFFF"
            onClick={openModal}
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Games;
