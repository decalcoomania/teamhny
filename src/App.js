import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feedback from './Feedback';
import Register from './Register'; // Імпортуємо новий компонент

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;