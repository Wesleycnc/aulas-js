/* Comando de saida de dados */
        /* Sempre que trabalhar com textos
        devemos colocá-lo entre aspas SIMPLES '',
        DUPLAS "" ou crase `` */
        console.log("Olá JavaScript!");

        /* Variaveis e Constantes 
        Espaços identificados na memoria para
        armazenar dados temporariamente*/

        // Variável
        let ano = 2022;

        // Constante: Valor imutavel (não muda)
        const aluno = "Wesley";

        console.log(ano);
        console.log(aluno);

        console.log(ano, aluno);

        /* Operações matemáticas 
        + (adição)
        - (subtração)
        / (divisão)
        * (multiplicação)*/
       let preco = 1500;
       let desconto = 250;
       let precoFinal = preco - desconto;

       console.log(preco, desconto, precoFinal);

       let produto = "TV led";

       /* A TV led custava 1500 reais. */

        // 1ª Forma (tradicional) - CONCATENAÇÃO
        console.log("A"+produto+"custava"+preco+" reais" );   
        
        // 2ª Forma (moderna) - Template String/Literal
        console.log(`A ${produto} custava ${preco} reais.`);
