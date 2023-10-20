function random(min,max){
    min *= 100
    max *= 100

    return Math.floor(Math.random() * (max -min) + min)
}

function awaitHere(msg, time){

    //promise await the resovel 
    return new Promise((resolve, reject) =>{
        //if error reject this promise
        if(typeof msg != 'string') return reject('BAD VALUE')
        setTimeout(() =>{
            resolve(msg.toUpperCase() + "- Pass at promise");
            return
        },time);
    })
}

const promises = [awaitHere('Promise 1',3000), awaitHere('Promise 2',500), awaitHere('Promise 3',1000)];

//recive one array and resolve then, but follow the order in the list, one of is erro reject all promises
Promise.all(promises).then(value => console.log(value)).catch(erro => console.log(erro));

//Always choose the first value, the one that finishes first
Promise.race(promises).then(value => console.log(value)).catch(erro => console.log(erro));


function dowloadPage(value) {
    const inCash = value
   //resolve:  returns a promise that is immediately considered to have "resolved" with the value you provide as an argument.
    if(inCash) return Promise.resolve('Page in cash')

    //reject: returns a promise that is immediately considered to have "reject" with the value you provide as an argument
    else return Promise.reject('Dowload page')
}

dowloadPage(true).then(dataPage =>{
    console.log(dataPage);
}).catch(e => console.log(e));

dowloadPage(false).then(dataPage =>{
    console.log(dataPage);
}).catch(e => console.log("ERRO",e));