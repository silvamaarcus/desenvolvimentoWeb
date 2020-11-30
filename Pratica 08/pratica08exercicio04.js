var um = "TÍTULO<br>Contúdo 1<br>Conteúdo 2<br>Conteúdo 3"
var dois = "TÍTULO<br>Contúdo 4<br Conteúdo 5<br>Conteúdo 6"
var tres = "TÍTULO<br>Contúdo 7<br>Conteúdo 8<br>Conteúdo 9"
var quatro = "TÍTULO <br> Contúdo 10 <br> Conteúdo 11 <br> Conteúdo 12"
function opcao (p) {
    var operacao = p
    switch (operacao) {
    case 1:
    document.getElementById("saida").innerHTML = um
    break
    case 2:
    document.getElementById("saida").innerHTML = dois
    break
    case 3:
    document.getElementById("saida").innerHTML = tres
    break
    case 4:
    document.getElementById("saida").innerHTML = quatro
    break
}
}