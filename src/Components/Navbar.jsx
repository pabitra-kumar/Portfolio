import React from 'react'

import { Link } from 'react-router-dom'
import "./NavbarStyles.css"

import {FaBars, FaTimes} from "react-icons/fa"

import { useState } from 'react'

export const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className='header'>
        <h1>
            <Link to="/">
                Portfolio.
            </Link>
        </h1>
        <ul className={click ? "nav-menu active" : 'nav-menu'}>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/About"> About </Link>
            </li>
            <li>
                <Link to="/Project"> Project </Link>
            </li>
            <li>
                <Link to="/Contact"> Contact </Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={ { color: "#fff" }} />)
            : (
                <FaBars size={20} style={ { color: "#fff" }} />
            )}
        </div>
    </div>
  )
}
