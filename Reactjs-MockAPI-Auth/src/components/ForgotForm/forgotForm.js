import React, { Component } from "react";
import Field from "../Field/field";
import Button from "../Button/button";
import "./index.css";
export default function ForgotForm() {

    return (
      <div className="forgot-password-content">
        <div className="forgot-password-form">
          <span className="forgot-password-form__title">Şifremi Unuttum</span>
          <Field label="Email" type="text" placeholder="username@gmail.com" />
          <Button buttonName="Şifre Gönder" />
        </div>
        <div className="forgot-password__image">
          <div className="forgot-password__forgot-image"></div>
        </div>
      </div>
    );
  
}
