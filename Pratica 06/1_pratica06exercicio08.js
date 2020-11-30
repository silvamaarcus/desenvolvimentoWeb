//Declarando as variaveis;
var total = 0; 
var max = 0; //Maior Valor;

function maiorvalor() {
    var i, vet = new Array(6);
    for (i = 0; i < vet.length; i++) {
        vet[i] = prompt("Informe um número real: ");
    }
    for (i = 0; i < vet.length; i++) {
        document.getElementById("saida").innerHTML = document.getElementById("saida").innerHTML + ("vet[" + i + "] = " + vet[i] + "<br/>");
    }

    max = Math.max.apply(null, vet); //Encontrar o maior valor

    document.getElementById("saida").innerHTML = document.getElementById("saida").innerHTML + ("<p id='teste'> O maior valor dentro do array é : <p>" + max);
}