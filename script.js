
// ANIMAÇÃO DO BALÃO DOS ADULTOS QUE BEBEM
const sliderValueAdultosTotal = document.querySelector("span#spanAdultosTotal")
const inputSliderAdultosTotal = document.querySelector("input.inputRange.adultosTotal")

inputSliderAdultosTotal.oninput = (() =>{
    let value = inputSliderAdultosTotal.value;
    sliderValueAdultosTotal.textContent = value;
    sliderValueAdultosTotal.style.left = value + "%";
    sliderValueAdultosTotal.classList.add("show");
  })

// ANIMAÇÃO DO BALÃO DOS ADULTOS QUE NÃO BEBEM
const sliderValueAdultosNaoBebem = document.querySelector("span#spanAdultosNaoBebem")
const inputSliderAdultosNaoBebem = document.querySelector("input.inputRange.adultosNaoBebem")

inputSliderAdultosNaoBebem.oninput = (() =>{
    let value = inputSliderAdultosNaoBebem.value;
    sliderValueAdultosNaoBebem.textContent = value
    sliderValueAdultosNaoBebem.style.left = value + "%"
    sliderValueAdultosNaoBebem.classList.add("show")
})

// ANIMAÇÃO DO BALÃO DAS CRIANÇAS
const sliderValueCriancas = document.querySelector("span#spanCriancas")
const inputSliderCriancas = document.querySelector("input.inputRange.criancas")

inputSliderCriancas.oninput = (() =>{
    let value = inputSliderCriancas.value;
    sliderValueCriancas.textContent = value
    sliderValueCriancas.style.left = (value * 2) + "%"
    sliderValueCriancas.classList.add("show")
})

// ANIMAÇÃO DO BALÃO DA DURAÇÃO
const sliderValueDuracao = document.querySelector("span#spanDuracao")
const inputSliderDuracao = document.querySelector("input.inputRange.duracao")

inputSliderDuracao.oninput = (() =>{
    let value = inputSliderDuracao.value;
    sliderValueDuracao.textContent = value
    sliderValueDuracao.style.left = (value * 5) + "%"
    sliderValueDuracao.classList.add("show")
})


// PARTE DA LÓGICA DO BOTÃO CALCULAR

// Variáveis com os INPUTS RANGE do usuário
const inputRangeAdultosTotal = document.querySelector("input.adultosTotal")
const inputRangeAdultosNaoBebem = document.querySelector("input.adultosNaoBebem")
const inputRangeCriancas = document.querySelector("input.criancas")
const inputRangeDuracao = document.querySelector("input.duracao")


// Variáveis com os CHECKBOX

// Carnes Bovinas
const checkboxAlcatra = document.querySelector("input#alcatra")
const checkboxPicanha = document.querySelector("input#picanha")
const checkboxContraFile = document.querySelector("input#contrafile")

// Carnes Suinas
const checkboxPernil = document.querySelector("input#pernil")
const checkboxBarriga = document.querySelector("input#barriga")
const checkboxLombo = document.querySelector("input#lombo")

// Acompanhamentos
const checkboxPao = document.querySelector("input#pao")
const checkboxQueijo = document.querySelector("input#queijo")
const checkboxCoracao = document.querySelector("input#coracao")
const checkboxCoxinha = document.querySelector("input#coxinha") 
const checkboxLinguica = document.querySelector("input#linguica")

// Bebidas
const checkboxRefrigerante = document.querySelector("input#refrigerante")
const checkboxAgua = document.querySelector("input#agua")
const checkboxSuco = document.querySelector("input#suco")
const checkboxCerveja = document.querySelector("input#cerveja")

// variável que pega o PARÁGRAFO do Resultado, pra colocar os itens depois
const paragrafoResultado = document.getElementsByTagName("p")[0]

