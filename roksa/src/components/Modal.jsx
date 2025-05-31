import React from 'react';
import './Modal.css';
import shushyk from '../assets/stats/shushyk.png';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Скоро з’явиться</h2>
        <p>А поки що пригляньте за Шушиком</p>
        <img src={shushyk} alt="Шушик" className="modal-img" />
        <button className="modal-close-btn" onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};

export default Modal;
