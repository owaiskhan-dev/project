import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<HeroSection />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects/>} />
          <Route exact path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </Router>
      
      
     </div>
  );
}

export default App;