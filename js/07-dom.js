/* Funções (ou metodos) de acesso/seleção ao DOM

-getElementById   -> seleciona UM elemento através do id
-querySelector    -> seleciona UM elemeto através de um seletor
-querySelectorAll -> selecione VARIOS elemeto através de seletor
*/


//Exemplos

/* const titulo = document.getElementById("titulo-principal"); */

const titulo = document.querySelector("#titulo-principal");
const subtitulos = document.querySelectorAll("h2")

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[0]);



// Leitura do conteúdo
console.log( titulo.textContent );
console.log( subtitulos[1].textContent );

// Alteração do conteúdo
titulo.textContent = "Olá, meu velho amigo."
subtitulos[0].innerHTML ="<i> Aprendendo DOM <i>"


// Manipulando CSS via JS 

//1) Inline
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "lightblue";
pagina.style.fontFamily = "Verdana";
pagina.style.margin = 0;


//2) Classe
/* Para selecionar algum elemento da lista first-child, last-child ou nth-child(numero). */

const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem);


primeiroItem.classList.add("destaque-item");