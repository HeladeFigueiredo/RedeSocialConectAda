class cadastrarUsuario{
    constructor(){

    }

    verificarSenha (){

        var senhaLogin = document.getElementById("senhaLogin");
        confirmarSenha = document.getElementById("confirmarSenha");
            
            if(senhaLogin.value != confirmarSenha.value) {
                confirmarSenha.setCustomValidity("Senhas diferentes!");
            } else {
                confirmarSenha.setCustomValidity('');
            }

            senhaLogin.onchange = validateSenhaLogin;
            confirmarSenha.onkeyup = validateSenhaLogin;
    }
    
}
