function validarFormulario() {
    var resp = true, mensagem = "";

    if (login.value == "") {
        mensagem += "\n Informe seu login!"   //      \n -> quebra de linha no js;
        resp = false;
    }

    if (mensagem != "")
        alert(mensagem);
        
    return resp;

}