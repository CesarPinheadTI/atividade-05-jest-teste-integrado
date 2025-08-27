const bibliotecaModel = require('./biblioteca.model');

function criarLivro(nome, autor, anoPublicacao, categoria) {
    if(!nome) {
        return 'Erro: nome é obrigatório';
    }
    if(!autor) {
        return 'Erro: autor é obrigatório';
    }
    if(!anoPublicacao) {
        return 'Erro: ano de publicação é obrigatório';
    }
    const novoLivro = bibliotecaModel.criarLivro(nome, autor, anoPublicacao, categoria);
    return novoLivro;
}

function listarLivros() {
  return bibliotecaModel.buscarTodosOsLivros();
}

function buscarLivroPorNome(titulo) {
  if (!titulo) {
    return "Erro: Título é obrigatório para busca";
  }

  return bibliotecaModel.buscarLivroPorNome(titulo);
}

function buscarLivroPorAutor(autor) {
  if (!autor) {
    return "Erro: Autor é obrigatório para busca";
  }

  return bibliotecaModel.buscarLivroPorAutor(autor);
}

function buscarLivroPorCategoria(categoria) {
  if (!categoria) {
    return "Erro: Categoria é obrigatória para busca";
  }

  return bibliotecaModel.buscarLivroPorCategoria(categoria);
}

module.exports = {
    criarLivro,
    listarLivros,
    buscarLivroPorNome,
    buscarLivroPorAutor,
    buscarLivroPorCategoria
}