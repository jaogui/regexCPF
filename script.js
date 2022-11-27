const itemsCPF = document.querySelectorAll('.list-cpf li');
console.log(itemsCPF);


//Formata CPF
//Desestrutura elementos transformando em array.
//Map em cada elemento obtendo o texto
function captureText([...elements]) {
    return elements.map(element => element.innerText)
}


//Limpa todos caracteres dos números
const cleanCPF = (cpf) => {
    return cpf.replace(/\D/g, '')

}


console.log(cleanCPF(('156.457.444 10')))
console.log(captureText(itemsCPF))