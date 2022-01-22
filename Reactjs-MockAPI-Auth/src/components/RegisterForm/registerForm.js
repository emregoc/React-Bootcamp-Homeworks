import React, { useState } from "react";
import Field from "../Field/field";
import Button from "../Button/button";
import "./index.css";

export default function RegisterForm() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   //const [data, setData] = useState('');

   //console.log(data);
   //const handleChange = e => setData(e.target.value);
   const handleChangeName = e => setName(e.target.value);
   const handleChangeEmail = e => setEmail(e.target.value);
   const handleChangePassword = e => setPassword(e.target.value);

    return (
      <div className="register-content">
        <div className="register-form">
          <span className="register-form__title">Kayıt Ol</span>
          <Field name="name" label="Ad Soyad" type="text" placeholder="Ad Soyad" 
                 setDataName={name} handleChangeName={handleChangeName}/>
          <Field name="email" label="Email" type="text" placeholder="username@gmail.com"
                 setDataEmail={email} handleChangeEmail={handleChangeEmail} />
          <Field name="password" label="Şifre" type="password" placeholder="Şifre" 
                 setDataPassword={password} handleChangePassword={handleChangePassword}/>
          <Field
            label="Şifre Tekrarı"
            type="password"
            placeholder="Şifre Tekrarı"
          />
          <Button buttonFormName="register" name={name} email={email} password={password}/>
        </div>
        <div className="register__image">
          <div className="register__register-image"></div>
        </div>
      </div>
    );
}
