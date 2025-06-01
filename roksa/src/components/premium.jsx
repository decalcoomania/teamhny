import React from "react";
import { useNavigate } from "react-router-dom";
import "./premium.css";

import basicRate from "../assets/stats/Basic_rate.png";
import premiumRate from "../assets/stats/Premium_rate.png";
import hedgehogPremium from "../assets/stats/hedgehog_premium.png";
import logoImage from "../assets/stats/logo.png";

const Premium = () => {
  const navigate = useNavigate();

  const handleBasicPlanClick = () => {
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="premium-container">
      <div className="logo" onClick={handleLogoClick}>
        <img src={logoImage} alt="Логотип" />
      </div>
      <h1 className="premium-title">Обери свій план</h1>
      <div className="plans-container">
        <div className="plan-wrapper">
          <img src={basicRate} alt="Basic Rate" className="plan-image" />
          <button
            className="plan-button basic-plan-button"
            onClick={handleBasicPlanClick}
          >
            Поточний план
          </button>
        </div>
        <div className="plan-wrapper">
          <img src={premiumRate} alt="Premium Rate" className="plan-image" />
          <button className="plan-button premium-plan-button">
            Оновити план
          </button>
          <img src={hedgehogPremium} alt="Hedgehog Premium" className="hedgehog-image" />
        </div>
      </div>
    </div>
  );
};

export default Premium;