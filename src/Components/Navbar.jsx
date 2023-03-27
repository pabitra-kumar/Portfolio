import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarStyles.css"
export const Navbar = () => {
  return (
    <div className='Header'>
        <h1>
            <Link to="/">
                Portfolio.
            </Link>
        </h1>
        <ul className='nav-menu'>
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
    </div>
  )
}
