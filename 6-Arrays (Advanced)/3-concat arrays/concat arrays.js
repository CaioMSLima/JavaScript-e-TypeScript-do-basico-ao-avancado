const a1= [3,9,1]
const a2= [5,7,2]

const a3 = a1.concat(a2,[4,6,8],"all numbers")

//[ 3, 9, 1, 5, 7, 2, 4, 6, 8, 'all numbers' ]
console.log(a3);

const a4 = [...a1,...a2,...[4,6,8],"all numbers"]

//[ 3, 9, 1, 5, 7, 2, 4, 6, 8, 'all numbers' ]
console.log(a4);