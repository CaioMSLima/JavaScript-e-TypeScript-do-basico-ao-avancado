const mongoose = require('mongoose');
const validator = require('validator')
const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }

})

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valid();
        if (this.errors.length > 0) return;

        try {
            this.user = await LoginModel.create(this.body)
        } catch (error) {
            console.log(error);
        }
    }

    valid() {
        this.cleanUp();
        //validation
        //the e-mail needs to be valid
        if (!validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail');

        //the password have between 3 and 50
        if (this.body.password.length < 3 || this.body.password.length >= 50) {
            this.errors.push('The password needs to have between 3 and 50 characters')
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;