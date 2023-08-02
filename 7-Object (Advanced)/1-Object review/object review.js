const person = {
    name: "Caio",
    lastName: "Lima"
};

//Caio
console.log(person.name);
//or
console.log(person["name"]);

const person2 = new Object();
person2.name = "Ana"
person2.lastName="Luiza"

//Ana
console.log(person2.name);

//dele one key
delete person2.name

//{ lastName: 'Luiza' }
console.log(person2);

person.speackName = function(){
    console.log(`${this.name} is speacking your name.`);
}

//Caio is speacking your name.
person.speackName();

person.age = 22;

person.getBornDate = function(){
    const currentDate = new Date();
    return currentDate.getFullYear() - this.age;
}
 
//2001
console.log(person.getBornDate());


//Factor function
function createPerson(name,lastName) {
    return{
        name: name,
        lastName: lastName,
        get fullName(){
            return `${this.name} ${this.lastName}`
        }
    }
}

const p1 = createPerson("Lola", "Bunny")

//Lola Bunny
console.log(p1.fullName);

//constructor function
function Person(name,lastName){
    this.name = name
    this.lastName = lastName
    this.fullName = ()=>{
        return `${this.name} ${this.lastName}`
    }
}

const p2 = new Person("Robert","Kiyosaki")

//you don't modify anyone variable of p2 this function whit array
Object.freeze(p2)
// Person {
//     name: 'Robert',
//     lastName: 'Kiyosaki',
//     fullName: [Function (anonymous)]
//   }
console.log(p2);