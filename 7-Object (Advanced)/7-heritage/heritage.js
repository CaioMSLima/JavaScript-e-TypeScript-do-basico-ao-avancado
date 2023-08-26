function Product(name,price){
    this.name = name;
    this.price = price;
}

Product.prototype.increase = function(amount){
    this.price += amount;
}

Product.prototype.decrease = function(amount){
    this.price -= amount;
}

function Tshirt(name,price,color){
    //dont have prototype of Product
    // inherit the methods or variables of Product
    Product.call(this,name,price);
    this.color = color;
}

//copy the prototype  of other object
Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;

Tshirt.prototype.increase = function(percert){
    this.price += this.price * (percert / 100)
}

let tshirt = new Tshirt("zero",30,"orange");
tshirt.increase(100);

//Tshirt { name: 'zero', price: 60, color: 'orange' }
console.log(tshirt);

function Mug(name,price,material, stock){
    Product.call(this,name,price);
    this.material = material;

    Object.defineProperty(this,"stock",{
        enumerable: true,
        configurable:true,
        get:function(){
            return stock
        },
        set:function(value){
            if(typeof value !== "number") return;
            stock = value
        }

    })
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

let mug = new Mug("Huck",45,"plastic",70)

// Mug { name: 'Huck', price: 45, material: 'plastic', stock: [Getter/Setter]}
console.log(mug);