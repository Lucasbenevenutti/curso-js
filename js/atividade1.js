function exercicio01(){
    alert("SuperDev 7ª Edição")
}

function exercicio02(){
    let seuNome = "Lucas";
    let suaIdade = 24;
    let seuPeso = "60Kg";
    let suaAltura = "1,73cm";

    alert(
        "Nome: " + seuNome +
        "\nIdade: " + suaIdade +
        "\nPeso: " + seuPeso +
        "\nAltura: " + suaAltura
    );
}

function exercicio03(){
    let personagem1 = "Ashe";
    let raça1 = "Glacinata";
    let skill1 = "Enxurabo/Enxurrada de flecha";
    let paísOrigem1 = "Freljord";
    let rota1 = "Adc na botlane";

    let personagem2 = "Jinx";
    let raça2 = "Humana";
    let skill2 = "Super mega míssil da morte!";
    let paísOrigem2 = "Zaun";
    let rota2 = "Adc na botlane";

    let personagem3 = "Vel'Koz";
    let raça3 = "Criatura do vazio";
    let skill3 = "Raio desintegrador de formas de vida";
    let paísOrigem3 = "Vazio";
    let rota3 = "Mid ou suport";

    alert(
        "Lista de personagens:" +
        "\n\nPrimeiro: " + personagem1 +
        "\nRaça: " + raça1 +
        "\nSkill: " + skill1 +
        "\nPaís de origem: " + paísOrigem1 +
        "\nRota: " + rota1 +

        "\n\nSegundo: " + personagem2 +
        "\nRaça: " + raça2 +
        "\nSkill: " + skill2 +
        "\nPaís de origem: " + paísOrigem2 +
        "\nRota: " + rota2 +

        "\n\nTerceiro: " + personagem3 +
        "\nRaça: " + raça3 +
        "\nSkill: " + skill3 +
        "\nPaís de origem: " + paísOrigem3 +
        "\nRota: " + rota3 
    );
}

function exercicio04(){
    let nome = "Lucas";
    let peso = 60;
    let altura = 1.73;

    let alturaAoQuadrado = altura * altura;
    let imc = peso / alturaAoQuadrado;

    alert(
        "Dados do Paciente: " +
        "\n\nNome: " + nome +
        "\nPeso: " + peso +
        "\nAltura: " + altura +
        "\nIMC do Paciente: " + imc
    );
}

function exercicio05(){
    let numero1 = 6;
    let numero2 = 3;

    let soma = numero1 + numero2;
    let subtração = numero1 - numero2;
    let multiplicação = numero1 * numero2; 
    let divisão = numero1 / numero2;

    alert(
        "Cálculos dos seguintes números: " +
        "\n\nPrimeiro número: " + numero1 +
        "\nSegundo número:  " + numero2 +
        "\n\nSoma: " + soma +
        "\nSubtração: " + subtração +
        "\nMultiplicação: " + multiplicação +
        "\nDivisão: " + divisão
    );
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formDadosComputador');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const placaMae = document.getElementById('placaMae').value.trim();
        const precoPlacaMae = parseFloat(document.getElementById('precoPlacaMae').value);
        const placaDeVideo = document.getElementById('placaDeVideo').value.trim();
        const precoPlacaDeVideo = parseFloat(document.getElementById('precoPlacaDeVideo').value);
        const processador = document.getElementById('processador').value.trim();
        const precoProcessador = parseFloat(document.getElementById('precoProcessador').value);
        const memoria = document.getElementById('memoria').value.trim();
        const precoMemoria = parseFloat(document.getElementById('precoMemoria').value);
        const fonte = document.getElementById('fonte').value.trim();
        const precoFonte = parseFloat(document.getElementById('precoFonte').value);

        let valorTotal = precoPlacaMae + precoPlacaDeVideo + precoProcessador + precoMemoria + precoFonte;

        alert(
                "Modelo da Placa Mãe: " + placaMae +
                "\nPreço: " + precoPlacaMae +
                "\n\nModelo da Placa de Vídeo: " + placaDeVideo +
                "\nPreço: " +precoPlacaDeVideo +
                "\n\nModelo do Processador: " + processador +
                "\nPreço: " + precoProcessador +
                "\n\nMemóra RAM: " + memoria +
                "\nPreço: " + precoMemoria +
                "\n\nModelo da Fonte: " + fonte +
                "\nPreço: " + precoFonte +
                "\n\nValor total das peças: " + valorTotal + " R$"
            );
        });
    });
