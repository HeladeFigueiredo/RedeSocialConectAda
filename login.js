function autenticarLoginDigitado(){

    // Recupera o valor digitado no campo de login do formulário de login
    let loginDigitado = document.querySelector("#usuarioLogin").value

    // Recupera o valor digitado no campo de senha do formulário de login
    let senhaDigitada = document.querySelector("#senhaLogin").value

    // Cria uma instância da classe autenticador que é responsável por autenticar o usuário
    let autenticador = new Autenticador();

    // Chama o método autenticarUsuario para validar se existe um usuário com o login e senha informados
    let isAutenticado = autenticador.autenticarUsuario(loginDigitado, senhaDigitada)

    // Usa o retorno da função autenticarUsuario salvo na variável isAutenticado para verificar se o login foi bem sucedido
    if(isAutenticado === true){
        // Redireciona a página para o index
        window.location.href = "./index.html";
    }else{
        alert("Login incorreto")
    }
}

document.querySelector("#botaoLogin").onclick = autenticarLoginDigitado