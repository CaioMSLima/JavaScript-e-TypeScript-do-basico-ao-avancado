const a1 = [10,23,63,59,1234,567,12,4567,903];

// forEach == for
// value = 10 and index = 0
// value = 23 and index = 1
// value = 63 and index = 2
// value = 59 and index = 3
// value = 1234 and index = 4
// value = 567 and index = 5
// value = 12 and index = 6
// value = 4567 and index = 7
// value = 903 and index = 8
const print = a1.forEach((value,index,array)=> console.log(`value = ${value} and index = ${index}`));