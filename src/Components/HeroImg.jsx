import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from "../assets/intro-bg.jpg"
import profile from "../assets/profile.png"
import { Link } from 'react-router-dom'
export const HeroImg = () => {
  return (
    <div className='hero'>
        <div className="mask">
          <img src={IntroImg} alt="IntroImg" className="intro-img" />
        </div>
        <div className="content">
        <div className="profile-photo">
          <img src={profile} alt="profile-cleanBG" />
        </div>
          <p>Hi, I'M PABITRA KUMAR BEBARTTA</p>
          <h1> Web Devloper.</h1>
          <div>
            <Link to="/Project" className='btn'>Projects</Link>
            <Link to="/Contact" className='btn btn-light'>Contact</Link>
          </div>
        </div>
    </div>
  )
}
