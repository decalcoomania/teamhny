import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./header";
import "./Results.css";

const Results = () => {
  const { state } = useLocation();
  const { level } = state || { level: "A1" };
  const navigate = useNavigate();

  return (
    <div className="results-page">
      <Header />
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Вітаємо!</h2>
          <p>Ваш рівень володіння англійською мовою - {level}</p>
          <button
            className="close-button"
            onClick={() => navigate("/")}
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;