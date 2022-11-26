export default class Usuario {
    #logado = false;
    #usuario;
    #senha;
    nome;
    #amigo;

    constructor(nome, usuario, senha) {
        this.#usuario = usuario;
        this.#senha = senha;
        this.nome = nome;
    }

    adicionarUsuario() {
        //Antes de adicionar o usuário preciso verificar se existe outro com mesmo nome

        //const verificaExistenciaUsuarioMesmoUser = pesquisarUsuario(nome);

        //Ao tentar adicionar um usuário verifico se já não existe outro com mesmo nome (nome de usuário)

        //const existeUsers = pesquisarUsuario(this.usuario);

        let users = JSON.parse(localStorage.getItem('usuarios')) ?? [];

        users.push({ 'nome': this.nome, 'user': this.#usuario, 'senha': this.#senha, 'tipo': 'user' });

        localStorage.setItem('usuarios', JSON.stringify(users))

    }

    autenticarUsuario() {
        let users = JSON.parse(localStorage.getItem('usuarios')) ?? [];
        users.forEach(i => {
            if (i.user === this.#usuario && i.senha === this.#senha) {
                this.#logado = true;
                return null;
            }
        });
        if (this.#logado === true) {
            console.log('Usuário logado');
        }
    }


    logoff() {
        this.#logado = false;
    }

    get listarAmigos() {
        let users = JSON.parse(localStorage.getItem('amigos-' + this.#usuario)) ?? [];
        return users;
        /*users.forEach(i => {
            console.log(i.useramigo);
            const li = document.createElement('li');
            li.innerHTML = `<div class="${i.useramigo}" id="${i}">${i.useramigo}</div>`;
            return ul.appendChild(li);
        });*/
    }

    set adicionarAmigo(useramigo) {
        this.#amigo = useramigo;
        let amigos = JSON.parse(localStorage.getItem('amigos-' + this.#usuario)) ?? [];
        amigos.push({ 'useramigo': this.#amigo });
        localStorage.setItem('amigos-' + this.#usuario, JSON.stringify(amigos));
    }

    set removerAmigo(nomeamigo) {
        this.nomeamigo = nomeamigo
        console.log(nomeamigo)
    }

    get logado() {
        return this.#logado;
    }

    get nome() {
        return this.nome;
    }
}



const btnCadastaNewUser = document.getElementById('btn-cadastra-usuario');
const btnLogar = document.getElementById('btn-login');
const btnLogoff = document.getElementById('btn-logoff');

btnCadastaNewUser.onclick = () => {
    const nome = document.getElementById('input-nome').value;
    const user = document.getElementById('input-user').value;
    const senha = document.getElementById('input-senha').value;
    const novoUser = new Usuario(nome, user, senha);
    novoUser.adicionarUsuario();
}

btnLogar.onclick = () => {
    const user = document.getElementById('input-login-user').value;
    const senha = document.getElementById('input-login-senha').value;
    const User = new Usuario(null, user, senha);
    User.adicionarAmigo = 'amigo2';
    User.autenticarUsuario();
}

//const amigos = new Usuario();
//const listaAmigos = amigos.listarAmigos;
//console.log('amigos ' + listaAmigos);
//amigos.removerAmigo ='joão';

