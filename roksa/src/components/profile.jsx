import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Header from "../components/header";
import bgImage2 from "../assets/stats/fon2.png";
import bgImage3 from "../assets/stats/fon3.png";
import changePhotoButton from "../assets/stats/changephoto.png";
import extraImage from "../assets/stats/extra-image.png";
import defaultAvatar from "../assets/stats/defaultphoto.png";
import avatar1 from "../assets/stats/1.png";
import avatar2 from "../assets/stats/2.png";
import avatar3 from "../assets/stats/3.png";
import b1 from "../assets/stats/b1.png";
import additionalButton from "../assets/stats/your-button.png";
import exitIcon from "../assets/stats/exit.png";
import "./profile.css";
import strike from '../assets/stats/strike.png'; // або з правильним шляхом
import serial1 from '../assets/stats/serial1.png';
import serial2 from '../assets/stats/serial2.png';
import serial3 from '../assets/stats/serial3.png';
import serial4 from '../assets/stats/serial4.png';
import profilebut1 from '../assets/stats/profilebut.png';
import profilebut2 from '../assets/stats/profilebut.png';
import profilebut3 from '../assets/stats/profilebut.png';

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState(defaultAvatar);
  const [userInfo, setUserInfo] = useState({
    name: "Ім’я користувача",
    email: "Email не знайдено"
  });

  const navigate = useNavigate();

  const avatars = [avatar1, avatar2, avatar3];

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserInfo({
        name: user.displayName || "Ім’я користувача",
        email: user.email || "Email не знайдено"
      });
    }

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

  const handleAdditionalButtonClick = () => {
    navigate("/test"); // Перехід до тесту
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Після виходу – на головну
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
  };
const handleClickButton1 = () => {
  console.log("Кнопка 1 натиснута");
};

const handleClickButton2 = () => {
  console.log("Кнопка 2 натиснута");
};

const handleClickButton3 = () => {
  console.log("Кнопка 3 натиснута");
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

      <div className="additional-image-block">
        <img src={b1} alt="Додаткова картинка" className="additional-image" />
        <div className="under-additional-button" onClick={handleAdditionalButtonClick}>
          <img src={additionalButton} alt="Пройти тест" />
        </div>
      </div>

      <div className="extra-image-block">
        <img src={extraImage} alt="Додаткова ілюстрація" className="extra-image" />
      </div>

      <div className="user-info">
        <div><strong>Привіт, {userInfo.name}!</strong></div>
        <div><strong>E-mail:</strong> {userInfo.email}</div>
        <div className="exit-button-container" onClick={handleLogout}>
          <img src={exitIcon} alt="Вийти" className="exit-icon" />
        </div>
      </div>
    
      <img src={strike} alt="Самостійна картинка" className="strike" />
      <div className="images-wrapper">
  <div className="image-row">
    <img src={serial1} alt="Картинка 1" className="standalone-image" />
    <img src={serial2} alt="Картинка 2" className="standalone-image" />
    <img src={serial3} alt="Картинка 3" className="standalone-image" />
  </div>

  <div className="image-row">
    <img src={serial4} alt="Картинка 4" className="standalone-image" />
    <img src={serial4} alt="Картинка 5" className="standalone-image" />
    <img src={serial4} alt="Картинка 6" className="standalone-image" />
  </div>
</div>
<div className="custom-buttons-wrapper">
  <div className="custom-button-container" onClick={handleClickButton1}>
    <img src={profilebut1} alt="Кнопка 1" className="custom-button-image" />
  </div>

  <div className="custom-button-container" onClick={handleClickButton2}>
    <img src={profilebut2} alt="Кнопка 2" className="custom-button-image" />
  </div>

  <div className="custom-button-container" onClick={handleClickButton3}>
    <img src={profilebut3} alt="Кнопка 3" className="custom-button-image" />
  </div>
</div>


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
                  className={`avatar-option ${currentAvatar === avatar ? "selected" : ""}`}
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