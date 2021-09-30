


export default class Restrictions {
    constructor(){
        this.routingInput = document.querySelector("#routing-number");
        this.cvvInput = document.querySelector("#cvv-input");
        this.KEYDOWN_EVENT = "keydown";
        this.BACKSPACE_EVENT = "Backspace"
    }

    init(){
        this.numberInputLengthRestriction(this.routingInput, 9);
        this.numberInputLengthRestriction(this.cvvInput, 3);
       
    }

    numberInputLengthRestriction (input, length){
        let maxLength = length;
        let count = 0;
        
        input.addEventListener(this.KEYDOWN_EVENT, (e)=>{
            count++
            if(count >= maxLength && e.key !== this.BACKSPACE_EVENT){
                e.preventDefault();
            }
            else{
                count = this.routingInput.value.length
            }
        })
    }
}