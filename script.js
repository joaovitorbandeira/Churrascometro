// ANIMAÇÃO DO BALÃO DOS ADULTOS QUE BEBEM
const sliderValueAdultosTotal = document.querySelector("span#spanAdultosTotal");
const inputSliderAdultosTotal = document.querySelector(
  "input.inputRange.adultosTotal"
);
inputSliderAdultosTotal.oninput = () => {
  let value = inputSliderAdultosTotal.value;
  sliderValueAdultosTotal.textContent = value;
  sliderValueAdultosTotal.style.left = value + "%";
  sliderValueAdultosTotal.classList.add("show");
};
// ANIMAÇÃO DO BALÃO DOS ADULTOS QUE NÃO BEBEM
const sliderValueAdultosNaoBebem = document.querySelector(
  "span#spanAdultosNaoBebem"
);
const inputSliderAdultosNaoBebem = document.querySelector(
  "input.inputRange.adultosNaoBebem"
);
inputSliderAdultosNaoBebem.oninput = () => {
  let value = inputSliderAdultosNaoBebem.value;
  sliderValueAdultosNaoBebem.textContent = value;
  sliderValueAdultosNaoBebem.style.left = value + "%";
  sliderValueAdultosNaoBebem.classList.add("show");
};
// ANIMAÇÃO DO BALÃO DAS CRIANÇAS
const sliderValueCriancas = document.querySelector("span#spanCriancas");
const inputSliderCriancas = document.querySelector("input.inputRange.criancas");
inputSliderCriancas.oninput = () => {
  let value = inputSliderCriancas.value;
  sliderValueCriancas.textContent = value;
  sliderValueCriancas.style.left = value * 2 + "%";
  sliderValueCriancas.classList.add("show");
};
// ANIMAÇÃO DO BALÃO DA DURAÇÃO
const sliderValueDuracao = document.querySelector("span#spanDuracao");
const inputSliderDuracao = document.querySelector("input.inputRange.duracao");
inputSliderDuracao.oninput = () => {
  let value = inputSliderDuracao.value;
  sliderValueDuracao.textContent = value;
  sliderValueDuracao.style.left = value * 5 + "%";
  sliderValueDuracao.classList.add("show");
};

// PARTE DA LÓGICA DO BOTÃO CALCULAR

// Variáveis com os INPUTS RANGE do usuário
const inputRangeAdultosTotal = document.querySelector("input.adultosTotal");
const inputRangeAdultosNaoBebem = document.querySelector(
  "input.adultosNaoBebem"
);
const inputRangeCriancas = document.querySelector("input.criancas");
const inputRangeDuracao = document.querySelector("input.duracao");
// Variáveis com os CHECKBOX
// Carnes Bovinas
const checkboxAlcatra = document.querySelector("input#alcatra");
const checkboxPicanha = document.querySelector("input#picanha");
const checkboxContraFile = document.querySelector("input#contrafile");
// Carnes Suinas
const checkboxPernil = document.querySelector("input#pernil");
const checkboxBarriga = document.querySelector("input#barriga");
const checkboxLombo = document.querySelector("input#lombo");
// Acompanhamentos
const checkboxPao = document.querySelector("input#pao");
const checkboxQueijo = document.querySelector("input#queijo");
const checkboxCoracao = document.querySelector("input#coracao");
const checkboxCoxinha = document.querySelector("input#coxinha");
const checkboxLinguica = document.querySelector("input#linguica");
// Bebidas
const checkboxRefrigerante = document.querySelector("input#refrigerante");
const checkboxAgua = document.querySelector("input#agua");
const checkboxSuco = document.querySelector("input#suco");
const checkboxCerveja = document.querySelector("input#cerveja");
// variável que pega o PARÁGRAFO do Resultado, pra colocar os itens depois
const paragrafoResultado = document.getElementsByTagName("p")[0];

//VARIÁVEIS GLOBAIS DOS INPUTS
var adultos;
var adultosNaoBebem;
var criancas;
var duracao;

