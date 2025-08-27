const livros = [];
/**
 * ID
 * NOME
 * AUTOR
 * ANO_PUBLICACAO
 * CATEGORIA
 * 
 * 
 * INSERT
 * SELECT
 * SELECT com WHERE
 * 
 */

function criarLivro(nome, autor, anoPublicacao, categoria) {
    const novoLivro = {
        id: Date.now(),
        nome: nome,
        autor: autor,
        ano_publicacao: anoPublicacao,
        categoria: categoria || 'GERAL'
    }
    livros.push(novoLivro);
    return novoLivro;
}

function listarLivroTodos() {
    return livros;
}

function buscarLivroPorNome(nome) {
    const filtrarLivro = livros.find(livro => livro.nome === nome);
    return filtrarLivro;
}

function buscarLivroPorAutor(autor) {
    const filtrarLivro = livros.find(livro => livro.autor === autor);
    return filtrarLivro;
} 

function buscarLivroPorCategoria(categoria) {
    const filtrarLivro = livros.find(livro => livro.categoria === categoria);
    return filtrarLivro;
} 

module.exports = {
    criarLivro,
    listarLivroTodos,
    buscarLivroPorNome,
    buscarLivroPorAutor,
    buscarLivroPorCategoria
}