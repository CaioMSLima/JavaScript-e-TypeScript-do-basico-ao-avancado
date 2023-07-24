
function* generationg1(){
    yield "Value 1";
    yield "Value 2";
    yield "Value 3";
}

const g1 = generationg1();

// Object [Generator] {}
console.log(g1);

//{ value: 'Value 1', done: false }
console.log(g1.next());

// { value: 'Value 2', done: false }
console.log(g1.next());

// { value: 'Value 3', done: false }
console.log(g1.next());

//{ value: undefined, done: true }
console.log(g1.next());

function* generationg2(){
    yield 0;
    yield 1;
    yield 2;
}

function* generationg3(){

    yield* generationg2()
    yield 3;
    yield 4;
    yield 5;
}

const g3 = generationg3();
for(let valor of g3){
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    console.log(valor);
}

function* generationg4(){
    yield function(){
        console.log("Came from Y1");
    }

    yield function(){
        console.log("Came from Y2");
    }
}

const g4 =  generationg4();
const func1 = g4.next().value;
const func2 = g4.next().value;

// Came from Y1
func1();

// Came from Y2
func2();

