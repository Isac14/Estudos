var input = document.querySelector("#numero");
const btn = document.querySelector("#btn");
const tabuada = document.querySelector(".tabuada");

function mostraTabuada() {
  let numero = input.value;
  for (let multiplicador = 0; (multiplicador = 9); multiplicador++) {
    console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
  }
}

btn.addEventListener("click", mostraTabuada);
