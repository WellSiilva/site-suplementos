# Auditoria de seletores dinâmicos — Well Suplementos

## Regra de automação

Os valores de `data-test-id` são **constantes**, nunca formados com índice de array, posição visual, data, preço, nome do produto ou ID gerado no servidor. Elementos repetidos usam o mesmo identificador de função e devem ser localizados dentro do contêiner correto. A identidade do item é exposta separadamente por `data-product-id`, `data-order-id` ou `data-lot-id`, quando disponível.

### Exemplo Playwright — produto

```ts
const produto = page.locator('[data-test-id="well-store-products-card"][data-product-id="1"]');
await produto.locator('[data-test-id="well-store-products-add-to-cart-button"]').click();
```

### Exemplo Playwright — item do carrinho

```ts
const item = page.locator('[data-test-id="well-cart-items-row"][data-product-id="1"]');
await item.locator('[data-test-id="well-cart-items-remove-button"]').click();
```

### Exemplo Playwright — notificação

```ts
await expect(page.locator('[data-test-id="well-notifications-message-text"]')).toContainText('Produto');
```

## Componentes JS cobertos nesta revisão

- `store.js`: filtros por categoria, cards de produto, ações de favoritos e compra, linhas do carrinho, controles de quantidade, remoção e resumo do checkout.
- `carrinho.js`: controles de quantidade e remoção criados por template.
- `admin.js`: linhas de produtos, edição e exclusão.
- `admin-lotes.js`: opções de produtos, linhas de lote e ajuste de quantidade.
- `account.js`: cartões de pedidos, status, detalhes e estado vazio.
- `notifications.js`: container, notificação, texto, botão fechar e botão de ação.
- `customer-checkout.js`: links de autenticação, confirmação do pedido e link de WhatsApp.

## Limites e pendências

- Os atributos permanecem estáveis, mas **elementos renderizados dinamicamente continuam sendo criados/removidos pela aplicação**, como é normal em uma SPA/loja com filtros. Use esperas por visibilidade e escopo por contêiner, nunca `nth()` como identidade de produto.
- Não foi executado teste de navegador ponta a ponta nesta revisão. Recomenda-se validar o fluxo real de cada tela com Playwright antes de declarar 100% de cobertura.
- A revisão não altera regras de negócio nem layout.