// Função que é executada ao clicar no Botão CALCULAR
function calc() {
  adultos = inputRangeAdultosTotal.value;
  adultosNaoBebem = inputRangeAdultosNaoBebem.value;
  criancas = inputRangeCriancas.value;
  duracao = inputRangeDuracao.value;

  //AO APERTAR O BOTÃO CALCULAR, SE JÁ TIVER CALCULADO UMA VEZ, FAZ LIMPAR O TEXTO PARA CALCULAR NOVAMENTE.
  paragrafoResultado.innerHTML = "";
  paragrafoResultado.innerHTML = "<h4>Você irá precisar de:</h4> <br>";

  mostrarResultadoCarnes({
    nome: "Alcatra",
    checkbox: checkboxAlcatra,
    gAdulto: verificarDuracaoBoi(duracao),
    gCrianca: verificarBoiCriancas(duracao),
  });

  mostrarResultadoCarnes({
    nome: "Contra-Filé",
    checkbox: checkboxContraFile,
    gAdulto: verificarDuracaoBoi(duracao),
    gCrianca: verificarBoiCriancas(duracao),
  });

  mostrarResultadoCarnes({
    nome: "Picanha",
    checkbox: checkboxPicanha,
    gAdulto: verificarDuracaoBoi(duracao),
    gCrianca: verificarBoiCriancas(duracao),
  });

  mostrarResultadoCarnes({
    nome: "Pernil",
    checkbox: checkboxPernil,
    gAdulto: verificarDuracaoPorco(duracao),
    gCrianca: verificarPorcoCriancas(duracao),
  });

  mostrarResultadoCarnes({
    nome: "Barriga",
    checkbox: checkboxBarriga,
    gAdulto: verificarDuracaoPorco(duracao),
    gCrianca: verificarPorcoCriancas(duracao),
  });

  mostrarResultadoCarnes({
    nome: "Lombo",
    checkbox: checkboxLombo,
    gAdulto: verificarDuracaoPorco(duracao),
    gCrianca: verificarPorcoCriancas(duracao),
  });

  mostrarResultadoAcompanhamentos({
    nome: "Pão de Alho",
    checkbox: checkboxPao,
    uAdulto: verificarDuracaoAcompanhamentos(duracao),
    uCrianca: verificarAcompanhamentosCriancas(duracao),
  });

  mostrarResultadoAcompanhamentos({
    nome: "Queijo Coalho",
    checkbox: checkboxQueijo,
    uAdulto: verificarDuracaoAcompanhamentos(duracao),
    uCrianca: verificarAcompanhamentosCriancas(duracao),
  });

  mostrarResultadoAcompanhamentos({
    nome: "Coração",
    checkbox: checkboxCoracao,
    uAdulto: verificarDuracaoAcompanhamentos(duracao),
    uCrianca: verificarAcompanhamentosCriancas(duracao),
  });

  mostrarResultadoAcompanhamentos({
    nome: "Coxinha da Asa",
    checkbox: checkboxCoxinha,
    uAdulto: verificarDuracaoAcompanhamentos(duracao),
    uCrianca: verificarAcompanhamentosCriancas(duracao),
  });

  mostrarResultadoAcompanhamentos({
    nome: "Linguiça",
    checkbox: checkboxLinguica,
    uAdulto: verificarDuracaoAcompanhamentos(duracao),
    uCrianca: verificarAcompanhamentosCriancas(duracao),
  });

  mostrarResultadosBebidas({
    nome: "Água",
    checkbox: checkboxAgua,
    mlAdulto: verificarBebidas(duracao),
    mlCrianca: verificarBebidasCrianca(duracao),
  });

  mostrarResultadosBebidas({
    nome: "Suco",
    checkbox: checkboxSuco,
    mlAdulto: verificarBebidas(duracao),
    mlCrianca: verificarBebidasCrianca(duracao),
  });

  mostrarResultadosBebidas({
    nome: "Refrigerante",
    checkbox: checkboxRefrigerante,
  });

  mostrarResultadosCervejas({
    nome: "Cerveja",
    checkbox: checkboxCerveja,
  });
}

