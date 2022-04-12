'use strict'; // MODO ESTRITO

/* Funções são blocos de codigos que podem ser executado e reaproveitado
em praticamente qualquer parte da aplicação.

Usar funções também é uma forma de separar 
a logica e organizar melhor sua programação. */

// Sintaxe tradicional
function linha(){
    console.log("------------");

}

let curso = "Programador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso: ${curso}`);
linha()
console.log(`Escola: ${escola}`);
linha()
console.log(`Ano: ${ano}`);



                //parametros/argumentos
function soma(valor1, valor2 ){
    let total = valor1 + valor2;
    return total;

}

console.log( soma(10, 5) );
// console.log(total); // erro, pois é variavel local

let resultado = soma(100, 50);
console.log(resultado);

if(resultado <1000){
    console.log("Abaixo da meta");
}