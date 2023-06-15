const person = {
    name: "Caio",
    lastName:"Matos",
    age: 22,
    address: {
        road : "Paulista",
        number: 915
    }
};
//{ name: 'Caio', lastName: 'Matos', age: 22, address: { road: 'Paulista', number: 915 }}
console.log(person);

// extract this key from object and creat one var with this name
const  {  lastName, age, place = "building", } = person;

//            Matos    22 building
console.log(lastName, age, place);

//this key name I want to create this variable fristName
const {name:fristName} = person;

//Caio 
console.log(fristName);

const{address:{road:r,number},address} = person;

//Paulista  915   { road: 'Paulista', number: 915 }
console.log(r,number,address);

const{name, ...rest} = person

//Caio    {lastName: 'Matos', age: 22, address: { road: 'Paulista', number: 915 }}
console.log(name, rest);

