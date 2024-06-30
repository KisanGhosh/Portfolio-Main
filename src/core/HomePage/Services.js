import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import '../../css/Services.css'


const Services = () => {
    return (
      <div className="services" id="services">
        <div className="heading-section">
          <h1 className="services-heading">My Quality Services</h1>
          <p className="services-para">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div> 
        <div className="services-content">
          <button className="btn">
            <div className="btn-content">
              <div className="btn-count">01</div>
              <div className="btn-topic">Web Design</div>
            </div>
            <div className="btn-desc">
              I provide expert web design services, creating custom, responsive,
                and visually stunning websites to enhance your online presence.
            </div>
            <div className="arr">
              <FaArrowRight />
            </div>
          </button>
          <button className="btn">
            <div className="btn-content">
              <div className="btn-count">02</div>
              <div className="btn-topic">UX/UI Design</div>
            </div>
            <div className="btn-desc">
              Expert UI/UX design service focused on creating intuitive,
              engaging, and seamless user experiences for digital products.
            </div>
            <div className="arr">
              <FaArrowRight />
            </div>
          </button>
          <button className="btn">
            <div className="btn-content">
              <div className="btn-count">03</div>
              <div className="btn-topic">Graphics Design</div>
            </div>
            <div className="btn-desc">
              Expert graphic design service delivering creative and impactful
              visual solutions for branding, marketing, and digital media.
            </div>
            <div className="arr">
              <FaArrowRight />
            </div>
          </button>
          <button className="btn">
            <div className="btn-content">
              <div className="btn-count">04</div>
              <div className="btn-topic">Portrait Drawing</div>
            </div>
            <div className="btn-desc">
              Specialized portrait drawing service offering personalized,
              hand-drawn artworks capturing the essence and likeness of
              individuals.
            </div>
            <div className="arr">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
    );
}

export default Services;
