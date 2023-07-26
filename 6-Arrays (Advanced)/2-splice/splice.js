//              -5       -4     -3     -2    -1
//               0        1      2      3     4
const names = ["Hall", "Logan","Wolf","Ben","Steve"]

//splice(index, delete, elem2,elme3)
const removed =names.splice(3,1,"Gerald")

//[ 'Ben' ]
console.log(removed);

// [ 'Hall', 'Logan', 'Wolf', 'Gerald', 'Steve' ]
console.log(names);

names.splice(names.length,0,"Mario","Rose", "Lara")

//[ 'Hall', 'Logan', 'Wolf', 'Gerald', 'Steve', 'Mario' ,'Rose',  'Lara']
console.log(names);