import React from 'react'

import "./AboutContactStyles.css"

import mysql from "../assets/mysql.svg"
import java from "../assets/java.png"
import nitr from "../assets/nitr.jpg"
import ssvm from "../assets/ssvm.jpg"
import { FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap } from "react-icons/fa"

import { SiTailwindcss, SiPhp } from "react-icons/si"

export const AboutContact = () => {
  return (
    <div className="profile-container">
      <div className='about-container'>
        <div className="about-section who-am-i">
          <div className="about-heading">
            <h1>Who am I ?</h1>
          </div>
          <div className="description">
            <p>
              I'am a full stack web Devloper and eagered to learn more.
            </p>
          </div>
        </div>
        <div className="about-section skill">
          <div className="about-heading">
            <h1>Skills</h1>
            <hr />
          </div>
          <div className=" tech-stacks">
            <FaHtml5 size={75} style={{ color: "#e34c26" }} />
            <FaCss3 size={75} style={{ color: "#264de4" }} />
            <FaJs size={75} style={{ color: "#f0db4f" }} />
            <FaReact size={75} style={{ color: "#7cc5d9" }} />
            <SiPhp size={75} style={{ color: "#8993be" }} />
            <img src={mysql} alt="mysql-logo" />
            <img src={java} alt="java-logo" />
            <SiTailwindcss size={75} style={{ color: "#3490dc" }} />
            <FaBootstrap size={75} style={{ color: "#563d7c" }} />
          </div>
        </div>
        <div className="about-section education">
          <div className="about-heading">
            <h1>Education</h1>
            <hr />
          </div>
          <div className="information">
            <div className="info">
              <div className="image">
                <img src={nitr} alt="nitr" />
              </div>
              <div className="info-data">
                <h2>National Institute Of Technology Rourkela</h2>
                <h3>B.Tech | Chemical Engineering</h3>
              </div>
            </div>
            <div className="info">
              <div className="image">
                <img src={ssvm} alt="nitr" />
              </div>
              <div className="info-data">
                <h2>Saraswati Sishu Vidya Mandir , Neelakantha Nagar , Berhampur</h2>
                <h3>12th | Percentage: 93%</h3>
              </div>
            </div>
            <div className="info">
              <div className="image">
                <img src={ssvm} alt="nitr" />
              </div>
              <div className="info-data">
                <h2>Saraswati Sishu Vidya Mandir , Neelakantha Nagar , Berhampur</h2>
                <h3>10th | Percentage: 91.16%</h3>
              </div>
            </div></div>

        </div>
        <div className="about-section Achievements-container">
          <div className="about-heading">
            <h1>Achievements</h1>
            <hr />
          </div>
          <div className="Achievements">
            <ul>
              <li>
                <p>Maximum ratting of 1748 in CodeChef</p>
              </li>
              <li>
                <p>Secured Rank 219 at "June Lunchtime 2022 Division 3" contest of codechef</p>
              </li>
              
              <li>
                <p>Secured Rank 157 at "February Long 2022 - II, Division 3" contest of codechef</p>
              </li>
            </ul>

          </div>
        </div>
        {/* <div className="about-section cirtificate-container">
          <div className="about-heading">
            <h1>Cirtificates</h1>
            <hr />
          </div>
          <div className="cirtificates">

          </div>
        </div> */}
      </div>
    </div>
  )
}
