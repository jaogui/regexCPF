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

    validarEmMudanca(cpfElement) {
        console.log(cpfElement.value);
    }

    adicionarEvento() {
        this.element.addEventListener('change', () => {
            this.validarEmMudanca(this.element);

        });
    }
}