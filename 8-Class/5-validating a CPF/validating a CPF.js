class CpfValidation {
    constructor(cpf) {
        Object.defineProperty(this, "cpfClean", {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        });
    }
    isSequence() {
        const sequence = this.cpfClean[0].repeat(this.cpfClean.length);
        return sequence === this.cpfClean
    }
    generateNewCpf(){
        const cpfWithoutDigit = this.cpfClean.slice(0, -2)
        const digit1 = CpfValidation.generateDigit(cpfWithoutDigit)
        const digit2 = CpfValidation.generateDigit(cpfWithoutDigit + digit1)
        this.newCpf = cpfWithoutDigit + digit1 + digit2
    }
    static generateDigit(cpfWithoutDigit){
        let total = 0;
        let reverce = cpfWithoutDigit.length + 1
        for(let stringNumeric of cpfWithoutDigit){
            total += reverce * Number(stringNumeric);
            reverce --;
        }

        const digit = 11 - (total % 11)
        return digit <= 9 ? String(digit) : '0';
    }
    validate() {
        if (typeof this.cpfClean === "undefined") return false;
        if (this.cpfClean.length !== 11) return false;
        if (this.isSequence()) return false;
        this.generateNewCpf()
        console.log(this.newCpf);
        return this.newCpf === this.cpfClean
    }

    

}

const cpf = new CpfValidation("705.484.450-52")

if (cpf.validate()) {
    console.log("Valid cpf");
} else {
    console.log("Invalid cpf");
}