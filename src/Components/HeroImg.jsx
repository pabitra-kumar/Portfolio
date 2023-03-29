import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from "../assets/intro-bg.jpg"
// import profile from "../assets/profile.png"
import cv from "../assets/Pabitra_Kumar_Bebartta_Resume.pdf"
import { Link } from 'react-router-dom'
export const HeroImg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img src={IntroImg} alt="IntroImg" className="intro-img" />
      </div>
      <div className="content">
        {/* <div className="profile-photo">
          <img src={profile} alt="profile-cleanBG" />
        </div> */}
        <p>Hi, I'M PABITRA KUMAR BEBARTTA</p>
        <h1> Web Devloper.</h1>
        <div>
          <form method="get" action={cv}>
            <button type="submit" className='btn'>Download CV</button>
            <Link to="/Contact" className='btn btn-light'>Contact</Link>
          </form>
          
        </div>
      </div>
    </div>
  )
}
