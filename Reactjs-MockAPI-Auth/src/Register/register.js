import React, { Component } from "react";
import "./index.css";
import RegisterForm from "../components/RegisterForm/registerForm";
export default function Index(){

    return (
      <div className="register">
        <div className="register__page">
          <div className="register__back">
            <div className="register__register-form">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    );
  
}
