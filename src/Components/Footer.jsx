import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='w-full py-[2rem] px-0'>
      <div className="max-w-[1140px] m-auto grid md:grid-cols-2 gap-[40px] grid-cols-1">
        <div className="h-full max-w-full flex flex-col p-[1rem]">
          <div className="flex mb-[0.8rem] items-start">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p className=' text-[1.2rem] leading-[30px]'>Berhampur,</p>
              <p className=' text-[1.2rem] leading-[30px]'>Odisha, India</p>
            </div>
          </div>
          <div className="phone">
            <h4 className='text-[1.2rem] pb-[0.7rem] flex items-center'>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <Link to="tel:+917790010167"> +91 77900 10167 </Link>
            </h4>
          </div>
          <div className="email">
            <h4 className='text-[1.2rem] pb-[0.7rem] flex items-center'>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <Link to="mailto:pabitrakumarbebartta@gmail.com"> pabitrakumarbebartta@gmail.com </Link>
            </h4>
          </div>
        </div>
        <div className=" h-full max-w-full flex flex-col p-[1rem]">
          {/* <h4 className='text-[1.2rem] pb-[0.7rem]'>Have a Nice day!</h4> */}
          <p className=' text-[1.2rem]'>
            I am a self-motivated person who is willing to work hard and learn new things. I am a quick learner and a good team player. I am looking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge and intelligence in the growth of the organization.
          </p>
          <div className="social mt-[1rem] flex">
            <Link to="https://www.linkedin.com/in/pabitra-kumar/" target="_blank"> <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /> </Link>
            <Link to="https://github.com/pabitra-kumar" target="_blank"> <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /> </Link>
            <Link to="https://www.instagram.com/pabitra_kumar00/" target="_blank"> <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /> </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
