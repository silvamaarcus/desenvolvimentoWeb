//Entrada e impressão de dados;
var n1 = prompt("Informe o primeiro número: ");
var n2 = prompt("Informe o segundo número: ");
document.write ("<span class='resultado1'> O primeiro número é: " + n1 + "</span>");
document.write ("<br>" + "<span class='resultado1'> O segundo número é: " + n2 + "</span>");

//Processamento e impressão de dados;
if (n1>n2)
document.write ("<br>"+ "<span class='textovermelho'> O número " + n1 + " é maior que o número " + n2 + "</span>");
else 
document.write ("<br>"+"<br>"+"<span class='textovermelho'> O número " + n1 + " é menor que o número " + n2 + "</span>");

//Condição de Raiz Quadrada;
if (n1>n2)
document.write("<br>"+ "<span class='textoazul'> A raiz quadrada do maior número é: " + (Math.sqrt(n1).toFixed(2) +"</span>"));
else
document.write("<br>"+ "<span class='textoazul'> A raiz quadrada do maior número é: " + (Math.sqrt(n2).toFixed(2) +"</span>"));

//Condição de Potência;
if (n1>n2)
document.write("<br>"+ "<span class='textolaranja'> O menor número ao quadrado é: " + (Math.pow(n2, 2).toFixed(2) +"</span>"));
else
document.write("<br>"+ "<span class='textolaranja'> O menor número ao quadrado é: " + (Math.pow(n1, 2).toFixed(2) +"</span>"));