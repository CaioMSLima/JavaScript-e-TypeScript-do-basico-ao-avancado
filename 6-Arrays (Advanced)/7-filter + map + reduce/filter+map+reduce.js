const numbers1 = [9, 4, 23, 123, 8, 1, 92, 12, 4, 7, 61];

// double of numbers pairs and sun of all
const pairs = numbers1.filter(value => value % 2 === 0)
    .map(value => value * 2)
    .reduce((acumulato, value) => acumulato += value)

//[ 4,  8, 92,  12, 4 ]
//[ 8, 16, 184, 24, 8 ]

//240
console.log(pairs);