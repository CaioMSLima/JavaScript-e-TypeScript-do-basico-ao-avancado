function Product(name,price,stock){
    this.name = name
    this.price = price

    let privateStock = stock

    Object.defineProperty(this,"stock",{
        enumerable:true,//show the key
        configurable: true,// configurable

        //show the value getter
        get:function(){
            return privateStock;
        },

        //change the value, stter
        set: function(value){
            if(typeof value !== "number"){
                throw new TypeError("Bad value")
            }
            privateStock = value
            
        }

    })
}

const p1 = new Product("Shirt",60,80)

// Product { name: 'Shirt', price: 60, stock: [Getter] }
console.log(p1);

//80
console.log(p1.stock);

p1.stock = 400;

//400
console.log(p1.stock);

p1.stock = "five"

// TypeError: Bad value
console.log(p1.stock);

function createProduct(name){
    return{
        get name(){
            return name
        },
        set name(value){
            name = value
        }
    }
}


let p2 = createProduct("Gloves")

//{ name: [Getter/Setter] }
console.log(p2);

