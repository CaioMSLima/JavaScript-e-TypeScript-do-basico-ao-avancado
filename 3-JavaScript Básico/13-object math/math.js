let num1 = 53.35
let num2 = 53.55

//round the number to low
//53.35 -> 53
console.log( Math.floor(num1))

//round the number to up
//53.35 -> 54
console.log(Math.ceil(num1))

//round to the nearest number
//53.35 -> 53
//53.55 -> 54
console.log(Math.round(num1))
console.log(Math.round(num2))

//Max number
// 5
console.log(Math.max(1,2,3,4,5,-6,-7,-8,-9))

//Min number
// -9
console.log(Math.min(1,2,3,4,5,-6,-7,-8,-9))

//random number 1 > x < 0
console.log(Math.random())

//onde random number between 10 and 1
console.log(Math.round(Math.random()* (10 - 1)+ 1 ))

let num3 = 81;
//9
console.log(Math.sqrt(num3))
