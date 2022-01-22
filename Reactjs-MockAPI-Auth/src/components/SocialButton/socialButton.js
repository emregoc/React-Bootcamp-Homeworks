import React, { Component } from "react";
import "./index.css";
export default function SocialButton(props) {
  
    const { buttonStyle } = props;
    return (
      <div className="form-social">
        <div className="social-button" style={buttonStyle}></div>
      </div>
    );
}
