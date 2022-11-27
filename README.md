
# Regex CPF

Manipula, verifica, valida e insere cpf utilizando regex de forma simples.

manipula-cpf.js: Manipula CPFs já inseridos no HTML, ele verifica, formata e limpa caracteres do CPF por meio de funções.

valida-cpf.js: Cria-se uma instancia de classe com propriedade e metodos para manipular cpf.
Formata, limpa e retorna um novo CPF a partir da inserção do usuário no input.







## Build

No arquivo script.js, declare o input para receber CPF e inicialize a validação.

```bash
    const meuInput = document.getElementById('inputCPF');
    const minhaVariavel = new validaCPF(meuInput).iniciar();
```

