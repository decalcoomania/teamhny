// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Profile from "./components/profile";
import Languages from "./components/languages";
import Contacts from "./components/contacts";
import Recommendations from "./components/recommendations";
import Games from "./components/games";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;