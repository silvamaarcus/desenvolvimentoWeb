//Escolha o tipo de operação matematica;
var operacao = parseInt(prompt("Informe o código da operação desejada: \n" + "[1] Área de Retângulo. \n" + "[2] Área de um Triângulo. \n" + "[3] Área de um trapézio. \n"));

//Inserir os dados de operação;
var n1 = parseInt(prompt("Informe o valor da base: "));
var n2 = parseInt(prompt("Informe o valor da altura: "));
var n3 = parseInt(prompt("Informe o valor de base menor,se houver. Caso contrário digite 0): "));

switch (operacao) {
    case 1:
        document.write("Área do Retângulo: " + (n1 * n2));
        break;
    case 2:
        document.write("Área do Triângulo: " + ((n1 * n2) / 2));
        break;
    case 3:
        document.write("Área do Triângulo: " + ((n1 + n3) / n2)/2);
        break;
    default:
        document.write("Código Inválido!!!");
}

