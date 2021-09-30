  
'use strict';

import Validations from "../../checking/validations";
import Axios from 'axios';
import axios from "axios";

export default class Button {
  constructor() {
    this.name = 'button';
    this.button = document.querySelector('.submit-button');
    this.radioChecking = document.querySelector('#radioChecking');
    this.form = document.querySelector('.payment-form');
    this.formData = new FormData(this.form);
  }
  init (){
    this.button.addEventListener("click", (event)=>{
      event.preventDefault();
      console.log('button init', this.button)    
      if(this.radioChecking.checked){
        // run checking validations 
        console.log("run checking validations");
        const chekingValidations = new Validations();
        if(chekingValidations.init()){
          axios({
            method: "post",
            url: "/",
            data: this.formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
        } else{

          return false
        }
        
      }else{
        console.log("run debit validations")
      }
  }) 
  }
}


