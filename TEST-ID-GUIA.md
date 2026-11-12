# Seletores Playwright — Well Suplementos

Configure `use: { testIdAttribute: 'data-test-id' }` no Playwright. Os identificadores anteriores foram preservados. Consulte TEST-ID-MANIFEST.json para os seletores estáticos por página.

## Exemplos reais
- Login: `well-entrar-form-email-input`, `well-entrar-form-password-input`, `well-entrar-form-entrar-na-minha-conta-button`.
- Catálogo: `well-store-products-card`, `catalog-product-name`, `catalog-product-price`, `well-store-products-add-to-cart-button`.
- Clientes: `admin-customers-row`, `admin-customers-button-details`, `admin-customers-button-block`, `admin-customers-button-unblock`, `admin-customers-button-delete`.
- Validação: identificador do campo + `-error`.

Use escopo do card ou linha para elementos repetidos. Não use nth para identificar registros; filtre pelo nome ou e-mail de teste. Os IDs não incluem valores de registros. Os seletores genéricos de elementos dinâmicos podem repetir e devem ser refinados quando houver ações distintas. A camada test-selectors.js complementa elementos criados em runtime; não substitui os hooks explícitos existentes.

## Validação
Sintaxe Node verificada. A cobertura em runtime, unicidade por contexto, CSS e fluxos integrados ainda precisam de homologação no navegador. O manifesto contém apenas HTML estático; os hooks dinâmicos são definidos nos scripts. Nenhuma dependência Playwright foi instalada.
