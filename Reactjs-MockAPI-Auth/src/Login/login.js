import React, { Component } from "react";
import "./index.css";
import LoginForm from "../components/LoginForm/loginForm";
export default function Index() {

    return (
      <div className="login">
        <div className="login__page">
          <div className="login__back">
            <div className="login__login-form">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  
}
