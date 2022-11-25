class cadastrarUsuario{

    // Recupera o valor digitado no campo de nome do formulário de cadastro
    nomeDigitado = document.querySelector("#nomeUsuario").value;

    // Recupera o valor digitado no campo de senha do formulário de cadastro
    emailDigitado = document.querySelector("#usuarioLogin").value;

    // Recupera o valor digitado no campo de senha do formulário de cadastro
    #senhaDigitada = document.querySelector("#senhaLogin").value;

    constructor(nomeDigitado, emailDigitado, senhaDigitada){
        this.nomeDigitado = nomeDigitado;
        this.emailDigitado = emailDigitado;
        this.#senhaDigitada = senhaDigitada;
    }

    verificarSenha (){

        let senhaLogin = document.getElementById("senhaLogin");
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

document.querySelector("#botaoCadastro").onclick = cadastrarUsuario;