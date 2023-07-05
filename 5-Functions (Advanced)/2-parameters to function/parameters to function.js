function sun(a,b,c){
    let total = 0

    //arguments get all value in this function ex 1,3,4,5
    //Its only work with function
    for(let argument of arguments){
        total+= argument
    }
    //           13    1  3 4
    console.log(total, a, b, c)
}

sun(1,3,4,5)

function text(a,b=4,c=2) {
    //11
    console.log(a+b+5)
}

text(2)

function people({name,lastName,age}) {
    //Caio Matos 22
    console.log(name,lastName,age)
}

let obj ={name:"Caio",lastName:"Matos",age:22}
people(obj)

//take the rest of variable exp:10,45,30,90
function people(operator, accumulator,... numbers) {
   
    //* 0 [ 10, 45, 30, 90 ]
    console.log(operator, accumulator, numbers)

    for(number of numbers){
        if (operator === "+") accumulator  += number
        if (operator === "-") accumulator  -= number
        if (operator === "*") accumulator  *= number
        if (operator === "/") accumulator  /= number
    }

    //1215000
    console.log(accumulator)
};

people("*",1,10,45,30,90)