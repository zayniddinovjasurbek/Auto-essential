import React from "react";
import Login from "../login/Login";
import "./my_accaunt_banner.css";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const my_accaunt_banner = () => {
  return (
    <>
      <div className="my-accaunt-banner">
        <div className="my-accaunt-text">
          <h1>My-Accaunt</h1>
          <div className="path">
            <div className="my-accaunt-ban">
              {" "}
              <Link
                to="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bolder",
                }}
              >
                Home
              </Link>{" "}
              <FaAngleRight />
              <p>My Accaunt</p>
            </div>
          </div>
        </div>
      </div>
      <Login />
    </>
  );
};

export default my_accaunt_banner;
