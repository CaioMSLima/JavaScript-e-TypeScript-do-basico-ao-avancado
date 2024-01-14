const mongoose = require('mongoose');
const { type } = require('os');
const validator = require('validator')

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    cellPhone: { type: String, required: false, default: '' },
    creatAt:  { type: Date,  default: Date.now}
})

const ContactModel = mongoose.model('Contact', ContactSchema);

Contact.searchById = async function(id){
    if(typeof id !== 'string') return
    const contact = await ContactModel.findById(id);
    return contact
}

Contact.prototype.register = async function () {
    this.valid()
    if(this.errors.length > 0) return
    this.contact = await ContactModel.create(this.body);
}

Contact.prototype.valid = function () {
    this.cleanUp();
    //validation
    //the e-mail needs to be valid
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Invalid e-mail');
    if(!this.body.name) this.errors.push('Name is required field')
    if(!this.body.email && !this.body.cellPhone) this.errors.push('It need to send at least one contract: email or cellphone."')


}

Contact.prototype.cleanUp = function () {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        email: this.body.email,
        name: this.body.name,
        cellPhone: this.body.cellphone,
        lastName: this.body.lastname
    }
}

Contact.prototype.edit = async function(id){
    if( typeof id !== 'string') return;
    this.valid();

    if(this.errors.length > 0) return;
    // {new: true} = if it update return this data 
   this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {new: true});
}
module.exports = Contact;