
// grab card UI 


export default class Radios {

    constructor() {

        this.ACCOUNT_SELECTOR = ".account-form";
        this.CARD_SELECTOR = ".card-form";
        this.accountForm = document.querySelectorAll(this.ACCOUNT_SELECTOR);
        this.cardForm = document.querySelectorAll(this.CARD_SELECTOR);

        this.RADIO_CHECKING_SELECTOR = "#radioChecking"
        this.RADIO_DEBIT_SELECTOR = "#debitRadio"
        this.checkingRadio = document.querySelector(this.RADIO_CHECKING_SELECTOR);
        this.debitRadio = document.querySelector(this.RADIO_DEBIT_SELECTOR);

    }

    init() {

        this.checkingRadio.addEventListener("change", (e) => {
            if (e.target.checked) {
                this.toggleForm(false);
                this.debitRadio.checked = false;
                document.querySelector(".card-form")
            }
        })

        this.debitRadio.addEventListener("change", (e) => {
            if (e.target.checked) {
                this.toggleForm(true)
                this.checkingRadio.checked = false;
            }
        })

    }


    ShowForm(nodeListArray) {
        nodeListArray.forEach((el) => {
            el.classList.remove('hidden')
        })
    }

    hideForm(nodeListArray) {
        nodeListArray.forEach((el) => {
            el.classList.add('hidden')
        })
    }

    toggleForm(toggle) {
        if (toggle) {
            this.hideForm(this.accountForm);
            this.ShowForm(this.cardForm)
        }
        else {
            this.hideForm(this.cardForm);
            this.ShowForm(this.accountForm)
        }
    }
}

