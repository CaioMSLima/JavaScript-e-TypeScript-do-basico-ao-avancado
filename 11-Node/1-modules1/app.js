const mod1 = require('./mod1');
//or
const {name,lastName,speackName} = require('./mod1');

//if this modules you use npm to install, dont need use the paht of this file
const axios = require('axios')

// {
//     name: 'Miles',
//     lastName: 'Morales',
//     speackName: [Function: speackName]
//   }
console.log(mod1);

//Miles Morales
console.log(mod1.speackName());

//Morales
console.log(lastName);