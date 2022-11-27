//Formata CPF


const itemsCPF = document.querySelectorAll('.list-cpf li');
console.log(itemsCPF);


function captureText(elements) {
    const arrayElements = Array.from(elements);

    return arrayElements.map(element => {
        return element.innerText;
    })
}


console.log(captureText(itemsCPF));