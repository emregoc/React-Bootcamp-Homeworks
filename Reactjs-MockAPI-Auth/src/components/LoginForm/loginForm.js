import React, { useState } from "react";
import Field from "../Field/field";
import Button from "../Button/button";
import "./index.css";
import SocialButton from "../SocialButton/socialButton";
import Google from "../../assets/icons/google-icon.svg";
import Facebook from "../../assets/icons/facebook-icon.svg";
import Github from "../../assets/icons/github-icon.svg";
import { Link } from "react-router-dom";

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = e => setEmail(e.target.value);
   const handleChangePassword = e => setPassword(e.target.value);

    const googleStyle = {
      backgroundImage: `url( ${Google}`,
    };
    const facebookStyle = {
      backgroundImage: `url( ${Facebook}`,
    };
    const githubStyle = {
      backgroundImage: `url( ${Github}`,
    };
    return (
      <div className="login-content">
        <div className="login-form">
          <span className="login-form__title">Giriş</span>
          <Field 
            name="email" 
            label="Email" 
            type="text" 
            placeholder="username@gmail.com" 
            handleChangeEmail={handleChangeEmail}
          />

          <Field
            name="password"
            label="Şifre"
            type="password"
            handleChangePassword={handleChangePassword}
            placeholder="Şifre"
            labelBottom="Şifremi Unuttum?"
          />

          <Button buttonFormName="login" email={email} password={password} />

          <p className="login__or">ya da </p>
          <div className="login__social-btn">
            <SocialButton buttonStyle={googleStyle} />
            <SocialButton buttonStyle={githubStyle} />
            <SocialButton buttonStyle={facebookStyle} />
          </div>
          <div className="login__footer">
            <p className="login__dont">Hesabınız yok mu?</p>
            <Link className="login__register" to={"/register"}>
              <p>Ücretsiz Kaydolun.</p>
            </Link>
          </div>
        </div>
        <div className="login__image">
          <div className="login__login-image"></div>
        </div>
      </div>
    );

}
