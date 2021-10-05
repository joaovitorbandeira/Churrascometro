let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
        
let calculo = document.getElementById("calculo");
        
function calcular() {
    console.log("Calculando...");
        
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
        
    let QtdTotalCarne = ( CarnePorPessoa(duracao) * adultos ) + ( (CarnePorPessoa(duracao) * criancas ) / 2 )
    let QtdTotalCerveja = ( CervejaPorPessoa(duracao) * adultos ) / 350
    let QtdTotalBebida = ( BebidaPorPessoa(duracao) * adultos ) + ( (BebidaPorPessoa(duracao) * criancas ) / 2 )


            
    calculo.innerHTML = (`<p>${QtdTotalCarne} Kg de Carne`)
    calculo.innerHTML += (`<p>${Math.ceil( QtdTotalCerveja)} Latas de Cerveja`)
    calculo.innerHTML += (`<p>${Math.ceil( QtdTotalBebida / 2000)} Lts de Refrigerante e Água`)
            
}

function CarnePorPessoa(duracao){
    if (duracao > 4) {
        return 0.6
    }
    else{
        return 0.4
    }
}

function CervejaPorPessoa(duracao){
    if (duracao > 4) {
        return 473
    }
    else{
        return 350
    }
}

function BebidaPorPessoa(duracao){
    if (duracao > 4) {
        return 2000
    }
    else{
        return 1200
    }
}