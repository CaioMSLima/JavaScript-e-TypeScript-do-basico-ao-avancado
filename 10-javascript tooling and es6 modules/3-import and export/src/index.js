import {name3 as name2, lastName, age, sum, subtraction, Person} from './module1'
//or
// import anyName, {name3 as name2, lastName, age, sum, subtraction, Person} from './module1'

const name = 'Wayne'
const p1 = new Person(name2,lastName)
console.log(`${name2} ${name} ${lastName} ${age}`);
console.log('Sum '+ sum(53, 90));
console.log('subtraction ' + subtraction(90,53));
console.log(p1);

//or

import * as MyModules from './module1'

console.log(MyModules);

import anyName  from './module1'
console.log(anyName);

