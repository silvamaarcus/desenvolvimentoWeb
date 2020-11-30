var valorplan1 = 0
var valorplan2 = 0

function ExibeValor(p) {
    valorplan1 = parseFloat(p.getElementsByClassName("NotaTotalweb")[0].innerHTML) - parseFloat(document.getElementsByClassName("mediaweb")[0].innerHTML);

    if (p.getElementsByClassName("NotaTotalweb")[0].innerHTML > document.getElementsByClassName("mediaweb")[0].innerHTML)

        document.getElementById("Resultado").innerHTML = "Aluno está acima da média! " + "Valor da Nota: " + p.getElementsByClassName("NotaTotalweb")[0].innerHTML +
        " subtraido da média é: " + valorplan1;
    else
        document.getElementById("Resultado").innerHTML = "Aluno está abaixo da média! ";

    document.getElementById("Resultado").style.display = "block";
}

function ExibeValor1(p) {
    valorplan2 = parseFloat(p.getElementsByClassName("NotaTotal")[0].innerHTML) - parseFloat(document.getElementsByClassName("media2")[0].innerHTML);

    if (p.getElementsByClassName("NotaTotal")[0].innerHTML > document.getElementsByClassName("media2")[0].innerHTML)

        document.getElementById("Resultado").innerHTML = "Aluno está acima da média! " + "Valor da Nota: " + p.getElementsByClassName("NotaTotal")[0].innerHTML +
        " subtraido da média é: " + valorplan2.toFixed(2);
    else
        document.getElementById("Resultado").innerHTML = "Aluno está abaixo da média! ";

    document.getElementById("Resultado").style.display = "block";
}

function mOut() {

    document.getElementById("Resultado").style.display = "none";
}