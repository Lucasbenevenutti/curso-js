function exercicio01() {
    // Batata Palha | R$ 12,50 · Arroz 5kg | 29,90 · Leite | R$ 4,79

    let desejaCadastrar = true;
    let total = 0;
    let quantidade = 0
    let maiorPreço = 0;
    let NomeMaisCaro = "";



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

        desejaCadastrar = confirm("Deseja cadastrar outro produto?");
    }

    alert("Preço total dos itens: " + total + 
        "\nQuantidade total de itens: " + quantidade + 
        "\nProduto com o preço mais caro: " + maiorPreço +
        "\nNome do produto mais caro: " + NomeMaisCaro
    );

    


}