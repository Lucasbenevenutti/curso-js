let livros = ["Eragon", "Narnia", "HP 1"];
let precos = [59.20, 198.30, 3.00];
let catergorias = ["Mediano", "Caro", "Promo"];

// Tabela de preços:
// 'Promo'      até 10
// 'Mediano'    até 100
// 'Caro'       acima de 100

function cadastrarLivro() {
    let nome = prompt("Digite o nome do livro");
    livros.push(nome);

    let preco = parseFloat(prompt("Digite o preço do livro"));
    precos.push(preco);

    let catergoria = "";
    if (preco <= 10) {
        catergoria = "Promo";
    } else if (preco <= 100) {
        catergoria = "Mediano";
    } else {
        catergoria = "Caro";
    }
    catergorias.push(catergoria);
}

function listarlivros() {
    let texto = "lista de livros";

    for (let i = 0; i < livros.length; i = i + 1) {
        let livro = livros[i];

        let preco = precos[i];
        let categoria = catergorias[i];

        texto = texto + "\n\t " + i + " => " + livro + " R$ " + preco + " (" + categoria + ")";
    }
    alert(texto);
}

function removerLivro() {
listarlivros();

    let nomeParaApagar = prompt("Digite o nome do livro para apagar");
    for ( let i = 0; i < livros.length; i = i + 1) {
        let livro = livros[i];

        if (nomeParaApagar === livro) {
            livros.splice(i, 1);
            precos.splice(i, 1);
            catergorias.splice(i, 1);
            alert("Livro removido com sucesso");
        }
    }
    alert("Livro não encontrado");
}

function alterarLivro() {
    let indiceParaAlterar = parseInt(prompt("Digite o indice que deseja alterar"));
    let novoNome = prompt("Digite o novo nome do livro", livros[indiceParaAlterar])
    let novoPreco = parseFloat(prompt("Digite o novo preço", precos[indiceParaAlterar]));

    let novaCategoria = "";
    if (novoPreco <= 10) {
        novaCategoria = "Promo";
    } else if (novoPreco <= 100) {
        novaCategoria = "Mediano";
    } else {
        novaCategoria = "Caro";
    }

    livros[indiceParaAlterar] = novoNome;
    precos[indiceParaAlterar] = novoPreco;
    catergorias[indiceParaAlterar] = novaCategoria;

    alert("Livro alterado com sucesso");
}