// Selecionando elementos
const inputInicial = document.querySelector("#data1");
const inputFinal = document.querySelector("#data2");
const input = document.querySelector("#data");
const enviar = document.querySelector("#enviar");
const diasCalendario = document.querySelectorAll("td");
const divIntervalo = document.querySelector("#intervalo");

let diaInicialInt;
let diaFinalInt;

enviar.addEventListener("click", function () {
  for (let x = 0; x < 40; x++) {
    diasCalendario[x].style.backgroundColor = "white";
    diasCalendario[x].style.fontWeight = "400";
  }

  dataInicial();
  dataFinal();
  intervalo();
});

function dataInicial() {
  let dataInicial = inputInicial.value; //pega o valor da data
  let diaInicial = dataInicial.slice(-2); //pega o valor do dia
  diaInicialInt = parseInt(diaInicial); //transforma o valor de str para int

  diasCalendario[diaInicialInt + 2].style.backgroundColor = "lightskyblue";
  diasCalendario[diaInicialInt + 2].style.fontWeight = "bold";
}

function dataFinal() {
  let dataFinal = inputFinal.value; //pega o valor da data
  let diaFinal = dataFinal.slice(-2); //pega o valor do dia
  diaFinalInt = parseInt(diaFinal); //transforma o valor de str para int

  diasCalendario[diaFinalInt + 2].style.backgroundColor = "lightskyblue";
  diasCalendario[diaFinalInt + 2].style.fontWeight = "bold";
}

function intervalo() {
  for (let x = diaInicialInt + 3; x < diaFinalInt + 2; x++) {
    diasCalendario[x].style.backgroundColor = "orange";
    diasCalendario[x].style.fontWeight = "bold";
  }

  let intervalo = diaFinalInt - diaInicialInt;
  divIntervalo.innerText = `Intervalo: ${intervalo} dias`;
}

enviar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
