function exercicio01() {
    //Massa de dados: 3,50 | 10 | 7,99 | 8,5

    let indice = 0;
    let soma = 0;
    let media = 0;

    while (indice < 4) {
        let preço = parseFloat(prompt("Digite o preço").replace(",", "."));

        soma = soma + preço;
        indice = indice + 1;
    }
    media = soma / indice;

    alert("soma dos itens: " + soma +
        "\nMedia: " + media.toFixed(2)
    );

}

function exercicio02() {
    // Massa de dados: Ana, casa, Amora, abacaxi, rua

    let indice = 0;
    let quantidadeComeçaComA = 0, quantidadeComeçaComOutros = 0;

    while (indice < 5) {
        let palavras = prompt("Digite 5 palavras");

        if (palavras.toLocaleLowerCase().startsWith("a")) {
            quantidadeComeçaComA = quantidadeComeçaComA + 1;
        } else {
            quantidadeComeçaComOutros = quantidadeComeçaComOutros + 1;
        }

        indice = indice + 1;
    }

    alert("Quantidade que começa com a: " + quantidadeComeçaComA +
        "\nQuantidade que começa com outra letra: " + quantidadeComeçaComOutros
    );
}

function exercicio03() {
    let idade = parseInt(prompt("Digite sua idade"));
    while (idade < 1 || idade > 120) {
        idade = prompt("Erro, digite sua idade novamente");

    }
    alert("Idade cadastrada: " + idade);

}


function exercicio04() {
    // Massa de dados: 1,72 | 1,80 | 1,75
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 3) {
        let altura = parseFloat(prompt("Digite a altura").replace(",", "."));

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        indice = indice + 1;
    }
    alert("Maior altura: " + maiorAltura.toFixed(2));

}

function exercicio05() {

    let menu = `Escolha uma opção:
1 - Saudação 
2 - Par ou ímpar
100 - Sair`;

    let opção = 0;
    let nome = "";

    while (opção !== 100) {
        opção = parseInt(prompt(menu));

        if (opção === 1) {
            let DigiteNome = prompt("Digite seu nome").trim();
            nome = DigiteNome;
            alert("Olá, " + nome);
        } else if (opção === 2) {
            let novoNumero = parseInt(prompt("Digite um numero"));
            if (novoNumero % 2 === 0) {
                alert("Número par");
            } else {
                alert("Número ímpar");
            }
        } else if (opção !== 100) {
            alert("Opção inválida")
        }
    }
}

function exercicio06() {
    let nomes = "";
    let quantidade = "";

    while (quantidade !== "fim") {
        let nome = prompt("Digite o nome");

        if (nome === "fim") {
            quantidade = "fim";
        } else {
            nomes = nomes + "\n" + nome.toLowerCase().trim();
        }
    }
    alert("Lista de nomes: " + nomes);

}

function exercicio07() {
    // Massa de dados:  3,50 | 10 | R$ 7,99 | 8,5.

    let indice = 0;
    let soma = 0;
    let media = 0;
    let valorNovo = 0;

    while (indice < 4) {
        let valor = parseFloat(prompt("Digite um valor").replaceAll(" ", "").replace("R$", "").replace(",", "."));
        soma = soma + valor;
        indice = indice + 1;
    }
    media = soma / 4;
    alert("Soma dos valores: " + soma.toFixed(2) +
        "\nMédia dos valores: " + media.toFixed(2)
    );

}

function exercicio08() {

    let indice = 0;
    let quantidadeTerminaCom = 0;
    let quantidadeOutros = 0;

    while (indice < 5) {
        let frase = prompt("Digite uma frase").trimEnd();

        if (frase.toLocaleLowerCase().endsWith("?")) {
            quantidadeTerminaCom = quantidadeTerminaCom + 1;
        } else {
            quantidadeOutros = quantidadeOutros + 1;
        }

        indice = indice + 1

    }
    alert("Perguntas: " + quantidadeTerminaCom +
        "\nNão perguntas " + quantidadeOutros);
}

function exercicio09() {
    //Massa de dados: VIP123, testeOFF, vip-2025, abc, winterOff.

    let indice = 0;
    let quantidadeVip = 0;
    let quantidadeOff = 0;

    while (indice < 5) {
        let cupom = prompt("Digite o cupom").toLowerCase().trim();

        if (cupom.startsWith("vip")) {
            quantidadeVip = quantidadeVip + 1;
        } else if (cupom.endsWith("off")) {
            quantidadeOff = quantidadeOff + 1;
        }

        indice = indice + 1;
    }

    alert("Cupom Vip: " + quantidadeVip +
        "\nCupom Off: " + quantidadeOff
    );
}

function exercicio10() {

    let indice = 0;
    let primeiroNome = "";
    let letras = "";

    while (indice < 3) {
        let nomeCompleto = prompt("Digite seu nome completo").trim().split(" ");

        primeiroNome = primeiroNome + "\n" + nomeCompleto[0];

        indice = indice + 1;
    }

    let primeiras = primeiroNome.substring(0, 4);
    alert("Nomes: " + primeiroNome +
        "\nLetras iniciais do primeiro nome: " + primeiras
    );

}
