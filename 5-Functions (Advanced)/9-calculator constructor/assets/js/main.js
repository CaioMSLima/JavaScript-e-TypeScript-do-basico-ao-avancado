class Calculator {
    constructor() {

        var display = document.querySelector(".display")
        var calculator = document.querySelector(".calculator")

        this.start = () => {
            clickButton()
            pressEnter()
        }
        let clear = () => display.value = ""

        let performAccount = () => {
            let count = display.value

            try {
                //eval run string with js
                count = eval(count)

                !count ? alert("Invalid count") : display.value = String(count)

            } catch (error) {
                alert("Invalid count")
                clear()
            }
        }

        let clickButton = function () {
            calculator.addEventListener("click", function (e) {
                let event = e.target

                if (event.classList.contains("btn-num")) {
                    display.value += event.innerText
                }

                if (event.classList.contains("btn-clear")) {
                    clear()
                }

                if (event.classList.contains("btn-del")) {
                    display.value = display.value.slice(0, -1)
                }
                if (event.classList.contains("btn-eq")) {
                    performAccount()
                }
                display.focus()

            })
        }

        let pressEnter = () => {
            document.addEventListener("keyup", function (e) {

                if (e.keyCode === 13) {
                    performAccount()
                }
            })
        }


    }
}

var calculate = new Calculator()
calculate.start()