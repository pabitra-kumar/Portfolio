import React from 'react'

import mysql from "../assets/mysql.svg"
import java from "../assets/java.png"
import mongoDB from "../assets/MongoDB.avif"
import nitr from "../assets/nitr.jpg"
import ssvm from "../assets/ssvm.jpg"
import { FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap, FaNodeJs } from "react-icons/fa"

import { SiTailwindcss, SiPhp, SiExpress} from "react-icons/si"

export const AboutContact = () => {
  return (
    <div className="w-full">
      <div className=' w-fit flex flex-col gap-[50px] m-auto'>
        <div className="flex flex-col justify-center items-center gap-[10px] who-am-i">
          <div className="about-heading">
            <h1 className='md:text-[2.4rem] text-[2rem] font-bold'>Who am I ?</h1>
          </div>
          <div className="description">
            <p>
              I'am a full stack web Devloper and eager to learn more.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] about-section skill">
          <div className="about-heading">
            <h1 className='md:text-[2.4rem] text-[2rem] font-bold'>Skills</h1>
            <hr />
          </div>
          <div className=" tech-stacks flex flex-wrap">
            <FaHtml5 size={75} style={{ color: "#e34c26" }} />
            <FaCss3 size={75} style={{ color: "#264de4" }} />
            <FaJs size={75} style={{ color: "#f0db4f" }} />
            <FaReact size={75} style={{ color: "#7cc5d9" }} />
            <FaNodeJs size={75} style={{ color: "#3c873a" }} />
            <SiExpress size={75} style={{ color: "#fff" }} />
            <img className='w-[75px]' src={mongoDB} alt="MongoDB-logo" />
            <SiPhp size={75} style={{ color: "#8993be" }} />
            <img className='w-[75px]' src={mysql} alt="mysql-logo" />
            <img className='w-[75px]' src={java} alt="java-logo" />
            <SiTailwindcss size={75} style={{ color: "#3490dc" }} />
            <FaBootstrap size={75} style={{ color: "#563d7c" }} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] about-section education">
          <div className="about-heading">
            <h1 className='md:text-[2.4rem] text-[2rem] font-bold'>Education</h1>
            <hr />
          </div>
          <div className="information flex flex-col w-fit items-start">
            <div className="info flex flex-wrap items-center justify-center mb-[10px]">
              <div className="image h-[190px] w-[277px]">
                <img className='w-full h-full rounded-[1vw]' src={nitr} alt="nitr" />
              </div>
              <div className="info-data ml-[10px] w-fit max-w-[calc(100%-10px)]">
                <h2 className='text-[#fff]'>National Institute Of Technology Rourkela</h2>
                <h3 className='text-[#fff]'>B.Tech | Chemical Engineering</h3>
              </div>
            </div>
            <div className="info flex flex-wrap items-center justify-center mb-[10px]">
              <div className="image h-[190px] w-[277px]">
                <img className='w-full h-full rounded-[1vw]' src={ssvm} alt="nitr" />
              </div>
              <div className="info-data ml-[10px] w-fit max-w-[calc(100%-10px)]">
                <h2 className='text-[#fff]'>Saraswati Sishu Vidya Mandir , Neelakantha Nagar , Berhampur</h2>
                <h3 className='text-[#fff]'>12th | Percentage: 93%</h3>
              </div>
            </div>
            <div className="info flex flex-wrap items-center justify-center mb-[10px]">
              <div className="image h-[190px] w-[277px]">
                <img className='w-full h-full rounded-[1vw]' src={ssvm} alt="nitr" />
              </div>
              <div className="info-data ml-[10px] w-fit max-w-[calc(100%-10px)]">
                <h2 className='text-[#fff]'>Saraswati Sishu Vidya Mandir , Neelakantha Nagar , Berhampur</h2>
                <h3 className='text-[#fff]'>10th | Percentage: 91.16%</h3>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col justify-center items-center gap-[10px] about-section Achievements-container">
          <div className="about-heading">
            <h1 className='md:text-[2.4rem] text-[2rem] font-bold'>Achievements</h1>
            <hr />
          </div>
          <div className="Achievements">
            <ul className='text-[#fff] list-disc'>
              <li className='mb-[10px]'>
                <p>Maximum ratting of 1748 in CodeChef</p>
              </li>
              <li className='mb-[10px]'>
                <p>Secured Rank 219 at "June Lunchtime 2022 Division 3" contest of codechef</p>
              </li>

              <li className='mb-[10px]'>
                <p>Secured Rank 157 at "February Long 2022 - II, Division 3" contest of codechef</p>
              </li>
            </ul>

          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-[10px] about-section cirtificate-container">
          <div className="about-heading">
            <h1 className='md:text-[2.4rem] text-[2rem] font-bold'>Cirtificates</h1>
            <hr />
          </div>
          <div className="cirtificates">

          </div>
        </div> */}
      </div>
    </div>
  )
}
