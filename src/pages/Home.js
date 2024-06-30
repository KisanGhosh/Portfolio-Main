import React from 'react'
import HeroSection from '../core/HomePage/HeroSection';
import Services from '../core/HomePage/Services';
import Works from '../core/HomePage/Works';
import Resume from '../core/HomePage/Resume';
import Skills from '../core/HomePage/Skills';
import Contact from '../core/HomePage/Contact';


const Home = () => {
  return (
    <div className = "Home"> 
      <HeroSection />
      <Services />
      <Works />
      <Resume />
      <Skills />
      <Contact />
    </div>
  )
}
 export default Home
