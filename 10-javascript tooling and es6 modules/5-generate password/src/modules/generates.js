const rand = (min,max) => Math.floor(Math.random() * (max-min) + min);

//tring.fromCharCode(rand(65,91) generate um number, letter or symbol when you put a number
const generateUppercase = () => String.fromCharCode(rand(65,91))
const generateLowercase = () => String.fromCharCode(rand(97,123))
const generateNumber= () => String.fromCharCode(rand(48,58))
const symbol = ',.;:=+-)&%$#@!(&"?/><^~|{[}]'
const generateSymbol = () => symbol[rand(0, symbol.length)];

export default function generatePassword(qtd, uppercase, lowecase, number, symbol) {
    qtd = Number(qtd)
    const passwordArray = []

    for(let i = 0; i < qtd; i++){
        //this function with  if
        uppercase && passwordArray.push(generateUppercase());
        lowecase && passwordArray.push(generateLowercase());
        number && passwordArray.push(generateNumber());
        symbol && passwordArray.push(generateSymbol());

    }
    //use slice becase this gender more than you want
  return passwordArray.join('').slice(0,qtd);
}

