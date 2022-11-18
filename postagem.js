class Postagem{
    #tituloPost;
    #textoPost;
    data;
    #usuario;


    constructor(tituloPost, textoPost, data, usuario){
        this.#tituloPost= tituloPost;
        this.#textoPost = textoPost;
        this.data = data;
        this.#usuario = this.#usuario;
    }

    criarPost(tituloDoPost, texto, data, usuario){
console.log(`novo post:`)
    }

    apagarComentario(){

    }
    modificarTitulo(){

    }
    modificarDescricao(){
        
    }
}



post1 = new Postagem('amarelo', 'textopost', 'datadehoje', 'usuariofulano')

console.log(post1)
