const inputPalavra = document.querySelector("#palavra");
const lista = document.querySelector("#lista");
const palavras = lista.querySelectorAll("li");
var listaPalavras = [];

palavras.forEach((item) => {
  listaPalavras.push(item.innerText);
});

console.log(listaPalavras);

inputPalavra.addEventListener("input", function () {
  console.log(inputPalavra.value);
  for (let x = 0; x < listaPalavras.length; x++) {
    if (inputPalavra.value == listaPalavras[x]) {
      palavras[x].setAttribute("class", "negrito");
    } else {
      palavras[x].classList.remove("negrito");
    }
  }
});
