import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Field(props) {
 
    const { label, type, placeholder, labelBottom, handleChangeName, handleChangeEmail, 
      handleChangePassword, name} = props;
    
    function changeState(){
      if(name == 'name'){
        return handleChangeName;
      }
      if(name == 'email'){
        return handleChangeEmail;
      }
      if(name == 'password'){
        return handleChangePassword;
      }
    }

    return (
      <div className="field">
        <div className="field__text">{label}</div>
        <input
          className="field__input"
          type={type}
          placeholder={placeholder}
          onChange={changeState()} 
        />
        <Link className="field__text-bottom" to={"/forgot-password"}>
          <span>{labelBottom ? labelBottom : ""}</span>
        </Link>
      </div>
    );
}
