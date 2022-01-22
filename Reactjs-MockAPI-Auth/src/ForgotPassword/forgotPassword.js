import React, { Component } from "react";
import "./index.css";
import ForgotForm from "../components/ForgotForm/forgotForm";
export default function ForgotPassword() {
 
    return (
      <div className="forgot-password">
        <div className="forgot-password__page">
          <div className="forgot-password__back">
            <div className="forgot-password__forgot-form">
              <ForgotForm />
            </div>
          </div>
        </div>
      </div>
    );
}
