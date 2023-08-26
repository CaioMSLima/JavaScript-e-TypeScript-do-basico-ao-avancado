class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    //This methods always go to prototype
    speack() {
        console.log(`${this.name} is speaking`);
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    drink() {
        console.log(`${this.name} is drinking`);
    }
};

const animal1 = new Animal("hyena",8);

//Animal { name: 'hyena', age: 8 }
console.log(animal1);