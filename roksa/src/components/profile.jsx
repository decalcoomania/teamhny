import React, { useState, useEffect } from "react";
import Header from "../components/header";
import bgImage2 from "../assets/stats/fon2.png";
import bgImage3 from "../assets/stats/fon3.png";
import changePhotoButton from "../assets/stats/changephoto.png";
import extraImage from "../assets/stats/extra-image.png"; // заміни на свій файл

import defaultAvatar from "../assets/stats/defaultphoto.png";
import avatar1 from "../assets/stats/1.png";
import avatar2 from "../assets/stats/2.png";
import avatar3 from "../assets/stats/3.png";
import b1 from "../assets/stats/b1.png";
import additionalButton from "../assets/stats/your-button.png";
import "./profile.css";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(defaultAvatar);
  const avatars = [avatar1, avatar2, avatar3];

  useEffect(() => {
    const savedAvatar = localStorage.getItem("selectedAvatar");
    if (savedAvatar) {
      setCurrentAvatar(savedAvatar);
    }
  }, []);

  const handleAvatarChange = (newAvatar) => {
    setCurrentAvatar(newAvatar);
    localStorage.setItem("selectedAvatar", newAvatar);
    setShowModal(false);
  };

  const handleButtonClick = () => {
    console.log("Кнопка під аватаркою натиснута!");
  };

  const handleAdditionalButtonClick = () => {
    console.log("Нова кнопка натиснута!");
  };

  return (
    <div className="profile-page">
      <img src={bgImage2} alt="Background" className="profile-bg-image2" />
      <img src={bgImage3} alt="Overlay" className="profile-bg-image3" />
      <Header />

      <div className="avatar-container">
        <img src={currentAvatar} alt="Аватар" className="user-avatar" />
        <div className="change-photo-btn" onClick={() => setShowModal(true)}>
          <img src={changePhotoButton} alt="Змінити фото" />
        </div>
      </div>

    

      {/* Додаткове зображення + кнопка */}
      <div className="additional-image-block">
        <img
          src={b1}
          alt="Додаткова картинка"
          className="additional-image"
        />
        <div className="under-additional-button" onClick={handleAdditionalButtonClick}>
          <img src={additionalButton} alt="Нова дія" />
        </div>
      </div>

        {/* Додаткова просто картинка */}
        <div className="extra-image-block">
        <img src={extraImage} alt="Додаткова ілюстрація" className="extra-image" />
        </div>
<div className="user-info">
        <div><strong>Привіт, Володимир Побережець!</strong></div>
        <div><strong>E-mail:</strong> potuzhni123@gmail.com</div>
        <div><strong>Дата народження:</strong> 04.04.2006</div>
    </div>
      {/* Модальне вікно */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Оберіть новий аватар</h3>
            <div className="avatars-grid">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Аватар ${index + 1}`}
                  className={`avatar-option ${
                    currentAvatar === avatar ? "selected" : ""
                  }`}
                  onClick={() => handleAvatarChange(avatar)}
                />
              ))}
            </div>
            <button className="close-modal-btn" onClick={() => setShowModal(false)}>
              Скасувати
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
