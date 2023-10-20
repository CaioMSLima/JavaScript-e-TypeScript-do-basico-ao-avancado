
// Promise await the resovel Then do this if error Reject this promise Catch this error
function random(min,max){
    min *= 100
    max *= 100

    return Math.floor(Math.random() * (max -min) + min)
}

function awaitHere(msg, time){

    //promise await the resovel 
    return new Promise((resolve, reject) =>{
        //if error reject this promise
        if(typeof msg != 'string') reject('BAD VALUE')
        setTimeout(() =>{
            resolve(msg);
        },time);
    })
    
}

//then do this
awaitHere("Connection to BD",random(1,3))
.then(reply =>{
    console.log(reply);
    return awaitHere("Fetching BASE data",random(1,3));
}).then(reply =>{
    console.log(reply);
    return awaitHere("Treating BASE data",random(1,3));
}).then(reply =>{
    console.log(reply);
    return awaitHere("Displays data on the screen",random(1,3));
}).then(reply =>{
    console.log(reply);
    return awaitHere(1232,random(1,3));
}).catch(e=> {
    console.log('ERROR:',e);
});


console.log("This will be displayed before any promises.");

