const a ={
    name: "Caio",
    lastName:"Matos"
}

const b ={...a}
let c = a;

a.name ="Kauã"

// { name: 'Kauã', lastName: 'Matos' }
console.log(a)

// { name: 'Caio', lastName: 'Matos' }
console.log(b)

// { name: 'Kauã', lastName: 'Matos' }
console.log(c)
