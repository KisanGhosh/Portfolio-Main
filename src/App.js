import React from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import HeroSection from './core/HomePage/HeroSection';
import Services from './core/HomePage/Services';
import Resume from './core/HomePage/Resume'
import Works from './core/HomePage/Works'
import Skills from './core/HomePage/Skills'
import Contact from './core/HomePage/Contact';


const App = () => {
  return (
    <div id="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/hero" exact element={<HeroSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/works" element={<Works />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

