// Gerar listas com os dados das músicas.
// Listas: titulos, anosDeLancamento, artistas, albuns, duracoesEmSegundos e generos.
// Massa de dados: Preencher as listas com 7 músicas de gêneros variados (Pop, Rock, Sertanejo, MPB, Rap).
// Criar o método que permite cadastrar nova música
// Criar os seguintes métodos:
// - Listar todas as músicas lançadas antes de 2000
// - Listar todas as músicas de um determinado artista (entrada via prompt)
// - Listar a música mais longa
// - Listar a música mais curta
// - Calcular a duração média das músicas cadastradas
// - Listar todas as músicas do gênero Rock
// - Listar todas as músicas cujo título tenha mais de 25 caracteres
// - Criar uma lista com os títulos e artistas das músicas de MPB
// - Criar uma lista com os títulos e anos de lançamento das músicas de Rap
// - Listar todas as músicas cujo título contenha a palavra "Amor"

let titulos = ["Don't Start Now", "The Pretender", "Propaganda", "Águas de Março", "AmarElo", "HUMBLE", "Me Adora"];
let anosDeLancamento = [2019, 2007, 2018, 1974, 2019, 2017, 2009];
let artistas = ["Dua Lipa", "Foo Fighters", "Jorge e Mateus", "Elis Regina e Tom jobim", "Emicida", "Kendrick Lamar", "Pitty"];
let albuns = ["Future Nostalgia", "Echoes, Silence, Patience & Grace", "Terra Sem CEP", "Elis & Tom", "AmarElo", "DAMN.", "Chiaroscuro"];
let duracoesEmSegundos = [183, 269, 141, 212, 321, 177, 268];
let generos = ["Pop", "Rock", "Sertanejo", "MPB", "Rap", "Rap", "Pop"];

function CadastrarMusica() {
    let NovaMusica = prompt("Digite o nome da musica que deseja cadastrar:");
    let novoAnoLançamento = parseInt(prompt("Digite o ano do lançamento:"));
    let novoArtista = prompt("Digite o nome do artista:");
    let novoAlbun = prompt("Digite o nome do album:");
    let novoDuraçaoSegundos = parseInt(prompt("Digite a quantidade de duração em segundos:"));
    let novoGenero = prompt("Digite o nome do genero");

    titulos.push(NovaMusica);
    anosDeLancamento.push(novoAnoLançamento);
    artistas.push(novoArtista);
    albuns.push(novoAlbun);
    duracoesEmSegundos.push(novoDuraçaoSegundos);
    generos.push(novoGenero);

    alert(`Musica ${NovaMusica} cadastrada com sucesso!`);
}

function listaMusicasAntes2000() {
    let musicasAntes = [];
    let determinada = 2000;

    for (i = 0; i < titulos.length; i = i + 1) {
        let verMusica = titulos[i];
        let verAno = anosDeLancamento[i];

        if (verAno < determinada) {
            musicasAntes.push(verMusica);
        }
    }
    alert(`Lista de Músicas lançadas antes de 2000: \n${musicasAntes.join("\n")}`);
}

function listaDeterminadoArtista() {
    let determinadoArtista = prompt("Digite o nome do artista que deseja verificar as musicas:");
    let musicasDele = [];

    for (i = 0; i < titulos.length; i = i + 1) {
        let verMusica = titulos[i];
        let verArtista = artistas[i];

        if (verArtista === determinadoArtista) {
            musicasDele.push(" - " + verMusica);
        }
    }
    alert(`Musicas do(a) ${determinadoArtista}: \n${musicasDele.join("\n")}`);
}

function musicaMaiSLonga() {
    let maiorTempo = 0;
    let maiorMusica = "";

    for (i = 0; i < titulos.length; i = i + 1) {
        let verMusica = titulos[i];
        let verMaiorTempo = duracoesEmSegundos[i];

        if (verMaiorTempo > maiorTempo) {
            maiorMusica = verMusica;
            maiorTempo = verMaiorTempo;
        }
    }
    alert(`Musica com a maior duração em segundos: ${maiorMusica}`);
}

function musicaMenorTempo() {
    let menorTempo = 999999999999999;
    let menorMusica = "";

    for (i = 0; i < titulos.length; i = i + 1) {
        let verMusica = titulos[i];
        let verTempo = duracoesEmSegundos[i];

        if (verTempo < menorTempo) {
            menorTempo = verTempo;
            menorMusica = verMusica;
        }
    }
    alert(`Musica com menor duração em segundos: \n${menorMusica}`);
}

function mediaMusicas() {
    let soma = 0;

    for (i = 0; i < titulos.length; i = i + 1) {
        let verSegundos = duracoesEmSegundos[i];

        soma = soma + verSegundos;
    }
    let media = soma / titulos.length;

    alert(`A média de duração das musicas: ${media.toFixed(2)}`);
}

function listaMusicasRock() {
    let musicasRock = [];
    let testeRock = "rock";

    for (i = 0; i < titulos.length; i = i + 1) {
        let testeMusicaRock = titulos[i];
        let testeGenero = generos[i].toLowerCase();

        if (testeGenero.toLowerCase() === testeRock) {
            musicasRock.push(" - " + testeMusicaRock);
        }
    }
    alert(`Musicas do genero Rock: \n${musicasRock.join("\n")}`);
}

function listaMusicaMais25caracteres() {
    let determinado = "aaaaaaaaaaaaaaaaaaaaaaaaa";
    let totaisMusicas = [];

    for (i = 0; i < titulos.length; i = i + 1) {
        let verMusica = titulos[i];

        if (verMusica.length > determinado.length) {
            totaisMusicas.push(" - " + verMusica);
        }
    }
    alert(`Musicas com mais de 25 caracteres: \n${totaisMusicas.join("\n")}`);
}

function listaMusicaArtistaMPB() {
    let tudo = [];
    let determinada = "mpb";

    for (i = 0; i < titulos.length; i = i + 1) {
        let verMusica = titulos[i];
        let verArtista = artistas[i];
        let verGenero = generos[i].toLowerCase();

        if (verGenero.toLowerCase() === determinada) {
            tudo.push(" - " + verMusica + " - " + verArtista);
        }
    }
    alert(`Lista de Musicas e artidas de MPB: \n${tudo.join("\n")}`);
}

function listaMusicaAno() {
    let tudo = [];
    let determinada = "rap";

    for (i = 0; i < titulos.length; i = i + 1) {
        let verMusica = titulos[i];
        let verAno = anosDeLancamento[i];
        let verGenero = generos[i].toLowerCase();

        if (verGenero === determinada) {
            tudo.push(" - " + verMusica + " - " + verAno);
        }
    }
    alert(`Lista de musicas e seu ano de lançamento do genero RAP: \n${tudo.join("\n")}`);
}

function listaMusicasAmor() {
    let determinada = "amor";
    let tudo = [];

    for (i = 0; i < titulos.length; i = i + 1) {
        let verMusica = titulos[i].toLowerCase();

        if (verMusica.includes(determinada)) {
            tudo.push(" - " + verMusica);
        }
    }
    alert(`Lista de musicas que contenham a palavra AMOR: \n${tudo.join("\n")}`);
}