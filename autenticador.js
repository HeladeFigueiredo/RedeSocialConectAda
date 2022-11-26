class Autenticador {

    #emailUsuarioDigitado;
    #senhaDigitada;
    logado = false;

    constructor(emailUsuarioDigitado, senhaDigitada) {
        this.#emailUsuarioDigitado = emailUsuarioDigitado;
        this.#senhaDigitada = senhaDigitada;
    }

    autenticarUsuario() {
        // Coleta usuários salvos no localStorage e converte em um objeto
        let usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) ?? [];

        // Percorre o array de usuários cadastrados de um em um
        /*for (let index in usuariosCadastrados) {
            let usuarioAtual = usuariosCadastrados[index]
            console.log(usuarioAtual.user, usuarioAtual.senha);
            if (this.#emailUsuarioDigitado === usuarioAtual.user && this.#senhaDigitada === usuarioAtual.senhaCadastrada) {
                return true
            } else {
                console.log(this.#emailUsuarioDigitado, this.#senhaDigitada)
            }
        }*/

        usuariosCadastrados.forEach(i => {
            if (i.user == this.#emailUsuarioDigitado && i.senha == this.#senhaDigitada) {
                console.log(i.user, this.#emailUsuarioDigitado, i.senha, this.#senhaDigitada)
                this.logado = this.#emailUsuarioDigitado;
                //Salva no LS o e-mail do user logado
                const userLogado = [{'user': this.logado}];
                //Permitir saber quem é o usuário logado
                localStorage.setItem('logado', JSON.stringify(userLogado));                
            }
        });
        return this.logado;
    }
}

//let listaUsuario = localStorage.getItem("usuarios");

const autenticarLoginDigitado = (e) => {
    e.preventDefault() //impede a página de recarregar quando o usuário dá submit

    // Recupera o valor digitado no campo de login do formulário de login
    let loginDigitado = document.querySelector("#usuarioLogar").value

    // Recupera o valor digitado no campo de senha do formulário de login
    let senhaDigitada = document.querySelector("#senhaLogar").value

    // Cria uma instância da classe autenticador que é responsável por autenticar o usuário
    let autenticador = new Autenticador(loginDigitado, senhaDigitada);

    // Chama o método autenticarUsuario para validar se existe um usuário com o login e senha informados
    let isAutenticado = autenticador.autenticarUsuario();

    //console.log('Autenticado ',isAutenticado);

    // Usa o retorno da função autenticarUsuario salvo na variável isAutenticado para verificar se o login foi bem sucedido
    if (isAutenticado != false) {
        // Redireciona a página para o index
        window.location.href = "index.html";
        //alert('OK');
    } else {
        alert("Login incorreto")
    }
}

document.querySelector("#botaoLogin").onclick = autenticarLoginDigitado;