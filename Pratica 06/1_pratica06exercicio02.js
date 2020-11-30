function listar() {
    var i, x = document.getElementById("li");
    for (i = 0; i < x.length; i++)
        document.getElementById("resposta").innerHTML += x[i].innerHTML + "";
}
