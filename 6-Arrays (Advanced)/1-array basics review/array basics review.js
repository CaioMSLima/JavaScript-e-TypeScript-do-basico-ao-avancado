let names0 = new Array("Bane","Norman","Loki")

const names = ["Bane","Norman","Loki"];
names[2] = "Lex"

//[ 'Bane', 'Norman', 'Lex' ]
console.log(names);

//3
console.log(names.length);

//copy one array
const new1 = [...names];

//Remove the element in the end of array
const removed = names.pop()

//[ 'Bane', 'Norman' ]
console.log(names)
//Lex
console.log(removed);

//Remove the element in the start of array
const removed2 = names.shift()

//           Bane    [ 'Norman']
console.log(removed2,names);

//Put the element in the end of array
names.push("Craven")

//[ 'Norman', 'Craven' ]
console.log(names);

//Put the element in the start of array
names.unshift("Eggman","Magneto")

//[ 'Eggman', 'Magneto', 'Norman', 'Craven' ]
console.log(names);

const new3 = names.slice(0,-1)

//[ 'Eggman', 'Magneto', 'Norman' ]
console.log(new3);

const fullName = "Virgil, Ovid, Hawkins"

//transforme array to string
const people = fullName.split(",")

//[ 'Virgil', ' Ovid', ' Hawkins' ]
console.log(people);

//sting to array
const people2 = people.join(",")

//Virgil, Ovid, Hawkins
console.log(people2);






