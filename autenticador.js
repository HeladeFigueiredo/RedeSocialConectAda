class Autenticador {
   
    autenticarUsuario(emailUsuarioDigitado, senhaDigitada){

        // Coleta usuários salvos no localStorage e converte em um objeto
        const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios"))

        // Percorre o array de usuários cadastrados de um em um
        for(let index in usuariosCadastrados){
            let usuarioAtual = usuariosCadastrados[index]

            if(emailUsuarioDigitado === usuarioAtual.email && senhaDigitada === usuarioAtual.senhaCadastrada)
            {
                return true
            }
        }

    }
}


