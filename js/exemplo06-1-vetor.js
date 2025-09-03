let colaboradores = ["Ana", "Bruno", "Carlos", "Jorge"];
let valoresHora = [25.00, 30.00, 20.00, 35.00];
let horasTrabalhadas = [160, 150, 170, 140];
let setores = ["TI", "RH", "TI", "Financeiro"];
let salariosBrutos = [4000.00, 4500.00, 3400.00, 4900.00];

function cadastrar(){
    let nome = prompt("Nome do colaborador:");
    let valorHora = parseFloat(prompt("Valor da hora trabalhada:"));
    let horas = parseFloat(prompt("Horas trabalhadas no mês:"));
    let setor = prompt("Setor do colaborador:");

    colaboradores.push(nome);
    valoresHora.push(valorHora);
    horasTrabalhadas.push(horas);
    setores.push(setor);

    let salarioBruto = valorHora * horas;
    salariosBrutos.push(salarioBruto);
    alert(`Colaborador ${nome} cadastrado com sucesso!`);
}


// Quantidade de colaboradores por setor
function contabilizarColaboradoresSetorTi(){
    let quantidadeTi = 0;
    for(let i = 0; i < colaboradores.length; i = i + 1){
        let setor = setores[i];
        if(setor === "TI"){
            quantidadeTi = quantidadeTi + 1;
        }
    }
    alert(`Quantidade de TI: ${quantidadeTi}`)
}

// Qual o colaborador com maior salário
function colaboradorMaiorSalario(){
    let maiorSalario = 0;
    let colaboradorMaiorSalario = "";
    for(let i = 0; i < colaboradores.length; i = i + 1){
        let salario = salariosBrutos[i];
        let colaborador = colaboradores[i];

        if(salario > maiorSalario){
            maiorSalario = salario;
            colaboradorMaiorSalario = colaborador;
        }
    }
    alert(`${colaboradorMaiorSalario} tem o maior salário R$ ${maiorSalario.toFixed(2).replace(".", ",")}`)
}


// Qual o colaborador com menor salário
function colaboradorMenorSalario(){
    let menorSalario = 99999999999;
    let colaboradorMenorSalario = "";
    for(let i = 0; i < colaboradores.length; i = i + 1){
        let salario = salariosBrutos[i];
        let colaborador = colaboradores[i];

        if(salario < menorSalario){
            menorSalario = salario;
            colaboradorMenorSalario = colaborador;
        }
    }
    alert(`${colaboradorMenorSalario} tem o menor salário R$ ${menorSalario.toFixed(2).replace(".", ",")}`)
}

// Quais os colaboradores do setor de TI
function descobrirColaboradoresSetorTi(){
    let colaboradoresSetorTi = [];
    for(let i = 0; i < colaboradores.length; i = i + 1){
        let setor = setores[i];
        let colaborador = colaboradores[i];
        if(setor === "TI"){
            colaboradoresSetorTi.push(colaborador);
        }
    }
    alert(`Colaboradores Setor TI: ${colaboradoresSetorTi}`)
}

// Qual a média salarial da empresa
function calcularMediaSalarial(){
    let somaSalarios = 0;
    for (let i = 0; i < colaboradores.length; i = i + 1){
        let salarioBruto = salariosBrutos[i];
        somaSalarios = somaSalarios + salarioBruto;
    }

    let media = somaSalarios / colaboradores.length;
    alert(`Média dos salários: ${media}`);
}

// Quais os colaboradores que ganham até dois e meio salários mínimos (considerar salário mínimo R$ 1.518,00)
function descobrirColaboradoresAteDoisSalariosMeio(){
    debugger
    let salarioMinimo = 1518.00;
    let doisSalariosMeio = salarioMinimo * 2.5;
    let colaboradoresAteDoisSalariosMeio = [];
    for(let i = 0; i < colaboradores.length; i = i + 1){
        let salarioBruto = salariosBrutos[i];
        let colaborador = colaboradores[i];

        if(salarioBruto <= doisSalariosMeio){
            colaboradoresAteDoisSalariosMeio.push(colaborador);
        }
    }
    alert(`Colaboradores que ganham até dois salários e meio: ${colaboradoresAteDoisSalariosMeio}`);
}

// Gerar uma lista com os dados dos colaboradores (nome, valor da hora, horas trabalhadas, setor e salário bruto)
function gerarListaColaboradores(){
    let listaColaboradores = [];
    for(let i = 0; i < colaboradores.length; i = i + 1){
        let colaborador = colaboradores[i];
        let valorHora = valoresHora[i];
        let horasTrabalhadasColaborador = horasTrabalhadas[i];
        let setor = setores[i];
        let salarioBruto = salariosBrutos[i];
        let dadosColaborador = `Nome: ${colaborador}, Valor Hora: ${valorHora}, Horas Trabalhadas: ${horasTrabalhadasColaborador}, Setor: ${setor}, Salário Bruto: ${salarioBruto}`;
        listaColaboradores.push(dadosColaborador);
    }
    console.log(`Lista de colaboradores:\n${listaColaboradores.join("\n")}`);
}