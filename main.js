import Usuario from "./Usuario.class.js";

//console.log(Usuario);

const btnCadastrarNewUSer = document.getElementById('botaoCadastro');

btnCadastrarNewUSer.onclick = () => {
    console.log('Teste');
    const nome = document.getElementById('nomeUsuario').value;
    const email = document.getElementById('usuarioLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    const novoUser = new Usuario(nome, email, senha);
    novoUser.adicionarUsuario();
}