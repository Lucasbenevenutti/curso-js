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

    while(indice < 5 ) {
        let palavras = prompt("Digite 5 palavras");

        if(palavras.toLocaleLowerCase().startsWith("a")) {
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
    
}