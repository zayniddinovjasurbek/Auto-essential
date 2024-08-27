import React from 'react'
import './contact_banner.css'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
const Contact_banner = () => {
  return (
    <div className='contact-banner'>
        <div id='info'>
        <h1>Contact</h1>
        <div className='div'><Link to="/" className='link'>Home</Link> <FaAngleRight /> Contact </div>
        </div>
    </div>
  )
}

export default Contact_banner
