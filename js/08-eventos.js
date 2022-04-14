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

    if (botao.textContent == 'Ativar') {

        botao.textContent = 'Desativar'
    } else {
        botao.textContent = "Ativar";
    }


});


/* Exemplo 03: simulação de cadastro */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");


// Detectar o acionamento do formulário
// Obs.: a função dentro do listener, é chamada de Callback
formulario.addEventListener("submit", function(event){
    /* Anulando o comportamento padrão do navegador 
    (redirecionando o formulário)  */
    event.preventDefault();


    //1) Capturar os dados digitados nos campos 
    let nome = campoNome.value;
    let nota1 = parseFloat (campoNota1.value);
    let nota2 = parseFloat (campoNota2.value);

    // 2) Calcular a média das notas
    let media = (nota1 + nota2) /2;

   let situacao; 

if(media >= 7){
    situacao = "aprovado";

} else {
    situacao = "reprovado";
}

formulario.reset();

campoNome.focus();


    //3) Criar elemento dinamicamente via JS

    //3.1) Criar o elemnto/tag
    let paragrafo = document.createElement("p");

    // 3.2) Montar o conteudo da tag
    paragrafo.innerHTML = `<b>${nome}<b> - <i>${media}</i> - ${situacao}`;

    // 3.3) Adicionar tag/conteúdo à div de resultados
    divResultados.appendChild(paragrafo);

    

 


    
    
    

    /*Exercicio 
    1) Programe o necessário para determinar se o aluno está
    aprovado ou reprovado. Critério: média maior/igual a 7 
    aprovado, caso contrário reprovado.
    
    2) Mostre a situação do aluno junto com o nome e a media
    
    3) Desafio: faça com que os campos do formulário
    sejam resetados ao enviar.
    */

    
});



