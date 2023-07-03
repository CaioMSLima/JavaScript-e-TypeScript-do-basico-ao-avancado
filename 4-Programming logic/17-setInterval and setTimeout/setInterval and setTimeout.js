function showHour(){
    let date = new Date()

    return date.toLocaleTimeString("pt-BR",{
        hour12:false
    })
}

//You set the interval that this code running, in this example each 1 second
//you dont use function call bak = functionInterval(), that are the right way  function  functionInterval or you creat a function 
const timer = setInterval(function functionInterval(){
    console.log(showHour());
},1000)

//that  running one time,  in this exemplo  wait 6 second to runing the code
setTimeout(function(){
    //stop the interval
    clearInterval(timer)
},6000)

setTimeout(function(){
    console.log("this is interesting")
},8000)