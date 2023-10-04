// Selecionando elementos
const input = document.querySelector("#numero");
const btn = document.querySelector("#btn");
const divTabuada = document.querySelector(".tabuada");

// Funções
function mostraTabuada() {
  divTabuada.innerHTML = "";
  let numero = input.value;
  for (multiplicador = 1; multiplicador < 11; multiplicador++) {
    let resultado = `${numero} x ${multiplicador} = ${numero * multiplicador}`;
    console.log(resultado);

    let p = document.createElement("p");
    p.textContent = resultado;
    divTabuada.appendChild(p);
  }
}

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    mostraTabuada();
  }
});

btn.addEventListener("click", mostraTabuada);
