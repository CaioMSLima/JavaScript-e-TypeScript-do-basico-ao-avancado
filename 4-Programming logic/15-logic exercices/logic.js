function biggestNumber(num1, num2) {
    return Math.max(num1,num2)
}
//150
console.log(biggestNumber(150,23))

const max = (x,y) => x > y? x :y;
//150
console.log(max(150,23));

//this  condiction always return true or false, no need you put the condiction ?true:false
const isLandscape = (width, height) => width > height
//false
console.log(isLandscape(200,500))

var numbers = (n) => {
    if(typeof n !== "number") return "Not a number"
    if((n%3 === 0)&&(n%5 ===0)) return "FizzBuzz"
    if(n%3 === 0) return"Fizz"
    if(n%5 === 0) return "Buz"
    return n

}

var i = 0;
while(i < 100){
    console.log(numbers(i));
    i++

}


