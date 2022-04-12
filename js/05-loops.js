/* Estruturas tradicionais: 

while      -> enquanto
do/while   -> faça/enquanto
for        -> para 
*/

// Exemplo loop While (enquanto)
console.log("while");

// Variável de controle do loop
/* obs.: normalmente é chamado de i, j ou k */
let i = 1;

while (i <=10 ){
    console.log(`valor de contador: ${i}`);
    i++; // incremento
}

console.log("---------------------");

console.log("do/while");

let j = 1; // variavel de controle
do {
    console.log(`J vale ${j}`);
    j++;
}while(j <= 6 ) // ou j < 4

console.log("---------------------");

console.log("FOR");

for(let i = 1; i <= 5; i++ ){
    console.log(`I vale: ${i}`);
}

console.log("------------");

console.log("loop e Estrutura de Dados");

// ARRAY (vetor)
let alunos = ["Eduardo", "Vagner", "Thalia", "Claudio", "Jéssica"];

for( let i = 0; i < 5; i++ ){
    console.log( alunos[i] );
}

/* sort() -> função para ordenar arrays*/ 
//console.log(alunos.sort() );


console.log("----------------------");

console.log("Loops exclusivos do JS");

// for/of: ótimo para Arrays
for( let aluno of alunos ){
    console.log(aluno);
}

// Objeto
let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volume: 3
};

// for/in

for(let dados in livro){
    console.log(livro[dados]);

}


