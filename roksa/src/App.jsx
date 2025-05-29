import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Hero from "./components/Hero";
import Profile from "./components/profile";
import Languages from "./components/languages";
import Contacts from "./components/contacts";
import Recommendations from "./components/recommendations";
import Games from "./components/games";
import Login from "./components/Login";         // 🆕
import Register from "./components/Register";   // 🆕

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ⛔ чи увійшов

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/games" element={<Games />} />

          {/* 🛡 захищений маршрут */}
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />

          {/* 🆕 нові маршрути */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
