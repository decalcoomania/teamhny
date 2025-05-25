import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/games" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
