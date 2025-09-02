let pets = [];

function cadastrarPet() {

    let nome = prompt("Digite o nome do PET");
    pets.push(nome);
}

function listarPets() {

    let texto = "Lista de Pets cadastrados:";

    for (let i = 0; i < pets.length; i = i + 1) {
        let pet = pets[i];

        texto = texto + "\n\t " + i + " => " + pet;
    }
    alert(texto);
}

function removerPet() {

    let indiceParaApagar = parseInt(prompt("Digite o indice do PET que deseja apagar:"));
    pets.splice(indiceParaApagar, 1);
    alert("Pet apagado com sucesso da lista");
}

function alterarNomePet() {

    let indiceParaAlterar = parseInt(prompt("Digite o indice do PET que deseja alterar o nome:"));
    pets[indiceParaAlterar] = prompt("Digite o novo nome do PET:");
    alert("Nome alterado com sucesso!");
}