// FUNÇÕES PARA MOSTRAR RESULTADOS

//CARNES DE BOI E PORCO
function mostrarResultadoCarnes({ nome, checkbox, gAdulto, gCrianca }) {
  if (checkbox.checked) {
    const qtd = calcularCarne(adultos, criancas, duracao, gAdulto, gCrianca);
    paragrafoResultado.innerHTML += `${qtd.toFixed(2)} Kg de ${nome}<br>`;
    console.log(`${nome} foi marcado`);
  } else {
    console.log(`${nome} não foi marcado`);
  }
}

function calcularCarne(adulto, crianca, duracao, gAdulto, gCrianca) {
  return adulto * duracao * gAdulto + crianca * duracao * gCrianca;
}

//ACOMPANHAMENTOS
function mostrarResultadoAcompanhamentos({
  nome,
  checkbox,
  uAdulto,
  uCrianca,
}) {
  if (checkbox.checked) {
    const qtd = Math.ceil(
      calcularCarne(adultos, criancas, duracao, uAdulto, uCrianca)
    );
    paragrafoResultado.innerHTML += `${qtd} Unidades de ${nome} <br>`;
    console.log(`${nome} foi marcado`);
  } else {
    console.log(`${nome} não foi marcado`);
  }
}

// BEBIDAS
function mostrarResultadosBebidas({ nome, checkbox }) {
  if (checkbox.checked) {
    const qtd =
      calcularBebidas(adultosNaoBebem, criancas, duracao, 500, 250) / 1000;
    paragrafoResultado.innerHTML += `${qtd}L de ${nome} <br>`;
    console.log(`${nome} foi marcado`);
  } else {
    console.log(`${nome} não foi marcado`);
  }
}

function calcularBebidas(
  adultosNaoBebem,
  crianca,
  duracao,
  mlAdulto,
  mlCrianca
) {
  return adultosNaoBebem * duracao * mlAdulto + crianca * duracao * mlCrianca;
}

function mostrarResultadosCervejas({ nome, checkbox }) {
  if (checkbox.checked) {
    const qtd = Math.ceil(
      calcularCerveja(adultos, adultosNaoBebem, duracao, 500) / 350
    );
    paragrafoResultado.innerHTML += `${qtd} Latas de ${nome} <br>`;
    console.log(`${nome} foi marcado`);
  } else {
    console.log(`${nome} não foi marcado`);
  }
}

function calcularCerveja(adulto, adultosNaoBebem, duracao, mlAdulto) {
  return (adulto - adultosNaoBebem) * duracao * mlAdulto;
}

// Funções que retornam o valor para o cálculo de acordo com a DURAÇÃO
function verificarDuracaoBoi(inputRangeDuracao) {
  if (inputRangeDuracao >= 4) {
    return 0.4;
  } else {
    return 0.3;
  }
}

function verificarDuracaoPorco(inputRangeDuracao) {
  if (inputRangeDuracao >= 4) {
    return 0.3;
  } else {
    return 0.2;
  }
}

function verificarDuracaoAcompanhamentos(inputRangeDuracao) {
  if (inputRangeDuracao >= 4) {
    return 2;
  } else {
    return 1;
  }
}

function verificarBoiCriancas(duracao) {
  if (duracao >= 4) {
    return 0.2;
  } else {
    return 0.15;
  }
}

function verificarPorcoCriancas(duracao) {
  if (duracao >= 4) {
    return 0.15;
  } else {
    return 0.1;
  }
}

function verificarAcompanhamentosCriancas(duracao) {
  if (duracao >= 4) {
    return 1;
  } else {
    return 0.5;
  }
}

function verificarBebidas(duracao) {
  return 1;
}

function verificarBebidasCrianca(duracao) {
  return 1;
}
