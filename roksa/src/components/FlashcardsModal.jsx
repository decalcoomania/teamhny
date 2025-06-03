import React, { useState } from 'react';
import './FlashcardsModal.css';

const cards = [
  {
    front: "Vacuum cleaner",
    back: "A machine used to clean floors and carpets by sucking up dirt"
  },
  {
    front: "Curtains",
    back: "Fabric that covers a window to block light or provide privacy"
  },
  {
    front: "Toothpaste",
    back: "A thick substance used with a toothbrush to clean your teeth"
  },
  {
    front: "Microwave",
    back: "An appliance used to heat food quickly using electromagnetic waves"
  },
  {
    front: "Pillow",
    back: "A soft cushion used to rest your head in bed"
  },
  {
    front: "I usually eat a ______ for breakfast",
    back: "Possible answers: sandwich, omelet, cereal, yogurt"
  },
  {
    front: "She doesn’t drink ______ in the morning",
    back: "Possible answers: coffee, tea, juice"
  },
  {
    front: "We always have ______ for dinner on Fridays",
    back: "Possible answers: pizza, fish, pasta"
  },
  {
    front: "He is allergic to ______",
    back: "Possible answers: peanuts, milk, eggs"
  },
  {
    front: "They bought some ______ at the market",
    back: "Possible answers: fruit, vegetables, bread"
  },
  {
    front: "How do you say “квиток” in English?",
    back: "Ticket"
  },
  {
    front: "Say this in English: «Я хотів би замовити таксі»",
    back: "I would like to order a taxi"
  },
  {
    front: "Say this in English: «Де найближча автобусна зупинка?»",
    back: "Where is the nearest bus stop?"
  },
  {
    front: "How do you say “поїздка” in English?",
    back: "Trip or journey"
  },
  {
    front: "Say this in English: «Ми загубилися»",
    back: "We are lost"
  },
  {
    front: "What is a synonym for the word hot?",
    back: "Warm"
  },
  {
    front: "What is a synonym for the word Big?",
    back: "Large"
  },
  {
    front: "What is a antonym for the word Fast?",
    back: "Slow"
  },
  {
    front: "What is a synonym for the word Happy?",
    back: "Joyful"
  },
  {
    front: "What is a antonym for the word Old?",
    back: "Young"
  }
];

const FlashcardsModal = ({ isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcards-modal-overlay" onClick={onClose}>
      <div className="flashcards-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="flashcards-modal-close-btn" onClick={onClose}>✕</button>

        <div className="flashcards-container">
          <button className="flashcards-nav-arrow left" onClick={handlePrev}>&lt;</button>

          <div
            className={`flashcards-card ${flipped ? 'flipped' : ''}`}
            onClick={handleFlip}
          >
            <div className="flashcards-front">{cards[currentIndex].front}</div>
            <div className="flashcards-back">{cards[currentIndex].back}</div>
          </div>

          <button className="flashcards-nav-arrow right" onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardsModal;
