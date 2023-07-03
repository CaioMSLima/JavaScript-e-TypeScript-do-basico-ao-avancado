function getTimeFromSeconds(seconds) {
    // seconds * 1000 becase objet date use miliseconds
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString("pt-br", {
        // time in 24 not pm pr am
        hour12: false,
        //that time pick 1/1/1970 00:00:00, that way a pick hour 00:00:00
        timeZone: "UTC"
    })
}

const clock = document.querySelector(".clock");
let seconds = 0;
let timer;

function startClock() {
    timer = setInterval(function () {
        seconds++;
        clock.innerHTML = getTimeFromSeconds(seconds)
    }, 1000)
}

document.addEventListener("click", function (e) {
    const event = e.target

    //check if the click event of this document contains that class
    if (event.classList.contains("start")) {
        clock.style.color = "black"
        //do this becase not case conflit with more timers
        clearInterval(timer)
        startClock()
    }

    if (event.classList.contains("pause")) {
        clock.style.color = "red"
        clearInterval(timer)
    }

    if (event.classList.contains("reset")) {
        clock.innerHTML = getTimeFromSeconds(0)
        seconds = 0
        clearInterval(timer)
        clock.style.color = "black"
    }
})

//or

// const start = document.querySelector(".start");
// const pause = document.querySelector(".pause");
// const reset = document.querySelector(".reset");

// start.addEventListener("click",function(event){
//     clock.style.color= "black"
//     //do this becase not case conflit with more timers
//     clearInterval(timer)
//     startClock()
// })

// pause.addEventListener("click", function (event) {
//     clock.style.color = "red"
//     clearInterval(timer)
// })

// reset.addEventListener("click", function (event) {
//     clock.innerHTML = getTimeFromSeconds(0)
//     seconds = 0
//     clearInterval(timer)
//     clock.style.color = "black"
// })