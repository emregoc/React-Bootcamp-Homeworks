import React, { Component } from "react";
import "./index.css";
import LandingImg from "../assets/img/landing.svg";
import { Link } from "react-router-dom";

export default function Landing() {
 
    return (
      <div className="landing">
        <div className="landing__left">
          <span className="landing__title">Hello 👋</span>
          <div className="landing__context">
            <span className="landing__hope">
              I hope everyone is safe and sound. I designed different type of
              lending pages,application. it can help others to develop more
              ideas from this. I keep it simple and minimal. It can also help
              you find different options in exploring and improving your skills.
            </span>
            <span className="landing__support">
              I am available for new projects. I hope you show me your support
              😄
            </span>
            <span className="landing__luck">I wish you luck,</span>
            <span className="landing__drax">Drax❤️ </span>
          </div>
          <div className="landing__left-bottom">
            <span className="landing__arrow">&darr;</span>
            <Link to={"/login"} className="landing__btn">
              <button className="landing__btn">Let's started</button>
            </Link>
          </div>
        </div>
        <div className="landing__right">
          <img src={LandingImg} alt="none" className="landing__img" />
        </div>
      </div>
    );

}
