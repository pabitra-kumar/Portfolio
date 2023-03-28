import React from 'react'

import "./FooterStyles.css"

import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome size={20} style={{ color:"#fff" , marginRight: "2rem" }} />
              <div>
                <p>Berhampur,</p>
                <p>Odisha, India</p>
              </div>
            </div>
            <div className="phone">
              <h4>
                <FaPhone size={20} style={{ color:"#fff" , marginRight: "2rem" }} />
                <Link to="tel:+917790010167"> +91 77900 10167 </Link> 
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk size={20} style={{ color:"#fff" , marginRight: "2rem" }} />
                <Link to="mailto:pabitrakumarbebartta@gmail.com"> pabitrakumarbebartta@gmail.com </Link> 
              </h4>
            </div>
          </div>
          <div className="right">
            <h4>Have a Nice day!</h4>
            <p>
            "Endure with grace, tears have no place - keep trying with a smile on your face."
            </p>
            <div className="social">
            <Link to="https://www.linkedin.com/in/pabitra-kumar/"> <FaLinkedin size={30} style={{ color:"#fff" , marginRight: "1rem" }} /> </Link>
            <Link to="https://github.com/pabitra-kumar"> <FaGithub size={30} style={{ color:"#fff" , marginRight: "1rem" }} /> </Link>
            <Link to="https://www.instagram.com/pabitra_kumar00/"> <FaInstagram size={30} style={{ color:"#fff" , marginRight: "1rem" }} /> </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
