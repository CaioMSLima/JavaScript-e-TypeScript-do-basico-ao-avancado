// ? :
const punctuation = 1999;

//                                  True       False
const level = punctuation >= 1000?"VIP User": "Normal User"
//VIP User
console.log(level);

let userColor = null;
let  standardColor = userColor || "Black";

//Black
console.log(standardColor)

 userColor = "Orange";
standardColor = userColor || "Black";

//Orange
 console.log(standardColor)
