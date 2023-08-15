const objA = {
    keyA: "A",
    // __Proto__: object.prototype
}

const objB = {
    keyB: "B",
    // __Proto__: object.prototype
}

Object.setPrototypeOf(objB, objA)

//A
console.log(objB.keyA);

//{ keyA: 'A' }
console.log(Object.getPrototypeOf(objB));

function Pokemon(name, hp) {
    this.name = name;
    this.hp = hp;
}

Pokemon.prototype.hpAfterDamage = function (damage) {
    this.hp = this.hp - damage
}

const p1 = new Pokemon("chandelure", 320);

p1.hpAfterDamage(100)

//Pokemon { name: 'chandelure', hp: 220 }
console.log(p1);

let p2 = {
    name: "Alakazam",
    hp: 450
}

Object.setPrototypeOf(p2, Pokemon.prototype);
p2.hpAfterDamage(300);

//Pokemon { name: 'Alakazam', hp: 150 }
console.log(p2);

let p3 = Object.create(Pokemon.prototype, {
    name: {
        value: "slaking",
        writable: true,
        enumerable: true,
        configurable: true
    },
    hp: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 1000
    }
});

p3.hpAfterDamage(609);

//Pokemon { name: 'slaking', hp: 391 }
console.log(p3);