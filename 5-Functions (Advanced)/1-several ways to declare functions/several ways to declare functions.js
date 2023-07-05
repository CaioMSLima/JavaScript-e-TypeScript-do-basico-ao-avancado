//Hello
sayHello();
function sayHello(){
    console.log("Hello");
}

const iAmData = function(){
    console.log("I'm a data.");
}
//I'm a data.
iAmData();

function execulteFunction(function1) {
    function1();
}
//I'm a data.
execulteFunction(iAmData);

const arrow =() =>{
    console.log("I am a arrow function");
}
//I am a arrow function
arrow();

const obj ={
    speak: function () {
        console.log("I am speaking");
    }
}
//I am speaking
obj.speak();