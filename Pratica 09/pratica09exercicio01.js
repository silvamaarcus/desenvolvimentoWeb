function validarformulario() { //Função de validação do formulário;
    var resp = true; 
    var mensagem = "";

    if (login.value == "") {
        mensagem += "\n Informe seu login!"
        resp = false;
    }
    if (email.value == "") {
        mensagem += "\n Informe seu e-mail!"  
        resp = false;
    }
    if (datanasc.value == "") {
        mensagem += "\n Informe sua data de nascimento!"  
        resp = false;
    }
    if (senha.value == "") {
        mensagem += "\n Informe sua senha!"  
        resp = false;
    }
    if (confsenha.value == "") {
        mensagem += "\n Confirme sua senha!"  
        resp = false;
    }
    if (sexo.value == "") {
        mensagem += "\n Informe sua orientação sexual!"  
        resp = false;
    }
    if (cidade.value == "") {
        mensagem += "\n Informe sua cidade!"  
        resp = false;
    }
    if (home.value == "") {
        mensagem += "\n Informe seu endereço de site!"  
        resp = false;
    }
    if  (mensagem != "")  
        alert(mensagem);
        return resp;
    }

    function reescrever() {
        if (home.value == "")
            home.value = "https://"
    }