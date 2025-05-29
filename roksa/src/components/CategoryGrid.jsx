import React from 'react';
import './CategoryGrid.css'; // обов'язково

const CategoryGrid = ({ title }) => (
  <div className="category-container">
    <h2 className="category-title">{title}</h2>
    <div className="category-grid">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="category-card"></div>
      ))}
    </div>
  </div>
);

export default CategoryGrid;
