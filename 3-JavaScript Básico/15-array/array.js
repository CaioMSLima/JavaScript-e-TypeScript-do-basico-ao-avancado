//               0       1      2        3
let student = ["Caio","Logan","Lola", "Patolino"];

//Patolino
console.log(student[3])

//Replace one valor in one posion that you want
student[0] = "Taz"

// [ 'Taz', 'Logan', 'Lola', 'Patolino' ]
console.log(student)

//If you put on posision that you not have elements, that is add 
student[4] = "Marvin"

//[ 'Taz', 'Logan', 'Lola', 'Patolino', 'Marvin' ]
console.log(student)

//Put the element in the end of array
student.push("Ana")
student.push("Luiza")

// ['Taz','Logan','Lola', 'Patolino','Marvin', 'Ana','Luiza']
console.log(student)

//Put the element in the start of array
student.unshift("Barry")

// ['Barry','Taz','Logan','Lola','Patolino', 'Marvin','Ana', 'Luiza']
console.log(student)


//Remove the element in the end of array
const remove = student.pop()

//Luiza
console.log(remove)
//['Barry','Taz','Logan','Lola','Patolino', 'Marvin','Ana']
console.log(student)

//Remove the element in the start of array
student.shift()

// ['Taz','Logan','Lola','Patolino', 'Marvin','Ana',]
console.log(student)

//Delete the element but not change others index, on the ondex that element will be empty
delete student[1];

//[ 'Taz', <1 empty item>, 'Lola', 'Patolino', 'Marvin', 'Ana' ]
console.log(student)


//pick elementes  in list
//['Lola', 'Patolino']
console.log(student.slice(2,4))

//Know if the variable is array
//true
console.log(student instanceof Array)