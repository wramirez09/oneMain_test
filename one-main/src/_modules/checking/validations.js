export default class Validations {
    constructor(){
        this.accountNumberInput = document.querySelector("#account-number");
        this.accountNumberInputErrorMessage = this.accountNumberInput.nextElementSibling.nextElementSibling
    }

    init(){

        console.log("input", this.accountNumberInput, "error", this.accountNumberInputErrorMessage)

        if(this.accountNumberInput.value === ""){
            console.log(this.accountNumberInputErrorMessage.classList.add("d-block"));
            return false
        }
    }

    
}