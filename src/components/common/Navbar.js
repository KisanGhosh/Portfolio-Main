import React,{useState} from 'react'
import logo from "../../assets/Logos/kisan-logo2.png"
import {Link} from "react-router-dom";
import './Common.css';
import { IoClose, IoMenu } from "react-icons/io5";
import { HashLink } from "react-router-hash-link"; 

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };

  return (
      <div className=" navbar">
        <nav className="nav ">
            <div className="logo-section">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" width={65} height={60} loading="lazy" /> 
                    </Link>       
                </div>
                <p>ghoshkisanit@gmail.com</p>
            </div>
        

              <div className={`nav-menu ${showMenu ? "show-menu" : " "}`} id="nav-menu">
            <ul className="nav-list">
                  <li className="nav-item"><HashLink to="/#services" className="nav-link" onClick={closeMenuOnMobile}>Services</HashLink></li>
                  <li className="nav-item"><HashLink to="/#works" className="nav-link" onClick={closeMenuOnMobile}>Works</HashLink></li>
                  <li className="nav-item"><HashLink to="/#resume" className="nav-link" onClick={closeMenuOnMobile}>Resume</HashLink></li>
                  <li className="nav-item"><HashLink to="/#skills" className="nav-link" onClick={closeMenuOnMobile}>Skills</HashLink></li>
                  {/* <li className="nav-item"><HashLink to="/#testimonials" className="nav-link" onClick={closeMenuOnMobile}>Testimonials</HashLink></li> */}
                  <li className="nav-item"><HashLink to="/#contact" className="nav-link" onClick={closeMenuOnMobile}>Contact</HashLink></li>
            </ul>
            <div className="nav-close" id="nav-close" onClick={toggleMenu}>
                <IoClose />          
            </div>  
            </div>

            <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
                <IoMenu />      
            </div>  

          
          <div className="btn-navbar">
              <button className="navbar-btn">Hire Me!</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
