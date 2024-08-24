import React from 'react'
import './cardBanner.css'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";

const CardBanner = () => {
  return (
    <div className='card-banner'>
      <Link to='/'>Home </Link> <FaChevronRight /> <p>Card</p>
    </div>
  )
}

export default CardBanner
