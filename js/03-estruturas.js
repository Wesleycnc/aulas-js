/* Estruturas de Dados no Javascript

ARRAY (VETOR)
Lista de dados indexados

*/

// Acessando o aluno armazenado no indice 1 
let alunos =  ["Tiago", "joão", "Marilia", "Vagner"];
console.log(alunos[1]); /* João */
console.log(alunos[3]); /* Vagner */

// Da forma abaixo, conseguimos ver os indices (números)
console.log(alunos);

/* Exercicio Array:
Crie um array contendo os seguintes dados de uma pessoa:
-Nome e sobrenome
-Idade
-Cidade
-Estado */

/* Mostre uma frase no console conforme o exemplo abaixo:
Fulano da silva é da cidade de São Paulo e tem 20 anos. */

let dados = ["Wesley Caldas", 18, "São Paulo", "SP"];

console.log(

`O ${dados[0]} é da cidade de ${dados[2]} e tem ${dados[1]} anos. `
    
    );


 console.log("----------------------------");
 
 /* Objeto
 Lista de dados não-indexados */
 let filme = {
    //  Propriedades: valor
    titulo: "Homem Aranha",
    ano: 2021,
    genero: "Ação/Ficção",

    clssificacao: 16
 };

 console.log(filme.titulo); 
 console.log(filme.genero); 
 console.log( `${filme.titulo} foi lançado em ${filme.ano} com 
 classificação de +${filme.clssificacao}` );

 /* Exercicio de Objeto
 1) Crie um novo objeto contendo os dados (ficticios)
 de um pedido de uma loja virtual. Exemplo:
 -data do pedido
 -produto comprado
 -preço do pedido
 -prazo de entrega */

 /* 2) Mostre uma frase contendo as seguintes informações:
 produto XYZ foi comprado em 07/04/2022 com entrega em 7 dias úteis */

 let pedido = {
     data: "07/04/2022",
     produto: "Fogão",
     preco: 1000,
     entrega: 7
 }

 console.log( `O ${pedido.produto} foi comprado em ${pedido.data} com entrega até ${pedido.entrega} dias úteis `);
 

