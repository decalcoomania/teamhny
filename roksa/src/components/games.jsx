import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import Header from '../components/header';
import './games.css';
import Modal from '../components/Modal'; // старе модальне вікно
import SentenceBuilderModal from '../components/SentenceBuilderModal'; // нове модальне вікно "Склади речення"
import FlashcardsModal from '../components/FlashcardsModal'; // модальне вікно флеш-карток

import puzzleIcon from '../assets/stats/puzzle.png';
import countriesIcon from '../assets/stats/countries.png';
import flashCardIcon from '../assets/stats/flash-card.png';

const Games = () => {
  const [isOldModalOpen, setIsOldModalOpen] = useState(false);
  const [isSentenceBuilderOpen, setIsSentenceBuilderOpen] = useState(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);

  const openOldModal = () => setIsOldModalOpen(true);
  const closeOldModal = () => setIsOldModalOpen(false);

  const openSentenceBuilderModal = () => setIsSentenceBuilderOpen(true);
  const closeSentenceBuilderModal = () => setIsSentenceBuilderOpen(false);

  const openFlashcardsModal = () => setIsFlashcardsOpen(true);
  const closeFlashcardsModal = () => setIsFlashcardsOpen(false);

  const exercises = [
    {
      words: ["I", "a","yesterday", "book", "read"],
      correctSentence: "I read a book yesterday"
    },
    {
      words: ["is", "to", "going", "school", "She", "now"],
      correctSentence: "She is going to school now"
    },
    {
      words: ["They", "their", "finished", "homework", "have",],
      correctSentence: "They have finished their homework"
    },
    {
      words: ["are", "We","movie", "watching", "a",],
      correctSentence: "We are watching a movie"
    },
    {
      words: ["come", "tomorrow", "will", "He"],
      correctSentence: "He will come tomorrow"
    },
  ];

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
            onClick={openSentenceBuilderModal}
          />
          <GameCard
            title="Вгадай країну"
            description="Обирай країну за описом чи фото, отримуй підказки та дізнавайся нові факти"
            icon={countriesIcon}
            background="#FFD6D3"
            headerBackground="#F85A75"
            titleColor="#FFFFFF"
            textColor="#922436"
            onClick={openOldModal}
          />
          <GameCard
            title="Флеш-картки"
            description="Тренуй слова та фрази з картками, перевіряй себе та відзначай рівень знання"
            icon={flashCardIcon}
            background="#F85A75"
            headerBackground="#FFFFFF"
            titleColor="#35240E"
            textColor="#FFFFFF"
            onClick={openFlashcardsModal}
          />
        </div>

        {/* Старе модальне вікно */}
        <Modal isOpen={isOldModalOpen} onClose={closeOldModal} />

        {/* Нове модальне вікно "Склади речення" */}
        <SentenceBuilderModal 
          isOpen={isSentenceBuilderOpen} 
          onClose={closeSentenceBuilderModal} 
          exercises={exercises} 
        />

        {/* Модальне вікно флеш-карток */}
        <FlashcardsModal isOpen={isFlashcardsOpen} onClose={closeFlashcardsModal} />
      </div>
    </div>
  );
};

export default Games;
