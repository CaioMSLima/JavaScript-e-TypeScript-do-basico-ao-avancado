function salutation(name) {
    return `Good Morning ${name}!`
}
const variable = salutation("Caio");

// Good Morning Caio!
console.log(variable)


function sun1(x =1,y=34){
    return result = x + y
}

//22
console.log(sun1(2,20))

//35
console.log(sun1())

const source = n => n ** 0.5

//3
console.log(source(9));