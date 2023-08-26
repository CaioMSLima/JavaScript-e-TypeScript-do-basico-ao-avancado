//Returns a new unique  symbol value
const _speed = Symbol('speed');
class Car{
    constructor(name){
        this.name = name;
        this[_speed] = 0;
    }

    get speed(){
        return this[_speed];
    }

    set speed(value){
        if (typeof value !== 'number')return;
        if (value <= 0 || value >= 350) return;
        this[_speed] = value;
    }

    speedUp(){
        if (this[_speed] >= 350) return;
        this[_speed] ++;
         
    }

    brake(){
        if (this[_speed] <= 0) return;
        this[_speed] --;
    }
}

const c1 = new Car("Jeep Renegade");

for (let index = 0; index < 400; index++) {
   c1.speedUp();   
}

// Car { name: 'Jeep Renegade', [Symbol(speed)]: 350 }
console.log(c1);

//350
console.log(c1.speed);

c1.speed = 200
//200
console.log(c1.speed);