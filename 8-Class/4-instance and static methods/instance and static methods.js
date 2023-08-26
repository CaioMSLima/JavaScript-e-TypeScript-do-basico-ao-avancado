class RemoteControl{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    increaseVolume(){
        this.volume += 2;
    }
    decreaseVolum(){
        this.volume -= 2;
    }

    //this method can be used with this class, use this method nothing instance
    static changeBattery(){
        console.log("Ok, I will change");
    }

    static sun(x,y){
        return x + y
    }
}

const c1 = new RemoteControl;
c1.increaseVolume();
c1.increaseVolume();

// RemoteControl { tv: undefined, volume: 4 }
console.log(c1);

// TypeError: c1.changeBattery is not a function
// at Object.<anonymous> 
c1.changeBattery()

//Ok, I will change
RemoteControl.changeBattery()

//105
console.log(RemoteControl.sun(15,90));