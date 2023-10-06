// Seleção de elementos
const inputPalavra = document.querySelector("#palavra");
const lista = document.querySelector("#lista");
const palavras = lista.querySelectorAll("li");
var listaPalavras = [];

// Inserindo palavras da lista em um array
palavras.forEach((item) => {
  listaPalavras.push(item.innerText);
});

console.log(listaPalavras);

// Comparando input com itens da lista
inputPalavra.addEventListener("input", function () {
  for (let x = 0; x < listaPalavras.length; x++) {
    if (
      inputPalavra.value != "" &&
      listaPalavras[x]
        .toLowerCase()
        .startsWith(inputPalavra.value.toLowerCase())
    ) {
      palavras[x].setAttribute("class", "negrito");
    } else {
      palavras[x].classList.remove("negrito");
    }
  }
});
