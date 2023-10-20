import CpfValidation from './CpfValidation';

export default class GenerateCPF{
    rand(min = 10000000,max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formated(cpf){
        return(
            cpf.slice(0,3) + '.'+
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)
            
        )
    }

    generateNewCpf(){
        const cpfWithoutDigit = this.rand();
        const digit1 = CpfValidation.generateDigit(cpfWithoutDigit);
        const digit2 = CpfValidation.generateDigit(cpfWithoutDigit + digit1);
        const newCpf = cpfWithoutDigit + digit1 + digit2;
        return this.formated(newCpf);
    } 
}