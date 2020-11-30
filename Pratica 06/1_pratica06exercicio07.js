var total =0;

mediaNumeros()

function mediaNumeros () {
    var i, vet = new Array (5);
    for (i=0; i< vet.length; i++) {
        vet [i] = prompt ("Informe um número: ")
    }
    for (i=0; i< vet.length; i++) {
        document.write ("vet [" + i + "] = " + vet [i] + "<br/>");
    }
    for (i=0; i< vet.length; i++) {
        total += (parseInt (vet[i])) 
    }
    media = vet.length 
    document.write("(<br>" + "<p id='resultado'> A média é: " + "</p>" + total /media);
} 


