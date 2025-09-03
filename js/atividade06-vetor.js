// Gerar listas com os dados dos livros.
// Listas: titulos, anosDePublicacao, editoras, numerosDePaginas, precos e categorias.
// Massa de dados: Preencher as listas com 7 livros de categorias diversificadas (Ficção, Romance, Financeiro, Tecnologia)
// Criar o método que permite cadastrar novo livro
// Criar os seguintes métodos:
// - Listar todos os livros da categoria Ficção
// - Listar todos os livros publicados a partir do ano 2010
// - Listar todos os livros de uma determinada editora (entrada via prompt)
// - Listar todos os livros com mais de 300 páginas
// - Listar o livro com maior número de páginas
// - Listar o livro com menor número de páginas
// - Listar a média de páginas dos livros cadastrados
// - Listar todos os livros cujo título possua mais de 30 caracteres
// - Listar o livro mais caro
// - Listar o livro mais barato
// - Criar uma lista com os títulos e preços dos livros da categoria Tecnologia
// - Criar uma lista com os títulos e anos de publicação dos livros da categoria Romance
// - Listar todos os livros cujo título possua a palavra "JavaScript"

let titulos = ["1984", "Duna", "Orgulho e Preconceito", "Como eu era antes de você", "Pai rico, Pai pobre", "O Homem mais rico da babilônia", "Vertigem Digital"];
let editoras = ["Companhia das letras", "Aleph", "Martin Claret", "Intrinseca", "Alta books", "Harper Business", "Zahar"];
let anoPublicaçao = [1949, 1965, 1813, 2012, 1997, 1926, 2012];
let categorias = ["Ficção cientifica", "Ficção cientifica", "Romance", "Romance", "Financeiro", "Financeiro", "Tecnologia"];
let numeroDePaginas = [416, 412, 240, 320, 192, 160, 256];
let precos = [30.00, 64.90, 18.32, 30, 49.90, 20, 75];

function cadastrarNovoLivro() {
    let nomeLivro = prompt("Digite o título do Livro que deseja cadastrar:");
    let nomeEditora = prompt("Digite o nome da editora:");
    let anoDaPublicaçao = parseInt(prompt("Digite o ano de publicação do livro:"));
    let categoriaCadastro = prompt("Digite a Categoria do do livro:");
    let numeroDePaginasCadastro = parseInt(prompt("Digite a quantidade de páginas do Livro:"));
    let precosLivros = parseFloat(prompt("Digite o preço do livro:").replace(",", "."));

    titulos.push(nomeLivro);
    editoras.push(nomeEditora);
    anoPublicaçao.push(anoDaPublicaçao);
    categorias.push(categoriaCadastro);
    numeroDePaginas.push(numeroDePaginasCadastro);
    precos.push(precosLivros);

    alert(`Livro ${nomeLivro} cadastrado com sucesso!`)
}

function listaDeLivrosFicçao() {

    let nomeLivroFicçao = [];

    for (i = 0; i < titulos.length; i = i + 1) {
        let tituloDoLivro = titulos[i];
        let categoriaDoLivro = categorias[i];

        if (categoriaDoLivro === "Ficção cientifica") {
            nomeLivroFicçao.push(tituloDoLivro);
        }
    }
    alert(`Lista de livros de Ficção científica: \n${nomeLivroFicçao.join("\n")} `)
}

function listaDeLivroDepoisDe2010() {

    let decisao = 2010;
    let nomeLivroDepois2010 = [];

    for (i = 0; i < titulos.length; i = i + 1) {
        let livroPublicadoDepois = titulos[i];
        let anoPublicadoDepois = anoPublicaçao[i];

        if (anoPublicadoDepois > decisao) {
            nomeLivroDepois2010.push(livroPublicadoDepois);
        }
    }
    alert(`Lista de livros publicados depois de 2010: \n${nomeLivroDepois2010.join("\n")}`);
}

function listaDeterminadaEditora() {

    let tituloDeterminadoEditora = [];
    let determinadaEditora = prompt("Digite o nome da editora que deseja verificar os livros");

    for (i = 0; i < titulos.length; i = i + 1) {
        let tituloDeterminado = titulos[i];
        let determidadaEditoras = editoras[i];

        if (determinadaEditora === determidadaEditoras) {
            tituloDeterminadoEditora.push(tituloDeterminado);
        }
    }
    alert(`Livros da editora: ${determinadaEditora} são: \n${tituloDeterminadoEditora.join("\n")}`);
}

