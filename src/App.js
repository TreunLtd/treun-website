import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectManagementPage from './pages/ProjectManagementPage';
import WorksPage from './pages/WorksPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project-management" element={<ProjectManagementPage />} />
          <Route path="/works" element={<WorksPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;