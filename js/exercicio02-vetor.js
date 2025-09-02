let numeros = [];

function cadastrarNumero(){

    let numero = prompt("Digite o seu numero preferido")
    numeros.push(numero);
}

function listarNumeros(){
    texto = "Lista de numeros preferidos";

    for (let i = 0; i < numeros.length; i = i + 1){
        let preferido = numeros[i];

        texto = texto + "\n\t " + i + " => " + preferido;
    }
    alert(texto);
}

function apagarNumero(){
    let desejaApagar = parseInt(prompt("Digite o indice do numero que deseja apagar:"));
    numeros.splice(desejaApagar, 1);
    alert("Numero apagado com sucesso");
}

function alterarNumero(){
    let desejaAlterar = parseInt(prompt("Digite o indice do numero que deseja alterar"));
    numeros[desejaAlterar] = prompt("Digite o novo numero preferido:");
    alert("Numero alterado com sucesso!");
}