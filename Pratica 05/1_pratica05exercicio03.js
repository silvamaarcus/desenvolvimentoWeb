//Preenchendo e definindo o intervalo;
var n1 = parseInt(prompt("Informe o menor número"));
var n2 = parseInt(prompt("Informe o maior número"));

//Condição para destacar os numeros pares dentro do intervalo entre "n1" e "n2";
function numerospares() {
    document.write("Números Pares dentro do intervalo oferecido: ") // Impressão com os dados oferecidos.
    var i = n1;
    for (i = n1; i <= n2; i++) {
        if (i % 2 == 0) {
            document.write(i + ", "); //Impressão com resultado final para o usuario.
        }
    } 
}
