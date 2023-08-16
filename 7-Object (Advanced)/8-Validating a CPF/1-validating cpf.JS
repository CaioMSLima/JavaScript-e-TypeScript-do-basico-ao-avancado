function cvalidation(cpf) {
    //replace all caractere if is not a number
    const cpfClean = cpf.replace(/\D+/g,"");

    //Transform to array
    const cpfArray = Array.from(cpfClean);
    
   const array1 = pickArray(cpfArray,9,2);
   const array2 = pickArray(cpfArray,10,1);

    const reusult1 = verification(array1,10); 
    const reusult2 = verification(array2 ,11);

    const newCpf = [...array1]
    newCpf.push(reusult1,reusult2)

    //join(""), transforme array to string 70548445052 withot ","
    return cpfClean === newCpf.join("") ?true:false

}

function verification(cpfArray,mult) {
    var mult = mult;
    const cpf = cpfArray.reduce((acc,value)=>{
            acc += value * mult;
            mult -= 1;
            return acc;
    },0)
    var reusult = 11 - (cpf % 11) 
    return reusult > 9? "0" : `${reusult}`
}

var pickArray = (cpfArray,start,quantity)=>{
    const array = [...cpfArray]
    array.splice(start,quantity)
    return array
}

console.log(cvalidation("705.484.450-52"));