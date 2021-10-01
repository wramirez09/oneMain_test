
'use strict';

import Validations from "../../checking/validations";
import axios from "axios";

export default class Button {
  constructor() {
    this.name = 'button';
    this.button = document.querySelector('.submit-button');
    this.radioChecking = document.querySelector('#radioChecking');
    this.radioDebit = document.querySelector('#debitRadio');
    this.form = document.querySelector('.payment-form');
    this.formData = new FormData(this.form);
  }
  init() {

    this.button.addEventListener("click", (event) => {

      event.preventDefault();

      const validations = new Validations();

      if (this.radioChecking.checked) {

        // run checking account validations
        if (validations.checkingAccountValidations()) {
          alert('form valid and submitted');
          axios({
            method: "post",
            url: "/",
            data: this.formData,
            headers: { "Content-Type": "multipart/form-data" },
          })

        } else {

          console.log('form is not valid')
          return false
        }
         
      }

      else if (this.radioDebit.checked) {
        // run debit card validations
        if (validations.debitCardValidations()) {
          alert('form valid and submitted');
          axios({
            method: "post",
            url: "/",
            data: this.formData,
            headers: { "Content-Type": "multipart/form-data" },
          })
        }
        else{
          console.log('debit card validations failed')
        }
      }
    })
  }
}


