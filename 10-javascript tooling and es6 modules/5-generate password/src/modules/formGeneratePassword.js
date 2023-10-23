import generatePassword from "./generates";

const inputdPassword = document.querySelector('.generated-password');
const quantityCharacters = document.querySelector('.quantity-characters');
const chkUppercase = document.querySelector('.chk-uppercase')
const chkLowercase = document.querySelector('.chk-lowercase')
const chkNumber = document.querySelector('.chk-number')
const chkSymbol = document.querySelector('.chk-symbol')
const button = document.querySelector('.generate-pasword')


export default ()=>{
    console.log('I am Batman');
    button.addEventListener('click',(e) =>{
        inputdPassword.innerText = generate();
    })
}

function generate() {
    const password = generatePassword(
        quantityCharacters.value,
        chkUppercase.checked,
        chkLowercase.checked,
        chkNumber.checked,
        chkSymbol.checked
        )
        return password || 'Nothing selected.'
}