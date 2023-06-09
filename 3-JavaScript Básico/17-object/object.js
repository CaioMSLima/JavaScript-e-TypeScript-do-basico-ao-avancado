const people1={
    name:"Caio", lastName:"Matos", age:"21"
}

//Caio
console.log(people1.name)

function createPeople(name,lastName,age) {
    return{
        name:name,
        lastName:lastName,
        age:age,
        speak(){
            console.log(`My current age is ${this.age}`)
        },
        incrementAge(){++this.age}
}
}

const people2 = createPeople("Raymound","Khoury",50)

//{ name: 'Raymound', lastName: 'Khoury', age: 50 }
console.log(people2)

//My current age is 50
people2.speak()

//++ age
people2.incrementAge()

// My current age is 51
people2.speak()

