function createCalculator(){
    return{
        display: document.querySelector(".display"),
        btnClear: document.querySelector(".btn-clear"),

        start(){
            //this -> calculator
           this.clickButton();
        },

        
        performAccount(){
            let count = this.display.value;

            try {
                //eval run string with js
                count = eval(count);

                if(!count){
                    alert("Invalid count")
                }

                this.display.value = String(count)
            } catch (error) {
                alert("Invalid count")
            }
        },


        clearDisplay(){
            this.display.value =""
        },
        deletOne(){

            //slice(0-1) -> -1, in this case, refers to the last element of the array. Therefore, tolerated from the first element to the penultimate element of the array.
            this.display.value = this.display.value.slice(0,-1)
        },

        clickButton(){
            //this -> calculator
            document.addEventListener("click",function (e) {
                const event = e.target;

                //this -> document
                console.log(this)

                if(event.classList.contains("btn-num")){
                    this.btnToDisplay(event.innerText);
                }

                if(event.classList.contains("btn-clear")){
                    this.clearDisplay()
                }

                if(event.classList.contains("btn-del")){
                    this.deletOne()
                }

                if(event.classList.contains("btn-eq")){
                    this.performAccount()
                }

                //bind in this function transfome the this -> document to this -> calculator
                //arrow function not change the value of this,not need  to use bind
            }.bind(this))
        },
        btnToDisplay(value){
            //this -> calculator
            this.display.value += value
        }
    };
};

const calculator = createCalculator()
calculator.start()