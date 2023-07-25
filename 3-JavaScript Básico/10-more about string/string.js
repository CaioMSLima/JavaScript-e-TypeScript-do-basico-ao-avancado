// If you use "" and want use "" in your text
// One "text"
let oneString = "One \"text\" in this day."

//Pick the caracter with indice 6 = e
console.log(oneString[6])
//or
console.log(oneString.charAt(6))

//Pick the indice of text = 5
console.log(oneString.indexOf("text"));

//Pick the inde but begin  or start in the end 1
//star in index 3 and go to index 1
console.log(oneString.lastIndexOf("n",3))

//iqual indexOf but cam use regular expession, 
//index 7
console.log(oneString.search(/x/))

//g make replace global
// One ">ex>" in >his day 
console.log(oneString.replace(/t/g,">"))

//24
console.log(oneString.length)

//this slice is part of this text, the first variable is teh vbegin of slice,the second the end,you must use it in the second variable with the index more than the string
//"text
console.log(oneString.slice(4,9))

//day
console.log(oneString.slice(-5,-1))

//separates the string by white space
//[ 'One', '"text"', 'in', 'this', 'day.' ]
console.log(oneString.split(" "));

//separete 2 times
//[ 'One', '"text"' ]
console.log(oneString.split(" ",2));

//one "text" in this day.
console.log(oneString.toLowerCase())

//ONE "TEXT" IN THIS DAY.
console.log(oneString.toUpperCase())

