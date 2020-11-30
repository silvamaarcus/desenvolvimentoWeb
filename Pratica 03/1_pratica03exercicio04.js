var raio
    raio = parseFloat(prompt("Informe o raio: "))
if (raio <= 0)
    alert("Não é possível excutar a função. Informe um valor maior que zero!")
else
var area = Math.pow(raio,2)
    document.write("A = " + ((area * Math.PI).toFixed(2)) + "m²")
