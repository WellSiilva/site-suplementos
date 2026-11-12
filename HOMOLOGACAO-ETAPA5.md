# Etapa 5 — Relatório de homologação parcial

Base: Etapa4 Segurança. Não é uma liberação para produção.

## Executado
- Sintaxe Node.js: todos os arquivos JS (node --check).
- Referências locais HTML: 44 páginas e index raiz; nenhum arquivo referenciado ausente (links, scripts, imagens, CSS).
- Testes isolados das funções reais do servidor: frete R$99,99 / R$100,00 / R$100,01; JSON inválido, null, array, número; JSON objeto válido. 8 verificações aprovadas.
- Correções: JSON malformado ou não objeto retorna HTTP 400; item nulo/inválido no carrinho recebe tratamento 400.
- Chromium inicia, mas navegação local bloqueada por ERR_BLOCKED_BY_ADMINISTRATOR. Nenhuma tela visual homologada.

## Checklist funcional manual (pendente)
1. Cadastro válido/inválido/duplicado; confirmar e-mail, token expirado/reutilizado; login/logout; senha inválida e reset.
2. Conta: atualizar endereço, CEP válido/inválido; sessão expirada; histórico isolado por cliente.
3. Catálogo: pesquisa, categorias, ordenação, favoritos, carrinho vazio e estoque insuficiente.
4. Checkout: R$99,99, R$100,00 e R$100,01; pedido duplicado, WhatsApp, persistência e falha de conexão.
5. Admin: login, acesso sem sessão, clientes bloqueados, exclusão com/sem pedidos; categorias, marcas, produtos e imagens.
6. Estoque: confirmação concorrente, cancelamento, lote, validade, histórico e saldo.
7. E-mails: seis eventos de pedido, logo, links, reenvio após falha e reinício, ausência de duplicidade.
8. Visual: desktop/mobile, todos os botões, campos, modais, tabelas e mensagens; navegação por teclado.
9. Backup/restauração em banco isolado; migração preservando dados; preflight de produção.

## Limitações
Sem PostgreSQL de teste, dependências Node instaladas ou credenciais Resend neste ambiente. Não houve execução integrada nem homologação visual. Nenhuma alteração no banco ou .env. A arquitetura snapshot permanece. A reserva de estoque ocorre na confirmação, não na criação do pedido; validar concorrência e confirmar regra de negócio antes de publicar.
