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
        while(produto.length < 2){
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

function preenchimentoTabela() {
    let paciente1 = "Ana Silva";
    let paciente2 = "Augusto Primeiro";
    let idade1 = 28;
    let idade2 = 26;

    console.log(" -----------------------------------------" +
        "\n| Nome                 | Idade            |" +
        "\n -----------------------------------------" +
        "\n| " + paciente1.padEnd(20, " ") + " | " + idade1.toString().padEnd(16, " ") + " |" +
        "\n| " + paciente2.padEnd(20, " ") + " | " + idade2.toString().padEnd(16, " ") + " |" +
        "\n -----------------------------------------")
}