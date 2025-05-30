import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Hero from "./components/Hero";
import Profile from "./components/profile";
import Languages from "./components/languages";
import Contacts from "./components/contacts";
import Recommendations from "./components/recommendations";
import Games from "./components/games";
import Login from "./components/Login";
import Register from "./components/Register";
import Test from "./components/Test";
import Results from "./components/Results";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/games" element={<Games />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/test"
            element={isLoggedIn ? <Test /> : <Navigate to="/login" />}
          />
          <Route
            path="/results"
            element={isLoggedIn ? <Results /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;