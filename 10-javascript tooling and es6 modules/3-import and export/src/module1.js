const name = 'Lex';
const lastName = "Luthor";
const age = 35;

function sum(x,y){
    return x + y;
}

export{name as name3, lastName, age, sum}

//or

export function subtraction(x,y){
    return x -y
}

export class Person{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}
const myDefault = "it is default"
export default myDefault

