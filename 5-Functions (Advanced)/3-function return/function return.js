function createPeople(name,lastName) {
    return {name, lastName}
}

const p1 = createPeople("Caio", "Matos")

//{ name: 'Caio', lastName: 'Matos' }
console.log(p1)

function createMultiplier(multiplier){

    return function(n){
        return n * multiplier
    }

}

const double = createMultiplier(2)
const triple = createMultiplier(3)
const quadruple= createMultiplier(4)

//6
console.log(double(3));

//15
console.log(triple(5));

//40
console.log(quadruple(10));

