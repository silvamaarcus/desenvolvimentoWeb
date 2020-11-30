function ExibeValor(p) {
    if (p.getElementsByClassName("NotaTotal")[0].innerHTML >= 70 && p.getElementsByClassName("Faltas")[0].innerHTML < 3)
        document.getElementById("Resultado").innerHTML = "Aprovado";
    else
        document.getElementById("Resultado").innerHTML = "Reprovado";

    document.getElementById("Resultado").style.display = "block";
}

function mOut() {

    document.getElementById("Resultado").style.display = "none";
}