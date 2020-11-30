function validarformulario() { //Função de validação do formulário;
    var resp = true; 
    var mensagem = "";

    if (nome.value == "") {
        mensagem += "\n Informe seu nome!"
        resp = false;
    }
    if (email.value == "") {
        mensagem += "\n Informe seu e-mail!"
        resp = false;
    }
    if (tipoContato.value == "") {
        mensagem += "\n Selecione seu tipo de comentário!"
        resp = false;
    }
    if  (mensagem != "")  
        alert(mensagem);
        return resp;
    }