// Função que é executada ao clicar no Botão CALCULAR
function calcular(){

    paragrafoResultado.innerHTML = "<h4>Você irá precisar de:</h4> <br>"

   

    PegarAtributoCheckedAlcatra()
    PegarAtributoCheckedContraFile()
    PegarAtributoCheckedPicanha()
    PegarAtributoCheckedPernil()
    PegarAtributoCheckedBarriga()
    PegarAtributoCheckedLombo()
    PegarAtributoCheckedPao()
    PegarAtributoCheckedQueijo()
    PegarAtributoCheckedCoracao()
    PegarAtributoCheckedCoxinha()
    PegarAtributoCheckedLinguica()
    PegarAtributoCheckedRefrigerante()
    PegarAtributoCheckedAgua()
    PegarAtributoCheckedSuco()
    PegarAtributoCheckedCerveja()

}

// CÁLCULO PARA CARNES DE BOI - ADULTOS
/* Carne de boi = 300g/pessoa         +4h = 400g/pessoa
Carne de Porco = 200g/pessoa       + 4h = 300g/pessoa
Acompanhamentos = 2 un/pessoa      +4h = 3un/pessoa
Bebidas = 500ml/pessoa/hora

Crianças = Adultos / 2
 */

function PegarAtributoCheckedAlcatra(){
    if (checkboxAlcatra.checked){
        console.log("Carne Alcatra Marcada")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoBoi(duracao) * adultos) + (verificarBoiCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal.toFixed(2)} Kg de Alcatra<br><br>` 

    }
    else{
        console.log("Carne Alcatra Não Marcado")
    }
}

function PegarAtributoCheckedContraFile(){
    if (checkboxContraFile.checked){
        console.log("Contra Filé Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoBoi(duracao) * adultos) + (verificarBoiCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal.toFixed(2)} Kg de Contra-Filé<br><br>` 
    }
    else{
        console.log("Contra Filé Não Marcado")
    }
}

