function exercicio01() {
    // Batata Palha | R$ 12,50 · Arroz 5kg | 29,90 · Leite | R$ 4,79

    let desejaCadastrar = true;
    let total = 0;
    let quantidade = 0
    let maiorPreço = 0;
    let NomeMaisCaro = "";
    let produtos = "";
    let preços = "";
    let todos = "";


    while (desejaCadastrar === true) {

        let produto = prompt("Digite o nome do produto").trim();
        while (produto.length < 2) {
            produto = prompt("O minímo de caracteres deve ser 2 para o produto. \nDigite o nome do produto:");
        }

        let preço = parseFloat(prompt("Digite o preço do produto").replace("R$", "").replace(",", ".").replaceAll(" ", ""));

        total = total + preço;

        if (preço > maiorPreço) {
            maiorPreço = preço;
            NomeMaisCaro = produto;
        }

        quantidade = quantidade + 1;

        produtos = produtos + produto;
        preços = preços + preço;
        todos = produtos.padEnd(20, " ") + preços.padEnd(20, " ");

        desejaCadastrar = confirm("Deseja cadastrar outro produto?");
    }

    alert("Preço total dos itens: " + total +
        "\nQuantidade total de itens: " + quantidade +
        "\nProduto com o preço mais caro: " + maiorPreço +
        "\nNome do produto mais caro: " + NomeMaisCaro
    );

    console.log("Produtos".padEnd(20, " ") + "Preços".padEnd(20, " ") + "\n" + produtos.padEnd(20, " ") + preços);

}



function exercicio02() {

    let indice = 0;
    let id = 0;
    let nome = "";
    let cpf = 0;
    let dataNascimento = "";

    let linhasValidas = "";
    let linhasInvalidas = "";






    let frase = prompt("Digite uma linha no seguinte formato id;nome;cpf;aaaa-mm-dd");
    let partes = frase.split(";");

    if (partes)


        while (indice < 5) {
            frase = prompt("Digite uma linha no seguinte formato id;nome;cpf;aaaa-mm-dd");

            let partes = frase.split(";");

            if (partes.length !== 4) {
                frase = prompt("Erro, por favor digite uma linha no seguinte formato: \nid;nome;cpf;aaaa-mm-dd");

            }




            indice = indice + 1;



        }


}


function exerciciogit13() {

    let indice = 0;
    let nomeMenorPeso = "";
    let nomeMaiorAltura = "";
    let nomeMenorAmarelos = "";
    let nomeMaiorPeso = "";
    let nomeMaiorVermelhos = "";
    let nomeMaiorAmarelos = "";
    let nomeMenorVermelhos = "";
    let menorPeso = 999999999;
    let maiorAltura = 0;
    let maiorNome = "";
    let jogadoresF = 0;
    let jogadoresM = 0;
    let menorAmarelos = 9999999;
    let menorNome = "kkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsa";
    let maiorPeso = 0;
    let maiorVermelhos = 0;
    let maiorAmarelos = 0;
    let menorVermelhos = 9999999;


    while (indice < 22) {
        nomeJogador = prompt("Digite o nome do jogador(a)");
        idade = parseInt(prompt("Digite a idade do jogador(a)"));
        peso = parseFloat(prompt("Digite o peso do jogador(a)"));
        sexo = prompt("Digite o sexo do jogador(a) em formato de 'F' ou 'M'").toUpperCase().replace("FEMININO", "F").replace("MASCULINO", "M");
        altura = parseFloat(prompt("Digite a altura do jogador(a)").replace(",", "."));
        quantidadeGols = parseInt(prompt("Digite a quantidade de gols marcados pelo jogador(a)"));
        quantidadeAmarelos = parseInt(prompt("Digite a quantidade de cartões amarelos recebidos pelo jogador(a)"));
        quantidadeVermelhos = parseInt(prompt("Digite a quantidade de cartões vermelhos recebidos pelo jogador(a)"));
        
        if (peso < menorPeso) {
            nomeMenorPeso = nomeJogador;
            menorPeso = peso;
        }
        if (altura > maiorAltura) {
            nomeMaiorAltura = nomeJogador;
            maiorAltura = altura;
        }
        if (nomeJogador.length > 3) {
            maiorNome = nomeJogador;
        }
        if (sexo === "F") {
            jogadoresF = jogadoresF + 1;
        } else if (sexo === "M") {
            jogadoresM = jogadoresM + 1;
        }

        if (quantidadeAmarelos < menorAmarelos) {
            nomeMenorAmarelos = nomeJogador;
            menorAmarelos = quantidadeAmarelos;
        }
        if (nomeJogador.length  < menorNome.length) {    // LUCAS, LEIDIANE E ANA
            menorNome = nomeJogador;

        }
        if (peso > maiorPeso) {
            nomeMaiorPeso = nomeJogador;
            maiorPeso = peso;
        }
        if (quantidadeVermelhos > maiorVermelhos) {
            nomeMaiorVermelhos = nomeJogador;
            maiorVermelhos = quantidadeVermelhos;
        }
        if (quantidadeAmarelos > maiorAmarelos) {
            nomeMaiorAmarelos = nomeJogador;
            maiorAmarelos = quantidadeAmarelos;
        }
        if (quantidadeVermelhos < menorVermelhos) {
            nomeMenorVermelhos = nomeJogador;
            menorVermelhos = quantidadeVermelhos;
        }



        indice = indice + 1;
    }

    alert("Jogador com menor peso: " + nomeMenorPeso +
        "\nJogador com maior altura: " + nomeMaiorAltura +
        "\nJogador com maior nome: " + maiorNome +
        "\nQuantidade de jogadores do sexo F: " + jogadoresF +
        "\nQuantidade de jogadores do sexo M: " + jogadoresM +
        "\nJogador com a menor quantidade de cartões amarelos: " + nomeMenorAmarelos +
        "\nJogador com menor nome: " + menorNome +
        "\nJogador com maior peso: " + nomeMaiorPeso +
        "\nJogador com a maior quantidade de cartões vermelhos: " + nomeMaiorVermelhos +
        "\nJogador com a maior quantidade de cartões amarelos: " + nomeMaiorAmarelos +
        "\nJogador com a menor quantidade de cartões vermelhos: " + nomeMenorVermelhos
    );


}

/**function tamanhoDaString() {
    let texto = "Oi, tudo bem?";
    let tamanho = texto.length;

    alert("Texto: '" + texto + "'\nTamaho: " + tamanho);
    /*
        Cenários de uso:
        Ex. 02: Validação de CPF:
            691.735.128-43 
            min: 14
            max: 14
        Ex. 01: Validação de nome: 
            Nome Completo:
            max: 200
            min: 7
    
}*/