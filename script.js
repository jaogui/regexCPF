//Formata CPF


const itemsCPF = document.querySelectorAll('.list-cpf li');
console.log(itemsCPF);


function captureText([...elements]) {
    return elements.map(element => element.innerText)
}


console.log(captureText(itemsCPF));