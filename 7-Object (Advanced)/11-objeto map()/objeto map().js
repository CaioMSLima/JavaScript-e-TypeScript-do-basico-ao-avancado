const people = [
    {id:3,name: 'Caio'},
    {id:2,name: 'Luiza'},
    {id:1,name: 'Helena'}
];

//bad way
const newPerson = {};
for(const person of people){
    const {id} = person
   newPerson[id] = {...person}
}

// {
//     '1': { id: 1, name: 'Helena' },
//     '2': { id: 2, name: 'Luiza' },
//     '3': { id: 3, name: 'Caio' }
// }
console.log(newPerson);

const newPerson2 = new Map();
for(const person of people){
    const {id} = person;
    //            key     value
   newPerson2.set(id,{...person});
}

// Map(3) {
//   3 => { id: 3, name: 'Caio' },
//   2 => { id: 2, name: 'Luiza' },
//   1 => { id: 1, name: 'Helena' }
// }
console.log(newPerson2);

//{ id: 2, name: 'Luiza' }
console.log(newPerson2.get(2));

for(const [identifier,{id,name}] of newPerson2){
    
//  3 3 Caio
//  2 2 Luiza
//  1 1 Helena
    console.log(identifier,id,name);
}