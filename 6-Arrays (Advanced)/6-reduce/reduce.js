const numbers1 = [9,4,23,123,8,1,92,12,4,7,61];

//reduce the array in one element
const total = numbers1.reduce(function(acumulator,value,index){
     //0  9 13 36 159 167 168 260 272 276 283  344
    console.log(acumulator);
    acumulator += value;
    return acumulator

//initial value of acumulator
},0)
// 344
console.log(total);

const pair = numbers1.reduce(function(acumulator,value,index){
    if(value % 2 ===0 ) acumulator+= value
    return acumulator
},0)

//120
console.log(pair);


const people=[
    {name:"Caio",age:"22"},
    {name:"Laura",age:"41"},
    {name:"Luiza",age:"23"},
    {name:"Rose",age:"35"},
    {name:"Luiz",age:"28"},
    {name:"Barbara",age:"57"},
];

const oldest = people.reduce(( (acumulator,value)=>{
    if(acumulator.age > value.age) return acumulator;
    return value
}))
//{ name: 'Barbara', age: '57' }
console.log(oldest);