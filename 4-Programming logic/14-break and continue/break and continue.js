const numbers =[1, 2, 3, 4, 5, 6, 7,8, 9];

for(number of numbers){
    if(number === 2 || number === 5 ){
//      is used if you want to skip all code below here and continue with the loop
        continue;
    } 
    if(number === 7){
        console.log("I find the number 7")
//      Stop the loop     
        break
    }
    console.log(number);
}