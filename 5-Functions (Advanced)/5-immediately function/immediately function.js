//This runs automatically without touching the global scope
(function(age,wight,heith){
    const name = "Caio";
    function createLastName(lastName){
        return name + " " + lastName
    }

    function speackName(params) {
        console.log(createLastName("Matos"))
    }

    //Caio Matos
    speackName()
   
    //           30   65   1.83
    console.log(age,wight,heith)
})(30,65,1.83);