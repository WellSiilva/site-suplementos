# Etapa 5 — Acessibilidade e tratamento de falhas

- Páginas de erro 404 e 500 para navegação HTML; respostas da API continuam JSON.
- Link de salto para o conteúdo principal quando há elemento main.
- Foco visível para teclado e respeito a movimento reduzido.
- Feedback de processamento em formulários nativos; preservados handlers existentes.
- Mantidos catálogo, frete, marcas, pedidos e estilos anteriores.

## Testes recomendados

- Abrir /pagina-inexistente.html e verificar status 404 e página amigável.
- Abrir /api/rota-inexistente e verificar erro JSON.
- Navegar com Tab e Shift+Tab; ativar link Pular para o conteúdo.
- Testar formulários, login, carrinho e checkout em navegador real e celular.
- Verificar mensagens com leitor de tela.

Observação: a página 500 é fallback para erros inesperados; falhas esperadas de validação permanecem com respostas específicas.
