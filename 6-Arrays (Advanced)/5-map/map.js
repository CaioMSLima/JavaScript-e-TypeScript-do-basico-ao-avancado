const numbers1 = [9,4,23,123,8,1,92,12,4,7,61];

//modify my array
const double =  numbers1.map((value,index)=> value * 2)
//[18,   8, 46, 246, 16, 2, 184, 24,   8, 14, 122]
console.log(double);

const people=[
    {name:"Caio",age:"22"},
    {name:"Laura",age:"41"},
    {name:"Luiza",age:"23"},
    {name:"Rose",age:"35"},
    {name:"Luiz",age:"28"},
    {name:"Barbara",age:"57"},
];

const names = people.map(value => value.name)
//[ 'Caio', 'Laura', 'Luiza', 'Rose', 'Luiz', 'Barbara' ]
console.log(names);

const age = people.map(value =>{
    delete value.name 
    return value
} ) 
//[
//     { age: '22' },
//     { age: '41' },
//     { age: '23' },
//     { age: '35' },
//     { age: '28' },
//     { age: '57' }
//   ]
console.log(age);

//or

const age2 = people.map(value => ({age: value.age}) )
// [
//     { age: '22' },
//     { age: '41' },
//     { age: '23' },
//     { age: '35' },
//     { age: '28' },
//     { age: '57' }
//   ]
console.log(age2);

//this modify the array case you not modify create new one
const withId = people.map(value => {
    const newObj ={...value}
    newObj.id = Math.floor( Math.random()*(1000 - 1) + 1)
    return newObj
})
// [
//     { age: '22', id: 649 },
//     { age: '41', id: 323 },
//     { age: '23', id: 872 },
//     { age: '35', id: 508 },
//     { age: '28', id: 11 },
//     { age: '57', id: 446 }
//  ]
console.log(withId);
