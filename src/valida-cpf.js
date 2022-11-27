export default class validaCPF {
    constructor(element) {
        this.element = element;
    }

    limpar(cpf) {
        return cpf.replace(/\D/g, "");
    }

    construir(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }

    formatar(cpf) {
        const cpfLimpo = this.limpar(cpf);
        return this.construir(cpfLimpo);
    }

    validar(cpf) {
        const matchCPF = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);

        return matchCPF && matchCPF[0] === cpf;
    }

    validarEmMudanca(cpfElement) {
        if (this.validar(cpfElement.value)) {
            cpfElement.value = this.formatar(cpfElement.value);
            cpfElement.classList.add("success-cpf");
            cpfElement.classList.remove("error-cpf");
            cpfElement.nextElementSibling.classList.remove("ativar");
        } else {
            cpfElement.classList.add("error-cpf");
            cpfElement.classList.remove("success-cpf");
            cpfElement.nextElementSibling.classList.add("ativar");
        }
    }

    adicionarEvento() {
        this.element.addEventListener("change", () => {
            this.validarEmMudanca(this.element);
        });
    }

    adicionaErro() {
        const errorElement = document.createElement('span');
        errorElement.classList.add('error-text');
        errorElement.innerText = 'CPF inválido';
        this.element.parentElement.insertBefore(errorElement, this.element.nextElementSibling);

    }

    iniciar() {
        this.adicionarEvento();
        this.adicionaErro();
        return this;
    }
}