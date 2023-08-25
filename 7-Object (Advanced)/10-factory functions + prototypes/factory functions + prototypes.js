const speack = {
    speack() {
        console.log(`${this.name} is speaking`);
    }
}

const eat = {
    eat() {
        console.log(`${this.name} is eating`);
    }
}

const drink = {
    drink() {
        console.log(`${this.name} is drinking`);
    }
}

const peoplePrototype = {...speack,...eat,...drink};
//or
// const peoplePrototype = Object.assign({},speack,eat,drink)

function createPeople(name, lastName) {
    return Object.create(peoplePrototype, {
        name: { value: name },
        lastName: { value: lastName }
    });
}

const p1 = createPeople("Caio", "Matos")
const p2 = console.log(p1);