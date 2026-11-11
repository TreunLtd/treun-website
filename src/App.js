import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectManagementPage from './pages/ProjectManagementPage';
import ConstructionPage from './pages/ConstructionPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AllProjectsPage from './pages/AllProjectsPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import './App.css';

// Old /services links (LinkedIn, Google, bookmarks) go to the new pages
function ServicesRedirect() {
  const to = window.location.hash === '#construction' ? '/construction' : '/project-management';
  return <Navigate to={to} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project-management" element={<ProjectManagementPage />} />
          <Route path="/construction" element={<ConstructionPage />} />
          <Route path="/services" element={<ServicesRedirect />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/all-projects" element={<AllProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
