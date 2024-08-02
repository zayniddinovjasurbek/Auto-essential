import React from 'react';
import mainImg from './Rectangle 70.png'
import "./main.css"

const Main = () => {
  return (
    <section className='home'>
      <div className="text-content">
        <h1><span className="highlight">Auto</span> Spare Parts</h1>
        <p>All Major Brands Available</p>
        <button className="shop-button">Shop Now</button>
      </div>
      <div className="image-content">
        <img src={mainImg} alt="main.img" />
      </div>
    </section>
  );
}

export default Main;
