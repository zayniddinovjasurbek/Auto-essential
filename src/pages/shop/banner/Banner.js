import React from 'react'
import './banner.css'
import banner from './Rectangle 1 (1).png'

import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div shop-banner>
        <div className='shop-back-img'>
            <img src={banner} alt="" />
        </div>
        <div className='shop-text-content' >
            <h1>SHOP</h1>
          <div className=''><h4><Link to='/' style={{color:'black', textDecoration:'none'}}>Home </Link> <FaAngleRight /> Shop</h4></div>  
        </div>
    </div>
  )
}

export default Banner
