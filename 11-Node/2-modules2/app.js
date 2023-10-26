const areaTriangle =  require('./mod');

//35
console.log(areaTriangle(5,14));

//path of file name and foleder name

//c:\Users\CAA224\Desktop\Estudos\CURSOJS\11-Node\2-modules2\app.js
console.log(__filename);

// c:\Users\CAA224\Desktop\Estudos\CURSOJS\11-Node\2-modules2
console.log(__dirname);

const path = require('path')

// I want paht of 2 folder up 
//c:\Users\CAA224\Desktop\Estudos\CURSOJS
console.log(path.resolve(__dirname,'..','..'));