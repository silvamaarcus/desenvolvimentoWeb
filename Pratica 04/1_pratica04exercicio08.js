/* Programa para somar numéros ímpares selecionados dentro de um intervalo. Intervalo definido por um limite, 
feito pelo usuario. */ 

var i = 0; n = prompt("Informe um número: ");
// var i = 0  -> valor inicial.
// n -> valor sugerido pelo usuario.

console.log("Números ímpares não negativos no intervalo de [0", + n + "]: ");
//Info para progamador saber o que será calculado e impresso.

var soma = 0;
do {
  if(i % 2 != 0){ // (!=) -> Selecionar números ímpares; (==) Selecionar números pares;
    soma += i; //soma = soma + i;
  }
  i++; //incremento de soma + 1 (um) até chegar no limite (n) definido pelo usuário.
} while (i <= n) //Aplica-se o "if", até quando o "i" for igual ao limite (n).

document.write("Soma dos números ímpares não negativos é: " + soma);
//Impressão com resultado final para o usuario.