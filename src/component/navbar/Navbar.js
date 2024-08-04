import React from 'react';
import "./navbar.css"
import { Link } from "react-router-dom";

// images
import logo from './Rectangle 72.png'
// icons
import { FiUserCheck } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";



function Navbar  ()  {
  return (
<div className="main">
      <header className="nav">
        <div className="logo">
        <a href='#'> <img src={logo} alt="Logo" className="logo" /> </a>
        </div>
        <nav>
          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/shop">Shop</Link>
            </li>
        
            <li>
                <Link to="/about">About</Link>
            </li>

            <li>
                <Link to="/contact">Contact</Link>
            </li>

            <li>
                <Link to="/tools">Tools</Link>
            </li>

          </ul>
        </nav>
        <div className="icons">
         <Link to="/my_accaunt_banner"><FiUserCheck /></Link> 
         <Link to="/"><IoSearch /></Link> 
         <Link to="/"><IoMdHeartEmpty /></Link>
         <Link to="/"><MdOutlineShoppingCart /></Link>
        </div>
      </header>
    </div>
);
}

export default Navbar;