function listar() {
    var i, vetor = document.getElementById("cidade");
    for (i = 0; vetor.length; i++)
        document.getElementById("respota").innerHTML += "Valor: " + vetor[i].value + ", " + "Tag HTML: " + vetor[i].tagName + ", " + "Tamanho visível: " + vetor[i].size + ", " + "Número máximo de caracteres do string informado: " + vetor[i].maxLenght + ", " + "Placeholder: " + vetor[i].placeholder + "<br>";
}