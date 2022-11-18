class LoginUsuario extends Usuario {
    #usuarioDigitado;
    #senhaDigitada

    constructor(usuarioDigitado, senhaDigitada) {
     super(id, nome, email, nomeUsuarioCadastrado,senhaCadastrada)
       this.#usuarioDigitado;
        this.#senhaDigitada = senhaDigitada;
    }

    verificarUsuario(usuarioDigitado, senhaDigitada){
        if(this.#senhaDigitada === senhaCadastrada && this.#usuarioDigitado === this.nomeUsuarioCadastrado){
            console.log('Acesso permitido')
        }else
        console.log('acesso negado')
    }
}

let novoUsuario = new LoginUsuario('usuario1', 12345)

console.log(novoUsuario);



