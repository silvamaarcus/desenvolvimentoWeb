function somar() {
    var n1 = document.getElementById("primeiroNumero").value;
    var n2 = document.getElementById("segundoNumero").value;
    var soma = parseInt(n1) + parseInt(n2);
    document.getElementById("soma").innerHTML = soma;
}

function subtrair() {
    var n3 = document.getElementById("terceiroNumero").value;
    var n4 = document.getElementById("quartoNumero").value;
    var subtrair = parseInt(n3) - parseInt(n4);
    document.getElementById("sub").innerHTML = subtrair;
}

function multiplicar() {
    var n5 = document.getElementById("quintoNumero").value;
    var n6 = document.getElementById("sextoNumero").value;
    var multiplicar = parseInt(n5) * parseInt(n6);
    document.getElementById("multi").innerHTML = multiplicar;
}

function dividir() {
    var n7 = document.getElementById("setimoNumero").value;
    var n8 = document.getElementById("oitavoNumero").value;
    var dividir = parseInt(n7) / parseInt(n8);
    document.getElementById("divi").innerHTML = dividir;
}

function potencia() {
    var n9 = document.getElementById("nonoNumero").value;
    var n10 = document.getElementById("decimoNumero").value;
    var potenciar = Math.pow (parseInt(n9),  parseInt(n10));
    document.getElementById("pote").innerHTML = potenciar;
}
