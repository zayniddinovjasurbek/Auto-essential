import React from 'react';
import myaccaunt from './Rectangle 1.png'
import auto_essential from './Rectangle 74.png'

const my_accaunt_banner = () => {
  return (
    <div className='my-accaunt-banner'>
      <div className="my-accaunt-img">
        <img src={myaccaunt} alt="MyAccaunt" /> 
      </div>   
      <div className='my-accaunt-text'>
        <img src={auto_essential} alt="my-accaunt-bannr-logo" />   
        <h1>My-Accaunt</h1>
      </div>
    </div>
  );
}

export default my_accaunt_banner;
