
/**
 * checking account and debit simple validations
 */
export default class Validations {
    constructor(){
        this.accountNumberInput = document.querySelector("#account-number");
        this.routingNumberInput = document.querySelector("#routing-number");
        this.accountNumnberInput = document.querySelector("#bank-account-number");
        this.confirmNumnberInput = document.querySelector("#confirm-bank-account-number");
        //debit
        this.cardInput = document.querySelector("#card-number");
        this.cardNameInput = document.querySelector("#card-name");
        this.expDateInput = document.querySelector("#exp-date");
        this.cvvInput = document.querySelector("#cvv-input");
    }

    init(){

      this.checkingAccountValidations();
    
    }

    inputValidate(input){
        
        if(input.value === ""){
            input.nextElementSibling.style.color = "#800F1D"
            input.nextElementSibling.nextElementSibling.classList.add("d-block");
            return false
        }
        else{

            return true
        }
    }

    checkingAccountValidations(){

        if(this.inputValidate(this.accountNumberInput) || this.inputValidate(this.accountNumnberInput) || this.inputValidate(this.routingNumberInput) ) {
            return true
        }
        else{
            console.log("input error")
        }
    }

    debitCardValidations(){

        console.log('debit card validations')

        if(this.inputValidate(this.accountNumberInput) || this.inputValidate(this.cardInput) || this.inputValidate(this.cardNameInput) || this.inputValidate(this.expDateInput) || this.inputValidate(this.cvvInput)) {
            return true
        }
        else{

            console.log("input error")
        }
    }


}