/* Estrutura condicional
if, else (senão), else if (senão se) 

operadores relacionais (usados com condicionais )
> maior que 
< menor que 
>=maior ou igual 
<= menor ou igual
== igualdade
!= diferente


*/

// Exemplo 1: condicional SIMPLES
let numero = 10;

if(numero > 0){
    console.log(`${numero} é maior que zero`);

}


// Exemplo 2: condicional COMPOSTA (if/ELSE)
let aluno = "João";
let nota1 = 8;
let nota2 = 7;
let media = (nota1 + nota2) / 2;

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);

let situacao; // underfined (indefinida)

if(media >=7 ){
    console.log("aprovado");

} else {
    console.log("reprovado");
}

console.log(situacao);

// Exemplo 3: condicional ENCADEADA (if, ELSE if, ELSE)
let desempenho;
if(meidia <3){
    desempenho = "péssimo";
} else if(media <5){
    desempenho = "ruim";
} else if(media < 7){
  desempenho = "regular";
  } else if (media <9){
      desempenho = "bom";
} else {
    desempenho = "otimo";
}        

console.log(desempenho);
