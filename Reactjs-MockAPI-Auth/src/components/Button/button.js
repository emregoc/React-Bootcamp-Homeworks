/* eslint-disable no-useless-constructor */
import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Button (props) {

  const { name, email, password, buttonFormName } = props; 
  
  function changeState(){
    if(buttonFormName == 'register'){
      axios.post(`https://61c49fe3f1af4a0017d996dd.mockapi.io/Register-Login`, {
          name,
          email,
          password,
        }).then(() => {
            alert('Kayıt başarılı')
        })
    }
    if(buttonFormName == 'login'){
      var count = 0;
      axios.get(`https://61c49fe3f1af4a0017d996dd.mockapi.io/Register-Login`, {
        }).then((response) => {
          console.log(response)
          const result = response.data.map(response => {
              if(response.email === email && response.password === password){
                 return 1;
              }
          });
          console.log(result);
            for (let index = 0; index < result.length; index++) {
              if(result[index] === 1)
              {
                 alert('giriş başarılı');
                 count++;
                 break;
              }
            }
            if(count === 0){
              alert('giriş başarısız')
            }
        })
      }
  }

    return (
      <div className="form-btn">
        <button
          onClick={() => changeState()}
          className="form-btn__button">{buttonFormName}
        </button>
      </div>
    );
}
