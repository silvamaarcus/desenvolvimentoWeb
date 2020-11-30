var n1 = 0;
var n2 = parseInt(prompt("Informe um número inteiro: "));

//Múltiplos de 3 e soma dos intervalos;
function multide3() {
  document.write("<span class='resultado1'> Múltiplos de 3: " + "</span>");
  var i = n1;
  var soma = 0
  for (i = n1; i <= n2; i++) {
    if (i % 3 == 0) {
      soma += i;
      document.write("<span class='resultado1'>" + i + ", ");
    }
  } document.write("<br>" + "<span class='resultado1'> Soma dos Múltiplos: " + soma + "." + "</br>");
}

//Múltiplos de 5 e soma dos intervalos;
function multide5() {
  document.write("<span class= 'resultado2'> Múltiplos de 5: " + "</span>");
  var i = n1;
  var soma = 0
  for (i = n1; i <= n2; i++) {
    if (i % 5 == 0) {
      soma += i;
      document.write("<span class='resultado2'>" + i + ", ");
    }
  } document.write("<br>" + "<span class='resultado2'> Soma dos Múltiplos: " + soma + "." + "</br>");
}

//Potência de 2 e soma dos intervalos;
function potenciade2 () {
  document.write("<span class='resultado3'> Potência de Dois (2^x):" + "</span>");
  var i = n1;
  var soma = 0;
  for (i = n1; i <= n2; i++) {
      var x = Math.log2(i);
      if (x % 1 == 0) {
        document.write("<span class='resultado3'>" + i + ", ");
          soma += i;
      }
  } document.write("<br>" + "<span class='resultado3'> Soma do resultados: " + soma + "." + "</br>");
}

//Base de 3 e soma dos intervalos;
function basede3 () {
  document.write("<br>" + "<span class='resultado4'> Resultados para x³: " + "</span>");
  var i = n1
  var j = n1
  var soma = 1
  for (i = n1; i <= n2; i++) {
      for (j = n1; j <= n2; j++) {
          var k = parseFloat((Math.log (i) / Math.log (j)).toFixed(10))
          if (k == 3) {
            document.write("<span class='resultado4'>" + i + ", ");
              soma += i;
          }
      }
  }
  document.write("<br>" + "<span class='resultado4'> Soma do resultados: " + soma + "." + "</br>");
}
