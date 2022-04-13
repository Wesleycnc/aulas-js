// Exemplo 01

const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem")


// Monitor/ouvinte de Evento 
subExemplo01.addEventListener("click", function(){
    msg.textContent = "Oláaaaaaa!!!";
    msg.style.fontSize = "25px";
    subExemplo01.style.backgroundColor = "yellow"
});

subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = "";
});


/* Exemplo 02: modo noturno */
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
});