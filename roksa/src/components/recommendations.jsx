import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import './recommendations.css';
import { Link } from 'react-router-dom';
import Header from "../components/header";
import bgImageRecommendations from "../assets/stats/fon.png";

const Recommendations = () => (
  <div className="recommendations-page">
    <img src={bgImageRecommendations} alt="Background" className="profile-bg-image2" /> {/* 🆕 */}
    <Header />
    <CategoryGrid title="Фільми" />
    <CategoryGrid title="Серіали" />
    <CategoryGrid title="Книги" />
  </div>
);

export default Recommendations;