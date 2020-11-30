var num1, num2
    num1 = parseInt(prompt("Informe um valor positivo e maior que zero: "))
    if (num1 <= 0)
        alert ("Não é possível excutar a função. Informe um valor maior que zero!")
    else
    num2 = parseInt(prompt("Informe um valor positivo e maior que zero: "))
    if (num2 <= 0)
        alert ("Não é possível excutar a função. Informe um valor maior que zero!")
    else 
var resultado = Math.log(num1)/Math.log(num2)
    document.write("<div id='resp'> Resultado: " + resultado +"</div>")