const mongoose = require('mongoose');
const validator = require('validator')
const bcryptjs = (require('bcryptjs'))
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

    async login(){
        this.valid();
        if (this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email })

        if(!this.user){
             this.errors.push('User not exist.');
             return
        }
        //do this beacase the password user is incript
        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push("Invalid password")
            this.user = null
            return;
        }
    }

    async register() {
        this.valid();
        if (this.errors.length > 0) return;

        await this.userExists()

        if (this.errors.length > 0) return;

        // encrypt a password
        //the salt generate a random value and hashSync funsion this value with password
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt)

        this.user = await LoginModel.create(this.body)

    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email })
        if (this.user) this.errors.push('This user exists')
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