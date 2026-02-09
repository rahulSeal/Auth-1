import React, { useState } from "react";
import "./hero.scss";

const Hero = ({logIn, signIn}) => {
  

  return (
    <nav>
      <div className="left">Try_Again!!!</div>
      <div className="right">
        <button className="login-btn" onClick={logIn}>
          Login
        </button>
        <button className="sign-btn" onClick={signIn}>
          Sign Up
        </button>
      </div>

      
    </nav>
  );
};

export default Hero;
