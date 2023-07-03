function sun(x,y){
    if(typeof x !== "number" || typeof y !== "number"){
        //this lauch the error and creat a new error
        throw new Error("x e y need be number");
    }

    return x + y;
}

try {
    console.log(sun("1",2));
} catch (error) {
    console.log(error);
    console.log("Fix this");
}


function returnHour(date){
    if(date && !(date instanceof Date)){
        throw new Error("This isn't a date");
    }

    if (!date)  date = new Date()

    return date.toLocaleTimeString("pt-br",{
        hour12: false,
        minute:"2-digit",
        second:"2-digit",
        hour:"2-digit"
    });
}

try {
    const hour = returnHour()

    console.log(hour)
} catch (error) {
    console.log(error.message)
}finally{
    //This always run
    console.log("Have a good day");
}