function Person(name, lastName){

    //if you dont youse this , the atributes or method privade
    const id =  Math.floor(Math.random()*(10000 - 1) + 1)

    this.name = name;
    this.lastName = lastName;

    this.method = function(){
        console.log(`My full name is ${this.name} ${this.lastName}`);
    }
}

const p1 = new Person("Tony", "Starck");
const p2 = new Person("Bruce","Wane");

//          Tony
console.log(p1.name)

//My full name is Bruce Wane
p2.method()

