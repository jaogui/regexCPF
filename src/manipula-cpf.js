export default function manipularCPF() {
    const itemsCPF = document.querySelectorAll(".list-cpf li");
    // console.log(itemsCPF);

    //Formata CPF
    //Desestrutura elementos transformando em array.
    //Map em cada elemento obtendo o texto
    function captureText([...elements]) {
        return elements.map((element) => element.innerText);
    }


    //Limpa CPF
    //Limpa todos caracteres dos números
    const cleanCPF = (cpf) => {
        return cpf.replace(/\D/g, "");
    };


    //Formata CPF
    //Captura sequência de 3 números e por último de 2 números e substitui com o parâmetro definido em replace
    const formatCPF = (cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    };


    //BuildCPF
    //Executa aconstrução do cpf.
    const buildCPFS = (cpfs) => {
        return cpfs.map(cleanCPF).map(formatCPF);
    };

    const insertCPF = (listaCPF) => {
        const cpfs = captureText(listaCPF);
        const cpfsFormatados = buildCPFS(cpfs);


        listaCPF.forEach((element, index) => {
            element.innerText = cpfsFormatados[index];
        })
    }


    insertCPF(itemsCPF);


    // console.log("Captura CPF:" + captureText(itemsCPF));
    // console.log("Limpa CPF:" + cleanCPF("156.457.444 10"));
    // console.log("Formata CPF:" + formatCPF("15645744410"));
    // const resultado = captureText(itemsCPF);
    // console.log(buildCPF(resultado));
}