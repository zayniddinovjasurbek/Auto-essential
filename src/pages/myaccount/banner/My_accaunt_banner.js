import React from 'react';
import Login from '../login/Login';
import './my_accaunt_banner.css'
import {Link} from 'react-router-dom'

const my_accaunt_banner = () => {
  return (
    <>
    <div className='my-accaunt-banner'> 
       <div className='my-accaunt-text'>
        <h1>My-Accaunt</h1>
        <div className="path">
          <h2><Link to='/'>HOME</Link></h2>
          <p>My Accaunt</p>
        </div>
        
      </div>   
    </div>
    <Login />
    </>
  );
}

export default my_accaunt_banner;
