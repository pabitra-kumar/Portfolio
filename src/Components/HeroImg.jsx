import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import profile from "../assets/profile.png"
import cv from "../assets/Pabitra_Kumar_Bebartta_Resume.pdf"
import { Link } from 'react-router-dom'
export const HeroImg = () => {
  return (
    <div className='h-full w-full'>
      <div className="w-full h-[100vh] relative">
        <img src={IntroImg} alt="IntroImg" className="w-full h-full bg-cover bg-center object-cover" />
      </div>
      <div className='w-full h-full absolute top-0 left-0 bg-[#000] opacity-[0.8]'></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] text-center">
        <div className=" h-[190px] md:h-[250px] mb-[10px] flex justify-center">
          <img src={profile} alt="profile-cleanBG" className='h-full rounded-[100%] font-extrabold' />
        </div>
        <p className='text-[1.4rem] font-normal uppercase'>Hi, I'M PABITRA KUMAR BEBARTTA</p>
        <h1 className='md:text-[4rem] pt-[0.6rem] pb-[1.5rem] px-0 text-[3rem] font-semibold'> Web Devloper.</h1>
        <div>
          <form method="get" action={cv}>
            <button type="submit" className='btn my-[1rem] mx-[0.2rem]' target="_blank" >Download CV</button>
            <Link to="/Contact" className='btn btn-light my-[1rem] mx-[0.2rem]'>Contact</Link>
          </form>
          
        </div>
      </div>
    </div>
  )
}
