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

        console.log(matchCPF);

    }

    validarEmMudanca(cpfElement) {
        console.log(this.validar(cpfElement.value));
    }

    adicionarEvento() {
        this.element.addEventListener("change", () => {
            this.validarEmMudanca(this.element);
        });
    }

    iniciar() {
        this.adicionarEvento();
        return this;
    }
}