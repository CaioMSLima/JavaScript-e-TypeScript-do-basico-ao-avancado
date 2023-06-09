let a = [1,2,3];

//a copy b
let b = [...a];
// c have all modification in b 
let c = b;

//[ 1, 2, 3 ] [ 1, 2, 3 ]
console.log(a,b);

a.push(4);
//[ 1, 2, 3, 4 ] [ 1, 2, 3 ]
console.log(a,b);

b.pop();
//[ 1, 2, 3, 4 ] [ 1, 2 ]
console.log(a,b)

b.push(12)
//[ 1, 2, 12 ] [ 1, 2, 12 ]
console.log(b,c)

