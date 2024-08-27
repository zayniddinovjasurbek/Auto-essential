import React from 'react'     
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import './contact_blog.css'

const Contact_blog = () => {
  return (
    <div>
      <div className="contact">

        <div className="contact-header">
          <h1>Get In Touch With Us</h1>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className="contact-container">

          <div id="contact-info">

            <div id="address" className='content'>
              <FaLocationDot />
              <div id="content-text">
                <h3 style={{fontWeight: "bolder"}}>Address</h3>
                <p>Lorem ipum ....</p>
              </div>
            </div>

            <div id="phone" className='content'>
              <IoCall />
              <div id="content-text">
                <h3 style={{fontWeight: "bolder"}}>Phone</h3>
                <p>Lorem ipum ....</p>
              </div>
            </div>

          </div>

          <form className='contact-form'>

            <div className="form-group">
              <label htmlFor="firstname">Your name</label>
              <input type="text" placeholder='Abs' />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" placeholder='Abc@def.com' />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" placeholder='This is an optional' />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder='Hi! i’d like to ask about'></textarea>
            </div>

            <button>Submit</button>

          </form>
        </div>

      </div>
      </div>

  );
};

export default Contact_blog
