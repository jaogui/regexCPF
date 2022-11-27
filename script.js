import manipularCPF from './src/manipula-cpf.js';
manipularCPF();
import validaCPF from './src/valida-cpf.js';





const inputCPF = document.getElementById('inputCPF');
const validarCPF = new validaCPF(inputCPF);


console.log(validarCPF.construir('155.555.555-40'));