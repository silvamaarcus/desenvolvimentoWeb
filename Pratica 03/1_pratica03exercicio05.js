var raio 
raio = parseFloat(prompt("Informe o raio: "))
if (raio <= 0)
    alert("Não é possível excutar a função. Informe um valor maior que zero!")
else 
var esfera = (4/3*(Math.PI)*(Math.pow(raio ,3)));
   //document.write ("V = " + esfera .toFixed(2)) ----> Pode ser feito assim, sem alteração visual.
   document.write ("<div id='resultado'> V = " + esfera .toFixed(2) + "m²" + " </div>");

  
