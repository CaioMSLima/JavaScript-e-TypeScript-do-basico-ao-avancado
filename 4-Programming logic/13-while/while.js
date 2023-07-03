
function random(min,max){
    const r =  Math.random() * (max - min) + min;
    //floor round to dow
    return Math.floor(r);
}

const min = 1
const max = 50
let rand = random(min,max);

//THis loop only stop if this condition is false fish
//While = quanto
while (rand !== 10) {
    let rand = random(min,max);
    console.log(rand)
}

// the same as the others, but always executed once
do{
    console.log(rand)
}while(rand !== 10)