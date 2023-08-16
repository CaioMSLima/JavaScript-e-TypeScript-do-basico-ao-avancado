function CpfValidation(cpf) {
    Object.defineProperty(this,"cpfClean",{
        enumerable: true,
        get: function(){
            //replace all caracteres if is not a number
            return cpf.replace(/\D+/g,"");
        }
    });
}

CpfValidation.prototype.validate = function(){
    if(typeof this.cpfClean === "undefined") return false;
    if(this.cpfClean.length !== 11) return false;
    if(this.isSequence()) return false;

    const partialCpf =this.cpfClean.slice(0,-2)
    const digit1 = this.verification(partialCpf)
    const digit2 = this.verification(partialCpf + digit1)

    const newCpf = partialCpf + digit1 + digit2;

    return newCpf === this.cpfClean;
};
 //this valid if cpf iqual 11111111, 22222, 33333 and ....
CpfValidation.prototype.isSequence = function(){
    const sequence =this.cpfClean[0].repeat(this.cpfClean.length);
    return sequence === this.cpfClean
}
CpfValidation.prototype.verification = function(partialCpf) {
    //Transform to array
    const cpfArray = Array.from(partialCpf);
    
    var mult = cpfArray.length + 1;
    const total = cpfArray.reduce((acc,value)=>{
            acc += Number(value) * mult;
            mult --;
            return acc;
    },0)
    var digit = 11 - (total % 11) 
    return digit > 9? "0" : String(digit)
}

const cpf = new CpfValidation("705.484.450-52")

if(cpf.validate()){
    console.log("Valid cpf");
}else{
    console.log("Invalid cpf");
}