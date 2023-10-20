function random(min = 1,max = 3){
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

//assync and await substut the then
async function execult(){
    try {
        const phase1 = await awaitHere('Phase 1', random())
        console.log(phase1);
        const phase2 = await awaitHere('Phase 2', random())
        console.log(phase2);
        const phase3 = await awaitHere('Phase 3', random())
        console.log(phase3);
        
    } catch (error) {
        
    console.log(error);
    }

}

execult()