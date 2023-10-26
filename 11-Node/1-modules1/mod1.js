const name = 'Miles';
const lastName = 'Morales';

const speackName = () => name + ' ' + lastName;

module.exports.name = name;
//or
exports.lastName = lastName;
//or
this.speackName = speackName;
//or
module.exports = {name,lastName,speackName}

// {
//     name: 'Miles',
//     lastName: 'Morales',
//     speackName: [Function: speackName]
//   }
console.log(module.exports);


// Module {
//     id: '.',
//     path: 'c:\\Users\\CAA224\\Desktop\\Estudos\\CURSOJS\\11-Node\\1-modules1',
//     exports: {
//       name: 'Miles',
//       lastName: 'Morales',
//       speackName: [Function: speackName]
//     },
//     parent: null,
//     filename: 'c:\\Users\\CAA224\\Desktop\\Estudos\\CURSOJS\\11-Node\\1-modules1\\mod1.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'c:\\Users\\CAA224\\Desktop\\Estudos\\CURSOJS\\11-Node\\1-modules1\\node_modules',
//       'c:\\Users\\CAA224\\Desktop\\Estudos\\CURSOJS\\11-Node\\node_modules',
//       'c:\\Users\\CAA224\\Desktop\\Estudos\\CURSOJS\\node_modules',
//       'c:\\Users\\CAA224\\Desktop\\Estudos\\node_modules',
//       'c:\\Users\\CAA224\\Desktop\\node_modules',
//       'c:\\Users\\CAA224\\node_modules',
//       'c:\\Users\\node_modules',
//       'c:\\node_modules'
//     ]
//   }
console.log(module);

