function mOver(p) {

    document.getElementById("mostrar").innerHTML = "Dados do Aluno: " + p.getElementsByClassName("cpf")[0].value;
    document.getElementById("mostrar").style.display = "block";
}

function mOut() {

    document.getElementById("mostrar").style.display = "none";
}