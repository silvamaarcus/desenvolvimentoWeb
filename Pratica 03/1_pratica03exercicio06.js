//Ler Valores.
var capital = prompt('Informe o capital inicial: '); 
var juros = prompt('Informe a taxa de juros: '); 
var tempo = prompt('Informe o prazo de investimento: '); 

//Calcular juros.
var juros = juros / 100

//Calcular o montante.
var montante = capital * Math.pow ((1 + juros), tempo)

//Transformar resultado em um string com duas casas decimais.
var total = montante .toFixed(2);

//Calcular o valor do montante mensal e transformá-lo em uma string com duas casas decimais.
var mensal = (total/tempo).toFixed(2);

//Apresentar o resultado TOTAL e MENSAL para o usuário.
document.write ("<p id= 'texto1'> Total = R$ " + total + "</p>");
document.write ("<p id= 'texto2'> Mensal = R$ " + mensal + "</p>")