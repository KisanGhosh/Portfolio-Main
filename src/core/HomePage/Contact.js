import React from 'react'
import "../../css/Contact.css"
import { AiOutlineEnvironment } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Contact = () => {
    return (
      <div className="contact" id="contact">
        <div className="container">
          <div className="contact-left-side">
            <form>
              <h1>Let's work together!</h1>
              <p>
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
              <div className="contact-input-section">
                <input
                  type="text"
                  className="input-field"
                  placeholder="First name"
                />
                <input
                  type="text"
                  className="input-field"
                  placeholder="Last name"
                />
                <input
                  type="email"
                  className="input-field"
                  placeholder="Email address"
                />
                <input
                  type="text"
                  className="input-field"
                  placeholder="Phone number"
                />
                <select>
                  <option value="Choose Service">Choose Service</option>
                  <option value="Branding Design">Branding Design</option>
                  <option value="Web Design">Web Design</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="App Design">App Design</option>
                </select>
                <textarea className="textarea" placeholder="Message"></textarea>
              </div>
              <div className="btn-contact">
                <button className="contact-btn">Send Message</button>
              </div>
            </form>
          </div>
          <div className="contact-right-side">
            <div className="details-right-side">
              <div className="icon-box">
                <BiPhoneCall />
              </div>
              <div className="text-box">
                <p>Phone</p>
                <h3>+91 9064347675</h3>
              </div>
            </div>
            <div className="details-right-side">
              <div className="icon-box">
                <BsFillEnvelopeFill />
              </div>
              <div className="text-box">
                <p>Email</p>
                <h3>ghoshkisanit@gmail.com</h3>
              </div>
            </div>
            <div className="details-right-side">
              <div className="icon-box">
                <AiOutlineEnvironment />
              </div>
              <div className="text-box">
                <p>Address</p>
                <h3>
                  Purulia, West Bengal, 723146
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact
