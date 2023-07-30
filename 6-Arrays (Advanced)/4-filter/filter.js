const numbers1 = [9,4,23,123,8,1,92,12,4,7,61];

//filter if the result = true or >10 , return one array with this numbers
const filterNumbers = numbers1.filter(((value,index,array)=>{
    return value > 10 
}));

//[ 23, 123, 92, 12, 61 ]
console.log(filterNumbers);

const people=[
    {name:"Caio",age:"22"},
    {name:"Laura",age:"41"},
    {name:"Luiza",age:"23"},
    {name:"Rose",age:"35"},
    {name:"Luiz",age:"28"},
    {name:"Barbara",age:"57"},
];

const peopleWithMore4Letters = people.filter(value=> value.name.length >= 5)
// [
//     { name: 'Laura', age: '41' },
//     { name: 'Luiza', age: '23' },
//     { name: 'Barbara', age: '57' }
//   ]
console.log(peopleWithMore4Letters);

const peopleWithMore50years = people.filter(value => value.age > 50)
//[ { name: 'Barbara', age: '57' } ]
console.log(peopleWithMore50years);

const peopleWithLastLetterE = people.filter(value => value.name.toLowerCase().endsWith("e"))
// [ { name: 'Rose', age: '35' } ]
console.log(peopleWithLastLetterE);


