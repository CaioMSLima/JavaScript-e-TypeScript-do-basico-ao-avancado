
const form = document.querySelector(".form")

form.addEventListener("submit", function (e) {
    //e = the  envent in this function is submit
    e.preventDefault()

    //e.target get a element who recive subimit or qho elemente clicked in this page that case the elemnet is form
    const inputWeight = e.target.querySelector("#weight")
    const inputHeight = e.target.querySelector("#height")

    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    //This condiction only function becase convert the value if Number()
    //checked if this element is false or NaN 
    if (!weight) {
        setResult("Weight is invalid", false)
        //When you put return the code under this not will be read or not will function
        return
    }
    if (!height) {
        setResult("Height is invalid", false)
        return
    }

    const imc = getImc(weight, height)
    const levelImc = getLevelImc(imc)

    const msg =  `Your IMC is ${imc} (${levelImc})`

    setResult(msg,true);
})

function getLevelImc(imc) {
    const level = ["underweight", "normal weight", "overweight", "Obesity grade 1", 
        "Obesity grade 2", "Obesity grade 3"]

    if (imc >= 39.9) return level[5]
    if (imc >= 34.9) return level[4]
    if (imc >= 29.9) return level[3]
    if (imc >= 24.9) return level[2]
    if (imc >= 18.5) return level[1]
    if(imc < 18.5) return level[0]
}

function getImc(weight, height) {
    const imc = weight / (height ** 2)
    return imc.toFixed(2)
}

function createOneElement() {
    //Create a element with js, in this case one p
    const p = document.createElement("p")
    return p;
}


function setResult(msg, isValid) {
    const answer = document.querySelector(".answer")
    answer.innerHTML = "";

    const p = createOneElement()

    //Add on class in elemente with js
    if(isValid) {
        p.classList.add("paragraph-aswer")
    }else{
        p.classList.add("bad-aswer")
        
    }
    
    p.innerHTML = msg
    //Insert one elemennte child == p in this elemente who is answer
    answer.appendChild(p)


}
