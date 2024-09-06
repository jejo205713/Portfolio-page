import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';  // Import the CSS file
import LoginPage from './LoginPage';
import PortfolioPage from './PortfolioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