function PegarAtributoCheckedPicanha(){
    if (checkboxPicanha.checked){
        console.log("Picanha Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoBoi(duracao) * adultos) + (verificarBoiCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal.toFixed(2)} Kg de Picanha <br><br>` 
    }
    else{
        console.log("Picanha Não Marcado")
    }
}

function PegarAtributoCheckedPernil(){
    if (checkboxPernil.checked){
        console.log("Pernil Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoPorco(duracao) * adultos) + (verificarPorcoCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal.toFixed(2)} Kg de Pernil <br><br>` 
    }
    else{
        console.log("Pernil Não Marcado")
    }
}

function PegarAtributoCheckedBarriga(){
    if (checkboxBarriga.checked){
        console.log("Barriga Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoPorco(duracao) * adultos) + (verificarPorcoCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal.toFixed(2)} Kg de Barriguinha de Porco <br><br>` 

    }
    else{
        console.log("Barriga Não Marcado")
    }
}

function PegarAtributoCheckedLombo(){
    if (checkboxLombo.checked){
        console.log("Lombo Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoPorco(duracao) * adultos) + (verificarPorcoCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal.toFixed(2)} Kg de Lombo de Porco <br><br>` 
    }
    else{
        console.log("Lombo Não Marcado")
    }
}

function PegarAtributoCheckedPao(){
    if (checkboxPao.checked){
        console.log("Pão Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoAcompanhamentos(duracao) * adultos) + (verificarAcompanhamentosCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal} unidades de Pão de Alho<br><br>` 
    }
    else{
        console.log("Pão Não Marcado")
    }
}

function PegarAtributoCheckedQueijo(){
    if (checkboxQueijo.checked){
        console.log("Queijo Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoAcompanhamentos(duracao) * adultos) + (verificarAcompanhamentosCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal} unidades de Queijo Coalho<br><br>`
    }
    else{
        console.log("Queijo Não Marcado")
    }
}

function PegarAtributoCheckedCoracao(){
    if (checkboxCoracao.checked){
        console.log("Coração Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = Math.ceil( (((verificarDuracaoAcompanhamentos(duracao) * adultos) + (verificarAcompanhamentosCriancas(duracao) * criancas))*3)/25)

        paragrafoResultado.innerHTML += `${qtdTotal} espetos de Coração (25 unidades)<br><br>`
    }
    else{
        console.log("Coração Não Marcado")
    }
}

function PegarAtributoCheckedCoxinha(){
    if (checkboxCoxinha.checked){
        console.log("Coxinha da Asa Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoAcompanhamentos(duracao) * adultos) + (verificarAcompanhamentosCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal} unidades de Coxinha da Asa<br><br>`
    }
    else{
        console.log("Coxinha da Asa Não Marcado")
    }
}

function PegarAtributoCheckedLinguica(){
    if (checkboxLinguica.checked){
        console.log("Linguiça Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let qtdTotal = (verificarDuracaoAcompanhamentos(duracao) * adultos) + (verificarAcompanhamentosCriancas(duracao) * criancas)

        paragrafoResultado.innerHTML += `${qtdTotal} unidades de Linguiça<br><br>`
    }
    else{
        console.log("Linguiça Não Marcado")
    }
}

function PegarAtributoCheckedRefrigerante(){
    if (checkboxRefrigerante.checked){
        console.log("Refrigerante Marcado")

        let criancas = inputRangeCriancas.value
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let adultosNaoBebem = inputRangeAdultosNaoBebem.value

        let qtdTotal = (adultosNaoBebem * duracao  * 500) + (criancas * duracao * 250)

        paragrafoResultado.innerHTML += `${qtdTotal/1000}L de Refrigerante<br><br>`
    }  
    else{
        console.log("Refrigerante Não Marcado")
    }
}

function PegarAtributoCheckedAgua(){
    if (checkboxAgua.checked){
        console.log("Água Marcado")

        let criancas = inputRangeCriancas.value
        let duracao = inputRangeDuracao.value
        let adultosNaoBebem = inputRangeAdultosNaoBebem.value

        let qtdTotal = (adultosNaoBebem * duracao  * 300) + (criancas * duracao * 200)

        paragrafoResultado.innerHTML += `${qtdTotal/1000}L de Água<br><br>`
    }
    else{
        console.log("Água Não Marcado")
    }
}

function PegarAtributoCheckedSuco(){
    if (checkboxSuco.checked){
        console.log("Suco Marcado")

        let criancas = inputRangeCriancas.value
        let duracao = inputRangeDuracao.value
        let adultosNaoBebem = inputRangeAdultosNaoBebem.value

        let qtdTotal = (adultosNaoBebem * duracao  * 500) + (criancas * duracao * 250)

        paragrafoResultado.innerHTML += `${qtdTotal/1000}L de Suco<br><br>`
    }
    else{
        console.log("Suco Não Marcado")
    }
}

function PegarAtributoCheckedCerveja(){
    if (checkboxCerveja.checked){
        console.log("Cerveja Marcado")
        let adultos = inputRangeAdultosTotal.value
        let duracao = inputRangeDuracao.value
        let adultosNaoBebem = inputRangeAdultosNaoBebem.value

        let qtdTotal = (adultos - adultosNaoBebem) * duracao * 300

        paragrafoResultado.innerHTML += `${Math.ceil(qtdTotal/350)} Latas de Cerveja<br><br>`
    }
    else{
        console.log("Cerveja Não Marcado")
    }
}

// Funções que retornam o valor para o cálculo de acordo com a DURAÇÃO
function verificarDuracaoBoi(inputRangeDuracao){
    if(inputRangeDuracao >= 4){
        return 0.4
    }
    else{
        return 0.3
    }
}

function verificarDuracaoPorco(inputRangeDuracao){
    if(inputRangeDuracao >= 4){
        return 0.3
    }
    else{
        return 0.2
    }
}

function verificarDuracaoAcompanhamentos(inputRangeDuracao){
    if(inputRangeDuracao >= 4){
        return 2
    }
    else{
        return 1
    }
}

function verificarBoiCriancas(duracao){
    if (duracao >= 4){
        return 0.2
    }
    else{
        return 0.15
    }
}

function verificarPorcoCriancas(duracao){
    if (duracao >= 4){
        return 0.15
    }
    else{
        return 0.1
    }
}

function verificarAcompanhamentosCriancas(duracao){
    if (duracao >= 4){
        return 1
    }
    else{
        return 0.5
    }
}