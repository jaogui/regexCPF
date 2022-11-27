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

const formatCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

console.log('Captura CPF:' + captureText(itemsCPF))
console.log('Limpa CPF:' + cleanCPF(('156.457.444 10')))
console.log('Formata CPF:' + formatCPF(('15645744410')))