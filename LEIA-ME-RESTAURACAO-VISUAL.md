# Restauração visual — Well Suplementos

Esta versão usa como base `Well_Suplementos_Frete_WhatsApp_Testado(1).zip`, pois contém o checkout com regras de frete e WhatsApp e as páginas de autenticação com o painel lateral preto/laranja.

## Alterações restritas
- `pages/criar-conta.html` e `pages/entrar.html`: cabeçalho copiado da página inicial, sem reestruturar formulários, conteúdo, scripts de cadastro ou login.
- `assets/header-auth-fix.css`: apenas ajustes do cabeçalho para busca, botão e responsividade.
- Campo de busca nessas duas páginas direciona a `loja.html?q=...`.
- Demais arquivos preservados da base, inclusive servidor, checkout, frete, WhatsApp e painel administrativo.

## Como testar
Na pasta `html`, execute `node server.js` e abra `http://localhost:3000`. Se a porta 3000 já estiver ocupada, encerre o servidor anterior com Ctrl+C. Não abra páginas pelo protocolo `file://`.

## Limites
A verificação de rotas e HTML não substitui testes manuais no navegador. Não foi implementada integração de pagamentos online. Antes de publicar, confirme o número de WhatsApp, cidade do Grajaú, dados de produtos, persistência e segurança.
