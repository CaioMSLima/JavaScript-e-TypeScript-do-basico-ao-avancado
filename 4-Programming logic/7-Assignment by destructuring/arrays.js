let a ="A"; //B
let b ="B" ;//C
let c = "C" ;//A

const letters =[b,c,a];
[a,b,c] = letters;

//B C A
console.log(a,b,c);

//index          0     1    2   3   4   5   6     7   8    9
const numbers = [121, 231, 312, 41, 35, 26, 711 , 448, 59, 110];
const  [fristNumber, secondNumber,...rest]= numbers;

//121 231
console.log(fristNumber,secondNumber)
// [312, 41, 35, 26, 711 , 448, 59, 110]
console.log(rest)

const[one,,three,,five,,seven] = numbers;

//          121    312  35  711
console.log(one,three,five,seven)

//                       0          1          2
//                    0  1  2    0  1  2    0  1   2
const listNumbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// 6
console.log(listNumbers[1][2]);

const[list1,list2,list3] = listNumbers

// [ 4, 5, 6 ]
console.log(list2);

