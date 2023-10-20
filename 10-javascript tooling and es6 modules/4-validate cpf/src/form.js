import './assets/css/style.css'
import GenerateCPF from './modules/GenerateCPF'

//THis function call itself
(function(){
    const generation = new GenerateCPF();
    const cpfGeneration =  document.querySelector('.cpf-generation');
    cpfGeneration.innerHTML = generation.generateNewCpf();
})();