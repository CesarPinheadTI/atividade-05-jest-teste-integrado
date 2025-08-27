const bibliotecaService = require('./biblioteca.service');

// campo vazios no criar
test('Verificar se o nome é obrigatório', () => {
    const result = bibliotecaService.criarLivro('', 'autor1', 2001, 'cat1');
    expect(result).toBe('Erro: nome é obrigatório');
});
test('Verificar se o autor é obrigatório', () => {
    const result = bibliotecaService.criarLivro('nome1', '', 2002, 'cat2');
    expect(result).toBe('Erro: autor é obrigatório');
});
test('Verificar se o ano de publicacao é obrigatório', () => {
    const result = bibliotecaService.criarLivro('nome2', 'autor2', '', 'cat3');
    expect(result).toBe('Erro: ano de publicação é obrigatório');
});

// somente campos vazios nas buscas
test('Verificar se o busca pelo nome é obrigatório', () => {
    const result = bibliotecaService.buscarLivroPorNome('');
    expect(result).toBe('Erro: Título é obrigatório para busca');
});
test('Verificar se o busca pelo autor é obrigatório', () => {
    const result = bibliotecaService.buscarLivroPorAutor('');
    expect(result).toBe('Erro: Autor é obrigatório para busca');
});
test('Verificar se o busca pela categoria é obrigatório', () => {
    const result = bibliotecaService.buscarLivroPorCategoria('');
    expect(result).toBe('Erro: Categoria é obrigatória para busca');
});

// restante da funcao
test('Verificar se esta criando e buscando', () => {
    const result = bibliotecaService.criarLivro('nome','autor', 2020, 'categoria');
    const result2 = bibliotecaService.buscarLivroPorNome('nome');
    const result3 = bibliotecaService.buscarLivroPorAutor('autor');
    const result4 = bibliotecaService.buscarLivroPorCategoria('categoria');
    expect(result.nome).toBe('nome');
    expect(result2.nome).toBe('nome');
    expect(result3.autor).toBe('autor');
    expect(result4.categoria).toBe('categoria');
});