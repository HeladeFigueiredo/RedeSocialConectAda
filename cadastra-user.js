class cadastraUsuario {
    #nome;
    #email;
    #senha;
    #repetesenha;

    constructor(nome, email, senha, repetesenha) {
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#repetesenha = repetesenha;
    }

    adicionarUsuario() {
        if (this.#senha.length > 3) {
            if (this.#senha != this.#repetesenha) {
                alert('Senha digitadas não conferem')
            } else {
                //Passou nas validações
                let users = JSON.parse(localStorage.getItem('usuarios')) ?? [{ 'nome': 'admin', 'user': 'admin@gmail.com', 'senha': 'admin', 'tipo': 'admin' }];
                users.push({ 'nome': this.#nome, 'user': this.#email, 'senha': this.#senha, 'tipo': 'user' });
                localStorage.setItem('usuarios', JSON.stringify(users))
                alert('Usuário cadastrado com sucesso')
                document.getElementById('main-login').style.display = 'block';
                document.getElementById('main-cadastro').style.display = 'none';
            }
        } else {
            alert('Sua senha precisa de pelo menos 4 caracteres')
        }
    }
}


const btnCadastrarNewUSer = document.getElementById('botaoCadastro');
const btnCadastro = document.getElementById('btn-cadastro');

btnCadastrarNewUSer.onclick = () => {
    const nome = document.getElementById('nomeUsuario').value;
    const email = document.getElementById('usuarioLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    const repetesenha = document.getElementById('confirmarSenha').value;
    const novoUser = new cadastraUsuario(nome, email, senha, repetesenha);
    novoUser.adicionarUsuario();
}

btnCadastro.onclick = () => {
    document.getElementById('main-login').style.display = 'none';
    document.getElementById('main-cadastro').style.display = 'block';
}



