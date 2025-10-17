const sliders = document.querySelectorAll("input[id^='input']")
const inputs = document.querySelectorAll('input[id]:not([id*="input"])')
const paragrafoResultado = document.getElementsByTagName("p")[0];
const  botaoCalcular = document.getElementById('calcular');
// Variáveis com os INPUTS RANGE do usuário
const inputRangeAdultosTotal = document.querySelector("input.adultosTotal");
const inputRangeAdultosNaoBebem = document.querySelector(
  "input.adultosNaoBebem"
);
const inputRangeCriancas = document.querySelector("input.criancas");
const inputRangeDuracao = document.querySelector("input.duracao");

//ANIMAÇÃO DOS INPUT RANGES
sliders.forEach(slider =>{
  slider.addEventListener('input', function(){
    const value = this.value;
    const spanId = this.id.replace('input', 'span');
    const span = document.getElementById(spanId);
    if (spanId != 'spanCriancas' && spanId != 'spanDuracao'){
      if (span){
        span.textContent = value;
        span.style.left = value + "%";
        span.classList.add("show");
      }
    } else if (spanId != "spanDuracao"){
      span.textContent = value;
      span.style.left = value * 2 + "%";
      span.classList.add("show");
    } else if (spanId != "spanCriancas"){
      span.textContent = value;
      span.style.left = value * 5 + "%";
      span.classList.add("show");
    }
  })
})

// PARTE DA LÓGICA DO BOTÃO CALCULAR
var adultos
var adultosNaoBebem
var criancas
var duracao

// Função que é executada ao clicar no Botão CALCULAR
botaoCalcular.addEventListener('click', ()=>{

  adultos = inputRangeAdultosTotal.value;
  adultosNaoBebem = inputRangeAdultosNaoBebem.value;
  criancas = inputRangeCriancas.value;
  duracao = inputRangeDuracao.value;

  paragrafoResultado.innerHTML = "<h4>Você irá precisar de:</h4> <br>"

  const inputsChecked = [...inputs].filter((input) => input.checked)

  inputsChecked.forEach(input =>{
    const carnesBovinas = ['alcatra', 'picanha', 'contrafile']
    const carnesSuinas = ['pernil', 'barriga', 'lombo']
    const acompanhamentos = ['pao', 'queijo', 'coracao', 'coxinha', 'linguica']
    const bebidas = ['refrigerante', 'agua', 'suco']
    const cerveja = ['cerveja']
    const todasCarnes = [...carnesBovinas, ...carnesSuinas]

    const item = document.querySelector(`label[for="${input.id}"]`).innerText;

    if(todasCarnes.includes(input.value)){
        mostrarResultadoCarnes({
        nome: item,
        checkbox: input,
        gAdulto: verificarDuracaoBoi(duracao),
        gCrianca: verificarBoiCriancas(duracao),
      });
    }

    if(acompanhamentos.includes(input.value)){
    mostrarResultadoAcompanhamentos({
    nome: item,
    checkbox: input,
    uAdulto: verificarDuracaoAcompanhamentos(duracao),
    uCrianca: verificarAcompanhamentosCriancas(duracao),
  });
  }

  if (bebidas.includes(input.value)){
    mostrarResultadosBebidas({
      nome: item,
      checkbox: input,
      mlAdulto: verificarBebidas(duracao),
     mlCrianca: verificarBebidasCrianca(duracao)
    })
  }

  if (cerveja.includes(input.value)){
    mostrarResultadosCervejas({
      nome: item,
      checkbox: input
    })
  }

  /* FIM DA FUNÇÃO DE CALCULAR */
  })
}
)
//CARNES
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