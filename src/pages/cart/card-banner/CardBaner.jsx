import React from 'react'
import './cardBanner.css'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa";
import CardBlog from '../card-blog/CardBlog';

const CardBanner = () => {
  return (
    <>
    <div className='card-banner'>
      <Link to='/' style={{color:'black', textDecoration:'none', fontWeight:"bolder" }} >Home </Link> <FaChevronRight /> <p>Card</p>
    </div>
    <CardBlog/>
    </>
  )
}

export default CardBanner