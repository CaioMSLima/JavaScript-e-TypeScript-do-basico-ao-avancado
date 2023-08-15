function People(name, lastName){
    this.name = name;
    this.lastName = lastName;
    this.fullName = ()=> this.name + " " + this.lastName;
};

//if you create a method with the same name as the prototype, the method you created will have more priority
// is a special object that provides properties and methods shared by all instances created by a constructor function.
People.prototype.iAmHere ="hHahaha";

const person1 = new People("Oliver","Quin");
const date = new Date();

//show in console of brower
console.dir(person1);
console.dir(date);