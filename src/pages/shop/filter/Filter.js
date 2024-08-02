import React from 'react'
import './filter.css'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
 import { AiOutlineAppstore } from "react-icons/ai";
 import { MdOutlineCalendarViewDay } from "react-icons/md"; 


const Filter = () => {
  return (
    <div className='Filter'>
      <div className='filterm'>
         <HiOutlineAdjustmentsHorizontal />
        <h4>Filter  </h4>
        <AiOutlineAppstore />
        <MdOutlineCalendarViewDay />  

        <h6>Showing 1–16 of 32 results</h6>
      </div>  

      <div className='sort'>
        <h4>Show</h4>
        <input type="number" placeholder='16' />
        <h4>Sotrted by</h4>
        <input type="text"  placeholder='defaut' className='defauld' />
      </div>
       
    </div>
  )
}

export default Filter
