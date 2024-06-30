import React from 'react'
import heroImg from "../../assets/Images/pic.png"
import '../../css/HeroSection.css';
import { FaDownload,FaFacebook,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero" id="hero">
      <h1 className="hero-back-layer">HI</h1>
      <div className="hero-main">
        <div className="hero-left">
          <h2 className="hero-left-name">I am Kisan</h2>
          <h1 className="hero-left-role">
            Web Developer +
            <br />
            UX Designer
          </h1>
          <p className="hero-left-desc">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
          <div className="btn-section">
            <div className="btn-hero">
              <button>
                Download CV <FaDownload />
              </button>
            </div>
            <div className="icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaLinkedin className="icon" />
              <FaGithub className="icon" />
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-section">
            <img src={heroImg} alt="img" />
          </div>
        </div>
      </div>

      <div className="hero-details">
        <div className="experience-hero">
          <div className="number">14</div>
          <div className="text">
            <div>Years of</div>
            <div>Experience</div>
          </div>
        </div>
        <div className="project">
          <div className="number">50+</div>
          <div className="text">
            <div>Projects</div>
            <div>Completed</div>
          </div>
        </div>
        <div className="clients">
          <div className="number">1.5K</div>
          <div className="text">
            <div>Happy</div>
            <div>Clients</div>
          </div>
        </div>
        <div className="cl-experience">
          <div className="number">14</div>
          <div className="text">
            <div>Years of</div>
            <div>Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
