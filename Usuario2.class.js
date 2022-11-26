class Usuario {
    #usuario;
    nome;
    #amigo;

    constructor(usuario) {
        this.#usuario = usuario;

    }

    //Ler o nome do próprio usuario

    lerNomeUsuario(usuario) {
        let nomes = Usuario.lerNomeUsuarios();
        nomes.forEach(i => {
            if (i.user === usuario) {
                document.getElementById('recebe-nome-usuario').innerHTML = i.nome;
                this.nome = i.nome;
                return null;
            }
        });
    }

    static lerNomeUsuarios() {
        let users = JSON.parse(localStorage.getItem('usuarios')) ?? [];
        return users;
    }


    // adicionarUsuario() {
    //     //Antes de adicionar o usuário preciso verificar se existe outro com mesmo nome

    //     //const verificaExistenciaUsuarioMesmoUser = pesquisarUsuario(nome);

    //     //Ao tentar adicionar um usuário verifico se já não existe outro com mesmo nome (nome de usuário)

    //     //const existeUsers = pesquisarUsuario(this.usuario);

    //     let users = JSON.parse(localStorage.getItem('usuarios')) ?? [];

    //     users.push({ 'nome': this.nome, 'user': this.#usuario, 'senha': this.#senha, 'tipo': 'user' });

    //     localStorage.setItem('usuarios', JSON.stringify(users))

    // }

    // autenticarUsuario() {
    //     let users = JSON.parse(localStorage.getItem('usuarios')) ?? [];
    //     users.forEach(i => {
    //         if (i.user === this.#usuario && i.senha === this.#senha) {
    //             this.#logado = true;
    //             return null;
    //         }
    //     });
    //     if (this.#logado === true) {
    //         console.log('Usuário logado');
    //     }
    // }


    logoff() {
        localStorage.setItem('logado', []);
        return true;
    }

    // listarAmigos() {
    //     console.log('amigos-' + this.#usuario);
    //     let usersFriends = JSON.parse(localStorage.getItem('amigos-' + this.#usuario)) ?? [];

    // }



    set adicionarAmigo(useramigo) {
        this.#amigo = useramigo;
        let amigos = JSON.parse(localStorage.getItem('amigos-' + this.#usuario)) ?? [];
        amigos.push({ 'useramigo': this.#amigo });
        localStorage.setItem('amigos-' + this.#usuario, JSON.stringify(amigos));
    }

    set removerAmigo(nomeamigo) {
        //this.#amigo = nomeamigo;        
        let amigos = JSON.parse(localStorage.getItem('amigos-' + this.#usuario)) ?? [];
        amigos.forEach(e => {
            console.log(e.useramigo, nomeamigo);
            if (e.useramigo == nomeamigo) {

            } else {
                amigos.push({ 'useramigo': e.useramigo });
            }
        });
        localStorage.setItem('amigos-' + this.#usuario, JSON.stringify(amigos));
        console.log(amigos)
    }

    postar(conteudoPost, linkImg) {
        //console.log(conteudoPost);  
        let idPost = (Math.random() * 100000000000000000);
        let posts = JSON.parse(localStorage.getItem('posts-' + this.#usuario)) ?? [];
        posts.push({ 'txtpost': conteudoPost, 'imagem': linkImg, 'idpost': idPost })
        localStorage.setItem('posts-' + this.#usuario, JSON.stringify(posts));
    }


    meusPosts() {
        let postsPessoais = JSON.parse(localStorage.getItem('posts-' + this.#usuario)) ?? [];
        //console.log(postsPessoais);
        let content = '';
        postsPessoais.forEach(i => {
            content += `<div class="feed">
            <div class="head">
                <div class="user">
                    <div class="profile-photo">
                        <img src="./images/profile-15.jpg" alt="">
                    </div>
                    <div class="ingo">
                        <h3>
                        ${this.nome}
                        </h3>
                        <small>São Paulo, 15 MINUTOS ATRÁS</small>
                    </div>
                    <span class="edit">
                        <i class="uil uil-ellipsis-h"></i>
                    </span>
                </div>
            </div>
    
            <div class="photo">
                <img src="${i.imagem}" alt="">
            </div>
            <div class="caption">
                                        <p>
                                            <b></b>${i.txtpost}                                            
                                        </p>
                                    </div>
    
                                    <div class="comment text-muted">
                                        Visualizar todos os 50 comentários
                                    </div>
            </div>`;


        });



        document.getElementById("mostra-feeds").innerHTML = content;
    }


    allPosts() {
        let minhasConexoes = JSON.parse(localStorage.getItem('amigos-' + this.#usuario)) ?? [];
        let content = '';
        minhasConexoes.forEach(i => {
            let identificadorAmigo = i.useramigo;
            let postsPessoais = JSON.parse(localStorage.getItem('posts-' + identificadorAmigo)) ?? [];
            console.log(postsPessoais);
            
            postsPessoais.forEach(i => {
                content += `<div class="feed">
            <div class="head">
                <div class="user">
                    <div class="profile-photo">
                        <img src="./images/profile-15.jpg" alt="">
                    </div>
                    <div class="ingo">
                        <h3>
                        ${identificadorAmigo}
                        </h3>
                        <small>São Paulo, 15 MINUTOS ATRÁS</small>
                    </div>
                    <span class="edit">
                        <i class="uil uil-ellipsis-h"></i>
                    </span>
                </div>
            </div>
    
            <div class="photo">
                <img src="${i.imagem}" alt="">
            </div>
            <div class="caption">
                                        <p>
                                            <b></b>${i.txtpost}                                            
                                        </p>
                                    </div>
    
                                    <div class="comment text-muted">
                                        Visualizar todos os 50 comentários
                                    </div>
            </div>`;


            });
        });
        document.getElementById("mostra-feeds").innerHTML = content;
    }

    conexoes() {
        let amigosAtuais = JSON.parse(localStorage.getItem('amigos-' + this.#usuario)) ?? [];
        let arrayAmigos = []
        amigosAtuais.forEach(j => {
            arrayAmigos.push(j.useramigo);
        });
        console.log(arrayAmigos);
        let content = '';
        let nomes = Usuario.lerNomeUsuarios();
        nomes.forEach(i => {
            console.log(i.user);
            if (arrayAmigos.includes(i.user)) {
                content += `<div class="feed">${i.nome}<button class="btn btn-primary btn-seguir" onclick="deixarSeguir('${i.user}')">Deixar de Seguir</buton></div>`;
            } else {
                content += `<div class="feed">${i.nome}<button class="btn btn-primary btn-seguir" onclick="seguir('${i.user}')">Seguir</buton></div>`;
            }
            //content += `<div class="feed">${i.nome}<button class="btn btn-primary btn-seguir" onclick="seguir('${i.user}')">Seguir</buton></div>`;                
        });


        document.getElementById("mostra-feeds").innerHTML = content;
    }

    // get logado() {
    //     return this.#logado;
    // }

    // get nome() {
    //     return this.nome;
    // }
}



// const btnCadastaNewUser = document.getElementById('btn-cadastra-usuario');
// const btnLogar = document.getElementById('btn-login');
// const btnLogoff = document.getElementById('btn-logoff');

// btnCadastaNewUser.onclick = () => {
//     const nome = document.getElementById('input-nome').value;
//     const user = document.getElementById('input-user').value;
//     const senha = document.getElementById('input-senha').value;
//     const novoUser = new Usuario(nome, user, senha);
//     novoUser.adicionarUsuario();
// }

// btnLogar.onclick = () => {
//     const user = document.getElementById('input-login-user').value;
//     const senha = document.getElementById('input-login-senha').value;
//     const User = new Usuario(null, user, senha);
//     User.adicionarAmigo = 'amigo2';
//     User.autenticarUsuario();
// }

//const amigos = new Usuario();
//const listaAmigos = amigos.listarAmigos;
//console.log('amigos ' + listaAmigos);
//amigos.removerAmigo ='joão';



let userLogado = JSON.parse(localStorage.getItem('logado')) ?? [];

if (userLogado.length > 0) {
    //Capturo o e-mail do usuário logado
    logado = userLogado[0]['user'];
    var dadosUser = new Usuario(logado);
    dadosUser.lerNomeUsuario(logado);
} else {
    window.location.href = "cadastro.html";
}

//POSTAR 
const btnCadastrarPost = document.getElementById('cadastrarPost');
btnCadastrarPost.addEventListener('click', () => {
    const conteudoPost = document.getElementById('create-post').value;
    let numeroImg = Math.floor(Math.random() * 10 + 1);
    const linkImg = `images/feed-${numeroImg}.jpg`;
    dadosUser.postar(conteudoPost, linkImg);
    document.getElementById('create-post').value = "";
});


//MEUS POSTS 
const linkMeusPost = document.getElementById('meus-posts');

linkMeusPost.addEventListener('click', () => {
    dadosUser.meusPosts();
});

//IMAGEM DE PERFIL
const imgPerfil = document.getElementById('config-imagem-perfil');

imgPerfil.addEventListener('click', () => {
    //dadosUser.meusPosts();
});


//CONEXÕES
const btnConexoes = document.getElementById('btn-conexoes');
btnConexoes.addEventListener('click', () => {
    dadosUser.conexoes();
});


function seguir(userAmigo) {
    dadosUser.adicionarAmigo = userAmigo;
}

function deixarSeguir(userAmigo) {
    //alert('Deixar de Seguir');
    dadosUser.removerAmigo = userAmigo;
}
//console.log(dadosUser.listarAmigos);

//HOME
const btnHome = document.getElementById('btn-home');
btnHome.addEventListener('click', () => {
    dadosUser.allPosts();
});


//Carregar no Início
dadosUser.allPosts();

