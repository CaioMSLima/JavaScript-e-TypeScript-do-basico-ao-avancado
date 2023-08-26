class ElectronicDevice{
    constructor(name){
        this.name = name;
        this.connected = false;
    }

    connect() {
        if(this.connected) {
            return console.log(this.name + " already connect");
        }
        this.connected = true;
    }

    disConnect() {
        if(!this.connected) {
            return console.log(this.name + " already disconnect");
        }
        this.connected = false;
    }
}

const d1 = new ElectronicDevice("Smartphone")

d1.connect();

d1.disConnect();

//ElectronicDevice { name: 'Smartphone', connected: false }
console.log(d1);

//extend do a copy or heritage  this all in this class for new class
class Smartphone extends ElectronicDevice{
    constructor(name,color,model){
        // inherit the methods or variables of ElectronicDevice
        super(name);

        this.color = color;
        this.model = model;

    }
}

const s1 = new Smartphone("Samsung","Orange","Galaxy")

// Smartphone {
//     name: 'Samsung',
//     connected: false,
//     color: 'Orange',
//     model: 'Galaxy'
//   }
console.log(s1);

s1.connect();
//Samsung already connect
s1.connect()

//true
console.log(s1.connected);