function listaLivrosMais300paginas() {
    let titulosMais300 = [];
    let mais300 = 300;

    for (i = 0; i < titulos.length; i = i + 1) {
        let titulosLivros = titulos[i];
        let numeroPaginasMais300 = numeroDePaginas[i];

        if (numeroPaginasMais300 > mais300) {
            titulosMais300.push(titulosLivros);
        }
    }
    alert(`Lista de livros com mais de 300 paginas: \n${titulosMais300.join("\n")}`);
}

function descobrirLivroComMaisPaginas() {
    let tituloMaisPaginas = "";
    let maiorQuantidadePaginas = 0;

    for (i = 0; i < titulos.length; i = i + 1) {
        let tituloMaiorPagina = titulos[i];
        let maiorQuantidade = numeroDePaginas[i];

        if (maiorQuantidade > maiorQuantidadePaginas) {
            maiorQuantidadePaginas = maiorQuantidade;
            tituloMaisPaginas = tituloMaiorPagina;
        }
    }
    alert(`O livro com maior quantidade de paginas: ${tituloMaisPaginas}`)
}

function descobrirLivroComMenosPaginas() {
    let tituloMenosPaginas = "";
    let menosQuantidadePaginas = 99999999999999;

    for (i = 0; i < titulos.length; i = i + 1) {
        let tituloMenorPagina = titulos[i];
        let menorQuantidade = numeroDePaginas[i];

        if (menorQuantidade < menosQuantidadePaginas) {
            menosQuantidadePaginas = menorQuantidade;
            tituloMenosPaginas = tituloMenorPagina;
        }
    }
    alert(`O livro com menor quantidade de paginas é: \n${tituloMenosPaginas}`);
}

function listaMediaPaginas() {
    let somaPaginas = 0;

    for (i = 0; i < titulos.length; i = i + 1) {
        let quantidadePaginas = numeroDePaginas[i];
        somaPaginas = somaPaginas + quantidadePaginas;
    }
    let media = somaPaginas / titulos.length;
    alert(`A media de páginas dos livros é: ${parseInt(media)}`);
}

function listaLivrosComMais30Carecteres() {
    let livrosMais30 = [];
    let diferença = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

    for (i = 0; i < titulos.length; i = i + 1) {
        let nomeLivroMais = titulos[i];

        if (nomeLivroMais.length > diferença.length) {
            livrosMais30.push(nomeLivroMais);
        }
    }

    alert(`Livros com mais de 30 caracteres são: \n${livrosMais30.join("\n")}`);
}

function descobrirLivroMaisCaro() {
    let livroMaisCaro = "";
    let preçoMaior = 0;

    for (i = 0; i < titulos.length; i = i + 1) {
        let tituloDescobrir = titulos[i];
        let precoDescobrir = precos[i];

        if (precoDescobrir > preçoMaior) {
            preçoMaior = precoDescobrir;
            livroMaisCaro = tituloDescobrir;
        }
    }
    alert(`Nome do livro mais caro é: ${livroMaisCaro}`);
}

function descobrirLivroMaisBarato() {
    let livroMaisBarato = "";
    let precoMaisBarato = 99999999;

    for (i = 0; i < titulos.length; i = i + 1) {
        livroBarato = titulos[i];
        precoBarato = precos[i];

        if (precoBarato < precoMaisBarato) {
            precoMaisBarato = precoBarato;
            livroMaisBarato = livroBarato;
        }
    }
    alert(`O livro mais barato é ${livroMaisBarato}`);
}

function listaTitulosPrecosTecnologia() {

    let unico = [];
    let tec = "Tecnologia"

    for (i = 0; i < titulos.length; i = i + 1) {
        let titulosTecnologia = titulos[i];
        let precosTecnologia = precos[i];
        let categoriaTec = categorias[i];

        if (categoriaTec === tec) {
            unico.push(" - " + titulosTecnologia + " - " + precosTecnologia + "R$");
        }
    }
    alert(`Lista de livros de tecnologia: \n ${unico.join("\n")}`);
}

function listaTitulosAnosRomance() {

    let lista = [];
    let determinada = "Romance";

    for (i = 0; i < titulos.length; i = i + 1) {
        let titulosRomance = titulos[i];
        let anosRomance = anoPublicaçao[i];
        let categoriaRomance = categorias[i];

        if (categoriaRomance === determinada) {
            lista.push(" - " + titulosRomance + " - " + anosRomance);
        }
    }
    alert(`Lista de livros e anos da categoria romance: \n${lista.join("\n")}`);
}

function listaJavascript() {

    let listaJava = [];
    let determinada = "javascript";

    for (i = 0; i < titulos.length; i = i + 1) {
        let titulosJavascript = titulos[i].toLowerCase();

        if (titulosJavascript.includes(determinada)){
            listaJava.push(" - " + titulosJavascript);
        }
    }
    alert(`Lista de livros que tenham a palavra Javascript: \n${listaJava}`)
}