// Pega lista de usuários do Localstora para posteriormente verificar se existem informações
let listaUsuario = localStorage.getItem("usuarios")

// Caso a lista de usuários esteja vazia, cria usuários e os adiciona ao localstorage
if(listaUsuario === null){

    // Lista de usuários em JSON
    let usuarioString = `
    [
        {
            "nomeUsuarioCadastrado": "Andre Mendonza", 
            "email" : "andre@gmail.com",
            "senhaCadastrada" : "123456",
            "listaAmigos": "",
            "foto": "https://algumacoisa.com/ddddd"
        },
        {
            "nomeUsuarioCadastrado" : "Annie Santana", 
            "email" : "annie@gmail.com",
            "nomeUsuarioCadastrado" : "annie",
            "senhaCadastrada" : "123456",
            "listaAmigos": "",
            "foto": "https://algumacoisa.com/ddddd"
        },
        {
            "nomeUsuarioCadastrado" : "Helade Carvalho", 
            "email" : "helade@gmail.com",
            "senhaCadastrada" : "123456",
            "listaAmigos": "",
            "foto": "https://algumacoisa.com/ddddd"
        },
        {
            "nomeUsuarioCadastrado" : "Natalia Rocha", 
            "email" : "natalia@gmail.com", 
            "senhaCadastrada" : "123456",
            "listaAmigos": "",
            "foto": "https://algumacoisa.com/ddddd"
        }
    ]
    `
    // Adicionando ao localstorage a chave "usuarios" com o valor igual a string usuarioString
    localStorage.setItem("usuarios", usuarioString)
}

function autenticarLoginDigitado(event){
    event.preventDefault() //impede a página de recarregar quando o usuário dá submit

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