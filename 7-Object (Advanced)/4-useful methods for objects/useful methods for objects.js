const product = {name:"mug", price:14};

const anotherThing = {...product};
//or
const otherThing = Object.assign({},product,{material:"plastic"})
//or
const two ={name:product.name,price:product.price}

anotherThing.name = "Jackt";
anotherThing.price = 150;

//{ name: 'mug', price: 14 }
console.log(product);

//{ name: 'Jackt', price: 150 }
console.log(anotherThing);;

//[ 'name', 'price' ]
console.log(Object.keys(product));

//[ 'mug', 14 ]
console.log((Object.values(product)));


//[ [ 'name', 'mug' ], [ 'price', 14 ] ]
console.log((Object.entries(product)));

// {
//     value: 'mug',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
console.log(Object.getOwnPropertyDescriptor(product,"name"));

//you cam change the Properties of this key
Object.defineProperty(product,"name",{
    writable:false,
    configurable: false,
    value: "Hi"
});

//dont change the object
Object.freeze(product)