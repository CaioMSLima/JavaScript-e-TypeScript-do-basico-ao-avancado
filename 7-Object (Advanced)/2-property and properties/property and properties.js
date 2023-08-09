function Product(name,price,stock){
   
  
    Object.defineProperty(this,"stock",{
        //this show this variable with you use console.log()
        enumerable: true,
        value: stock,
        //this permit you change the value or not
        writable: false,

        //this you can configurable this variable or not: exmp delet or use other defineProperty
        configurable: false
    });

    //Use with more variables
    Object.defineProperties(this,{
        name :{
            enumerable: true,
            value: name,
            writable: true,
            configurable:true
        },
        price:{
            enumerable: true,
            value: price,
            writable: true,
            configurable:true
        },
    })
}


const p1 = new Product("shirt",30,500)
p1.stock = 20;
delete p1.stock;

// Product { stock: 500, name: 'shirt', price: 30 }
console.log(p1);

//[ 'stock', 'name', 'price' ]
console.log(Object.keys(p1));

