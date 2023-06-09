const hour = 10;

if(hour >=0 && hour<=11){
    console.log("Good morning")
}
else if(hour >= 12 && hour <= 17){
    console.log("Good afternong")
}else if(hour > 17 && hour <= 23){
    console.log("Good night");
}else{
    console.log("Hi")
}

const number1 = 10;

if (number1 >= 0 && number1<=5){
    console.log("The number is between 0 and 5.");

}else if(number1 >= 6 && number1 <= 8){
    console.log("The number is between 6 and 8");

}else if(number1 >= 9 && number1 <= 11){
    console.log("The number is between 6 and 8")
}else{
    console.log("The number isn't between 0 and 11");
}