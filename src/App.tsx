import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import AboutusPage from './pages/AboutusPage'

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          {/*<Route path="*" element={<NotFoundPage />} /> */}
          <Route path ="/about" element={<AboutusPage/>}/>
        </Routes>
    </Router>
  );
};

export default App;
