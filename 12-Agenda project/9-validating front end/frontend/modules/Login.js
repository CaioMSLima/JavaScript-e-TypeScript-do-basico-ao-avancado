import validator from 'validator';

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }
    
    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            alert("FORM NOT SEND");
           this.validate(e)
        });
    }

    validate(e){
        const events = e.target;
        const emailInput = events.querySelector('input[name="email"]')
        const passwordInput = events.querySelector('input[name="password"]')
        let error =false

        if(!validator.isEmail(emailInput.value)){
            alert('Invalid E-mail')
            error = true
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50){
            alert('Password need have between 3 and 50 characters')
            error = true
        }

        if ((!error)) events.submit();

        console.log(emailInput.value, passwordInput.value);
    }
}
