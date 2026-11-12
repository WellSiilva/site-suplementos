# Padronização de seletores — Well Suplementos

Padrão: `data-test-id="well-{pagina}-{secao}-{elemento}"`. Atributos foram adicionados sem remover `id`, `class`, `name` ou manipuladores de evento.

## Escopo

- HTML estático: formulários, campos, botões, links e navegação.
- Componentes dinâmicos conhecidos: cards de produtos, favoritos e controles de quantidade/remoção do carrinho.
- Cards de produto: `data-test-id="well-product-card"` com `data-product-id` para seleção contextual; identificadores de ações repetidas são deliberadamente iguais e devem ser escopados pelo card.

## Exemplos Playwright

```ts
await page.locator('[data-test-id="well-login-form-email-input"]').fill('cliente@example.com');
const card = page.locator('[data-test-id="well-product-card"]').filter({ hasText: 'Creatina' }).first();
await card.locator('[data-test-id="well-product-card-add-to-cart-button"]').click();
```

**Nota:** o primeiro seletor acima é ilustrativo; consulte o inventário para o identificador efetivo.

## Inventário de elementos estáticos

### html/pages/cafeina.html (38)

- `well-cafeina-navigation-a-link`
- `well-cafeina-navigation-inputbusca-input`
- `well-cafeina-navigation-btnbusca-button`
- `well-cafeina-navigation-user-menu-link`
- `well-cafeina-navigation-favoritos-link`
- `well-cafeina-navigation-0-link`
- `well-cafeina-navigation-produtos-link`
- `well-cafeina-navigation-cafeina-link`
- `well-cafeina-navigation-colageno-link`
- `well-cafeina-navigation-omega-3-link`
- `well-cafeina-navigation-whey-100-concentrado-link`
- `well-cafeina-navigation-whey-isolado-link`
- `well-cafeina-navigation-termogenico-link`
- `well-cafeina-navigation-zma-pre-hormonal-link`
- `well-cafeina-navigation-bcaa-link`
- `well-cafeina-navigation-creatina-link`
- `well-cafeina-navigation-whey-protein-link`
- `well-cafeina-navigation-barra-de-proteina-link`
- `well-cafeina-navigation-hipercalorico-link`
- `well-cafeina-navigation-pre-treino-link`
- `well-cafeina-navigation-promocoes-link`
- `well-cafeina-navigation-objetivos-link`
- `well-cafeina-content-comprar-button`
- `well-cafeina-content-comprar-button-2`
- `well-cafeina-content-comprar-button-3`
- `well-cafeina-content-comprar-button-4`
- `well-cafeina-content-comprar-button-5`
- `well-cafeina-footer-a-link`
- `well-cafeina-footer-a-link-2`
- `well-cafeina-footer-a-link-3`
- `well-cafeina-footer-a-empresa-link`
- `well-cafeina-footer-seguranca-link`
- `well-cafeina-footer-politica-de-privacidade-link`
- `well-cafeina-footer-como-comprar-link`
- `well-cafeina-footer-entregas-link`
- `well-cafeina-footer-pagamentos-link`
- `well-cafeina-footer-trocas-e-devolucoes-link`
- `well-cafeina-content-a-link`

### html/pages/empresa.html (17)

- `well-empresa-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-empresa-navigation-inicio-link`
- `well-empresa-navigation-loja-link`
- `well-empresa-navigation-produtos-link`
- `well-empresa-navigation-minha-conta-link`
- `well-empresa-navigation-criar-minha-conta-link`
- `well-empresa-navigation-searchinput-input`
- `well-empresa-navigation-favoritos-button`
- `well-empresa-navigation-carrinho-link`
- `well-empresa-content-ver-toda-a-loja-link`
- `well-empresa-content-minha-conta-link`
- `well-empresa-footer-todos-os-produtos-link`
- `well-empresa-footer-meu-carrinho-link`
- `well-empresa-footer-sobre-nos-link`
- `well-empresa-footer-entregas-link`
- `well-empresa-footer-trocas-e-devolucoes-link`
- `well-empresa-footer-privacidade-link`

### html/pages/politica.html (17)

- `well-politica-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-politica-navigation-inicio-link`
- `well-politica-navigation-loja-link`
- `well-politica-navigation-produtos-link`
- `well-politica-navigation-minha-conta-link`
- `well-politica-navigation-criar-minha-conta-link`
- `well-politica-navigation-searchinput-input`
- `well-politica-navigation-favoritos-button`
- `well-politica-navigation-carrinho-link`
- `well-politica-content-ver-toda-a-loja-link`
- `well-politica-content-minha-conta-link`
- `well-politica-footer-todos-os-produtos-link`
- `well-politica-footer-meu-carrinho-link`
- `well-politica-footer-sobre-nos-link`
- `well-politica-footer-entregas-link`
- `well-politica-footer-trocas-e-devolucoes-link`
- `well-politica-footer-privacidade-link`

### html/pages/termogenico.html (37)

- `well-termogenico-navigation-a-link`
- `well-termogenico-navigation-inputbusca-input`
- `well-termogenico-navigation-btnbusca-button`
- `well-termogenico-navigation-user-menu-link`
- `well-termogenico-navigation-favoritos-link`
- `well-termogenico-navigation-0-link`
- `well-termogenico-navigation-produtos-link`
- `well-termogenico-navigation-cafeina-link`
- `well-termogenico-navigation-colageno-link`
- `well-termogenico-navigation-omega-3-link`
- `well-termogenico-navigation-whey-100-concentrado-link`
- `well-termogenico-navigation-whey-isolado-link`
- `well-termogenico-navigation-termogenico-link`
- `well-termogenico-navigation-zma-pre-hormonal-link`
- `well-termogenico-navigation-bcaa-link`
- `well-termogenico-navigation-creatina-link`
- `well-termogenico-navigation-whey-protein-link`
- `well-termogenico-navigation-barra-de-proteina-link`
- `well-termogenico-navigation-hipercalorico-link`
- `well-termogenico-navigation-pre-treino-link`
- `well-termogenico-navigation-promocoes-link`
- `well-termogenico-navigation-objetivos-link`
- `well-termogenico-content-comprar-button`
- `well-termogenico-content-comprar-button-2`
- `well-termogenico-content-comprar-button-3`
- `well-termogenico-content-comprar-button-4`
- `well-termogenico-footer-a-link`
- `well-termogenico-footer-a-link-2`
- `well-termogenico-footer-a-link-3`
- `well-termogenico-footer-a-empresa-link`
- `well-termogenico-footer-seguranca-link`
- `well-termogenico-footer-politica-de-privacidade-link`
- `well-termogenico-footer-como-comprar-link`
- `well-termogenico-footer-entregas-link`
- `well-termogenico-footer-pagamentos-link`
- `well-termogenico-footer-trocas-e-devolucoes-link`
- `well-termogenico-content-a-link`

### html/pages/entregas.html (17)

- `well-entregas-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-entregas-navigation-inicio-link`
- `well-entregas-navigation-loja-link`
- `well-entregas-navigation-produtos-link`
- `well-entregas-navigation-minha-conta-link`
- `well-entregas-navigation-criar-minha-conta-link`
- `well-entregas-navigation-searchinput-input`
- `well-entregas-navigation-favoritos-button`
- `well-entregas-navigation-carrinho-link`
- `well-entregas-content-ver-toda-a-loja-link`
- `well-entregas-content-minha-conta-link`
- `well-entregas-footer-todos-os-produtos-link`
- `well-entregas-footer-meu-carrinho-link`
- `well-entregas-footer-sobre-nos-link`
- `well-entregas-footer-entregas-link`
- `well-entregas-footer-trocas-e-devolucoes-link`
- `well-entregas-footer-privacidade-link`

### html/pages/pre-treino.html (42)

- `well-pre-treino-navigation-a-link`
- `well-pre-treino-navigation-inputbusca-input`
- `well-pre-treino-navigation-btnbusca-button`
- `well-pre-treino-navigation-user-menu-link`
- `well-pre-treino-navigation-favoritos-link`
- `well-pre-treino-navigation-0-link`
- `well-pre-treino-navigation-produtos-link`
- `well-pre-treino-navigation-cafeina-link`
- `well-pre-treino-navigation-colageno-link`
- `well-pre-treino-navigation-omega-3-link`
- `well-pre-treino-navigation-whey-100-concentrado-link`
- `well-pre-treino-navigation-whey-isolado-link`
- `well-pre-treino-navigation-termogenico-link`
- `well-pre-treino-navigation-zma-pre-hormonal-link`
- `well-pre-treino-navigation-bcaa-link`
- `well-pre-treino-navigation-creatina-link`
- `well-pre-treino-navigation-whey-protein-link`
- `well-pre-treino-navigation-barra-de-proteina-link`
- `well-pre-treino-navigation-hipercalorico-link`
- `well-pre-treino-navigation-pre-treino-link`
- `well-pre-treino-navigation-promocoes-link`
- `well-pre-treino-navigation-objetivos-link`
- `well-pre-treino-content-comprar-button`
- `well-pre-treino-content-esgotado-button`
- `well-pre-treino-content-esgotado-button-2`
- `well-pre-treino-content-comprar-button-2`
- `well-pre-treino-content-comprar-button-3`
- `well-pre-treino-content-comprar-button-4`
- `well-pre-treino-content-comprar-button-5`
- `well-pre-treino-content-esgotado-button-3`
- `well-pre-treino-content-esgotado-button-4`
- `well-pre-treino-footer-a-link`
- `well-pre-treino-footer-a-link-2`
- `well-pre-treino-footer-a-link-3`
- `well-pre-treino-footer-a-empresa-link`
- `well-pre-treino-footer-seguranca-link`
- `well-pre-treino-footer-politica-de-privacidade-link`
- `well-pre-treino-footer-como-comprar-link`
- `well-pre-treino-footer-entregas-link`
- `well-pre-treino-footer-pagamentos-link`
- `well-pre-treino-footer-trocas-e-devolucoes-link`
- `well-pre-treino-content-a-link`

### html/pages/carrinho.html (44)

- `well-carrinho-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-carrinho-navigation-inicio-link`
- `well-carrinho-navigation-loja-link`
- `well-carrinho-navigation-produtos-link`
- `well-carrinho-navigation-minha-conta-link`
- `well-carrinho-navigation-criar-minha-conta-link`
- `well-carrinho-navigation-searchinput-input`
- `well-carrinho-navigation-favoritos-button`
- `well-carrinho-navigation-carrinho-link`
- `well-carrinho-navigation-categorias-button`
- `well-carrinho-navigation-whey-protein-link`
- `well-carrinho-navigation-whey-isolado-link`
- `well-carrinho-navigation-whey-hidrolisado-link`
- `well-carrinho-navigation-creatina-link`
- `well-carrinho-navigation-pre-treinos-link`
- `well-carrinho-navigation-vitaminas-link`
- `well-carrinho-navigation-vitaminas-e-minerais-link`
- `well-carrinho-navigation-bcaa-link`
- `well-carrinho-navigation-glutamina-link`
- `well-carrinho-navigation-albumina-link`
- `well-carrinho-navigation-hipercaloricos-link`
- `well-carrinho-navigation-termogenicos-link`
- `well-carrinho-navigation-waxy-maize-link`
- `well-carrinho-navigation-aminoacidos-link`
- `well-carrinho-navigation-colageno-link`
- `well-carrinho-navigation-omega-3-link`
- `well-carrinho-navigation-snacks-link`
- `well-carrinho-navigation-barras-de-proteina-link`
- `well-carrinho-navigation-pastas-e-snacks-link`
- `well-carrinho-navigation-hidratacao-link`
- `well-carrinho-navigation-eletrolitos-e-isotonicos-link`
- `well-carrinho-navigation-proteina-vegetal-link`
- `well-carrinho-navigation-creatina-link-2`
- `well-carrinho-navigation-pre-treinos-link-2`
- `well-carrinho-navigation-whey-protein-link-2`
- `well-carrinho-navigation-snacks-link-2`
- `well-carrinho-content-continuar-pedido-link`
- `well-carrinho-content-continuar-comprando-link`
- `well-carrinho-footer-todos-os-produtos-link`
- `well-carrinho-footer-meu-carrinho-link`
- `well-carrinho-footer-sobre-nos-link`
- `well-carrinho-footer-entregas-link`
- `well-carrinho-footer-trocas-e-devolucoes-link`
- `well-carrinho-footer-privacidade-link`

### html/pages/verificar-email.html (1)

- `well-verificar-email-content-voltar-ao-login-link`

### html/pages/admin-lotes.html (9)

- `well-admin-lotes-navigation-produtos-link`
- `well-admin-lotes-navigation-dashboard-link`
- `well-admin-lotes-navigation-movimentacoes-link`
- `well-admin-lotes-content-form`
- `well-admin-lotes-form-productid-select`
- `well-admin-lotes-form-lot-input`
- `well-admin-lotes-form-expiry-input`
- `well-admin-lotes-form-quantity-input`
- `well-admin-lotes-form-salvar-lote-button`

### html/pages/favoritos.html (33)

- `well-favoritos-navigation-a-link`
- `well-favoritos-navigation-inputbusca-input`
- `well-favoritos-navigation-btnbusca-button`
- `well-favoritos-navigation-user-menu-link`
- `well-favoritos-navigation-favoritos-link`
- `well-favoritos-navigation-0-link`
- `well-favoritos-navigation-produtos-link`
- `well-favoritos-navigation-cafeina-link`
- `well-favoritos-navigation-colageno-link`
- `well-favoritos-navigation-omega-3-link`
- `well-favoritos-navigation-whey-100-concentrado-link`
- `well-favoritos-navigation-whey-isolado-link`
- `well-favoritos-navigation-termogenico-link`
- `well-favoritos-navigation-zma-pre-hormonal-link`
- `well-favoritos-navigation-bcaa-link`
- `well-favoritos-navigation-creatina-link`
- `well-favoritos-navigation-whey-protein-link`
- `well-favoritos-navigation-barra-de-proteina-link`
- `well-favoritos-navigation-hipercalorico-link`
- `well-favoritos-navigation-pre-treino-link`
- `well-favoritos-navigation-promocoes-link`
- `well-favoritos-navigation-objetivos-link`
- `well-favoritos-footer-a-link`
- `well-favoritos-footer-a-link-2`
- `well-favoritos-footer-a-link-3`
- `well-favoritos-footer-a-empresa-link`
- `well-favoritos-footer-seguranca-link`
- `well-favoritos-footer-politica-de-privacidade-link`
- `well-favoritos-footer-como-comprar-link`
- `well-favoritos-footer-entregas-link`
- `well-favoritos-footer-pagamentos-link`
- `well-favoritos-footer-trocas-e-devolucoes-link`
- `well-favoritos-content-a-link`

### html/pages/zma.html (38)

- `well-zma-navigation-a-link`
- `well-zma-navigation-inputbusca-input`
- `well-zma-navigation-btnbusca-button`
- `well-zma-navigation-user-menu-link`
- `well-zma-navigation-favoritos-link`
- `well-zma-navigation-0-link`
- `well-zma-navigation-produtos-link`
- `well-zma-navigation-cafeina-link`
- `well-zma-navigation-colageno-link`
- `well-zma-navigation-omega-3-link`
- `well-zma-navigation-whey-100-concentrado-link`
- `well-zma-navigation-whey-isolado-link`
- `well-zma-navigation-termogenico-link`
- `well-zma-navigation-zma-pre-hormonal-link`
- `well-zma-navigation-bcaa-link`
- `well-zma-navigation-creatina-link`
- `well-zma-navigation-whey-protein-link`
- `well-zma-navigation-barra-de-proteina-link`
- `well-zma-navigation-hipercalorico-link`
- `well-zma-navigation-pre-treino-link`
- `well-zma-navigation-promocoes-link`
- `well-zma-navigation-objetivos-link`
- `well-zma-content-comprar-button`
- `well-zma-content-comprar-button-2`
- `well-zma-content-comprar-button-3`
- `well-zma-content-comprar-button-4`
- `well-zma-content-comprar-button-5`
- `well-zma-footer-a-link`
- `well-zma-footer-a-link-2`
- `well-zma-footer-a-link-3`
- `well-zma-footer-a-empresa-link`
- `well-zma-footer-seguranca-link`
- `well-zma-footer-politica-de-privacidade-link`
- `well-zma-footer-como-comprar-link`
- `well-zma-footer-entregas-link`
- `well-zma-footer-pagamentos-link`
- `well-zma-footer-trocas-e-devolucoes-link`
- `well-zma-content-a-link`

### html/pages/loja.html (43)

- `well-loja-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-loja-navigation-inicio-link`
- `well-loja-navigation-loja-link`
- `well-loja-navigation-produtos-link`
- `well-loja-navigation-minha-conta-link`
- `well-loja-navigation-criar-minha-conta-link`
- `well-loja-navigation-searchinput-input`
- `well-loja-navigation-favoritos-button`
- `well-loja-navigation-carrinho-link`
- `well-loja-navigation-categorias-button`
- `well-loja-navigation-whey-protein-link`
- `well-loja-navigation-whey-isolado-link`
- `well-loja-navigation-whey-hidrolisado-link`
- `well-loja-navigation-creatina-link`
- `well-loja-navigation-pre-treinos-link`
- `well-loja-navigation-vitaminas-link`
- `well-loja-navigation-vitaminas-e-minerais-link`
- `well-loja-navigation-bcaa-link`
- `well-loja-navigation-glutamina-link`
- `well-loja-navigation-albumina-link`
- `well-loja-navigation-hipercaloricos-link`
- `well-loja-navigation-termogenicos-link`
- `well-loja-navigation-waxy-maize-link`
- `well-loja-navigation-aminoacidos-link`
- `well-loja-navigation-colageno-link`
- `well-loja-navigation-omega-3-link`
- `well-loja-navigation-snacks-link`
- `well-loja-navigation-barras-de-proteina-link`
- `well-loja-navigation-pastas-e-snacks-link`
- `well-loja-navigation-hidratacao-link`
- `well-loja-navigation-eletrolitos-e-isotonicos-link`
- `well-loja-navigation-proteina-vegetal-link`
- `well-loja-navigation-creatina-link-2`
- `well-loja-navigation-pre-treinos-link-2`
- `well-loja-navigation-whey-protein-link-2`
- `well-loja-navigation-snacks-link-2`
- `well-loja-content-sort-select`
- `well-loja-footer-todos-os-produtos-link`
- `well-loja-footer-meu-carrinho-link`
- `well-loja-footer-sobre-nos-link`
- `well-loja-footer-entregas-link`
- `well-loja-footer-trocas-e-devolucoes-link`
- `well-loja-footer-privacidade-link`

### html/pages/barra-proteina.html (36)

- `well-barra-proteina-navigation-a-link`
- `well-barra-proteina-navigation-inputbusca-input`
- `well-barra-proteina-navigation-btnbusca-button`
- `well-barra-proteina-navigation-user-menu-link`
- `well-barra-proteina-navigation-favoritos-link`
- `well-barra-proteina-navigation-0-link`
- `well-barra-proteina-navigation-produtos-link`
- `well-barra-proteina-navigation-cafeina-link`
- `well-barra-proteina-navigation-colageno-link`
- `well-barra-proteina-navigation-omega-3-link`
- `well-barra-proteina-navigation-whey-100-concentrado-link`
- `well-barra-proteina-navigation-whey-isolado-link`
- `well-barra-proteina-navigation-termogenico-link`
- `well-barra-proteina-navigation-zma-pre-hormonal-link`
- `well-barra-proteina-navigation-bcaa-link`
- `well-barra-proteina-navigation-creatina-link`
- `well-barra-proteina-navigation-whey-protein-link`
- `well-barra-proteina-navigation-barra-de-proteina-link`
- `well-barra-proteina-navigation-hipercalorico-link`
- `well-barra-proteina-navigation-pre-treino-link`
- `well-barra-proteina-navigation-promocoes-link`
- `well-barra-proteina-navigation-objetivos-link`
- `well-barra-proteina-content-comprar-button`
- `well-barra-proteina-content-esgotado-button`
- `well-barra-proteina-content-comprar-button-2`
- `well-barra-proteina-footer-a-link`
- `well-barra-proteina-footer-a-link-2`
- `well-barra-proteina-footer-a-link-3`
- `well-barra-proteina-footer-a-empresa-link`
- `well-barra-proteina-footer-seguranca-link`
- `well-barra-proteina-footer-politica-de-privacidade-link`
- `well-barra-proteina-footer-como-comprar-link`
- `well-barra-proteina-footer-entregas-link`
- `well-barra-proteina-footer-pagamentos-link`
- `well-barra-proteina-footer-trocas-e-devolucoes-link`
- `well-barra-proteina-content-a-link`

### html/pages/esqueci-senha.html (4)

- `well-esqueci-senha-content-voltar-ao-login-link`
- `well-esqueci-senha-content-form`
- `well-esqueci-senha-form-email-input`
- `well-esqueci-senha-form-continuar-button`

### html/pages/login.html (40)

- `well-login-navigation-a-link`
- `well-login-navigation-inputbusca-input`
- `well-login-navigation-btnbusca-button`
- `well-login-navigation-user-menu-link`
- `well-login-navigation-favoritos-link`
- `well-login-navigation-0-link`
- `well-login-navigation-produtos-link`
- `well-login-navigation-cafeina-link`
- `well-login-navigation-colageno-link`
- `well-login-navigation-omega-3-link`
- `well-login-navigation-whey-100-concentrado-link`
- `well-login-navigation-whey-isolado-link`
- `well-login-navigation-termogenico-link`
- `well-login-navigation-zma-pre-hormonal-link`
- `well-login-navigation-bcaa-link`
- `well-login-navigation-creatina-link`
- `well-login-navigation-whey-protein-link`
- `well-login-navigation-barra-de-proteina-link`
- `well-login-navigation-hipercalorico-link`
- `well-login-navigation-pre-treino-link`
- `well-login-navigation-promocoes-link`
- `well-login-navigation-objetivos-link`
- `well-login-content-formlogin-form`
- `well-login-form-login-email-input`
- `well-login-form-login-senha-input`
- `well-login-form-entrar-button`
- `well-login-form-esqueceu-a-senha-link`
- `well-login-form-nao-tem-uma-conta-cadastre-se-link`
- `well-login-form-esqueceu-sua-senha-link`
- `well-login-footer-a-link`
- `well-login-footer-a-link-2`
- `well-login-footer-a-link-3`
- `well-login-footer-a-empresa-link`
- `well-login-footer-seguranca-link`
- `well-login-footer-politica-de-privacidade-link`
- `well-login-footer-como-comprar-link`
- `well-login-footer-entregas-link`
- `well-login-footer-pagamentos-link`
- `well-login-footer-trocas-e-devolucoes-link`
- `well-login-content-a-link`

### html/pages/admin.html (24)

- `well-admin-navigation-well-suplementos-link`
- `well-admin-navigation-logout-button`
- `well-admin-content-authform-form`
- `well-admin-form-email-input`
- `well-admin-form-password-input`
- `well-admin-form-authbtn-button`
- `well-admin-content-newbtn-button`
- `well-admin-content-search-input`
- `well-admin-content-visualizar-loja-link`
- `well-admin-content-productform-form`
- `well-admin-form-closebtn-button`
- `well-admin-form-name-input`
- `well-admin-form-cat-input`
- `well-admin-form-price-input`
- `well-admin-form-stock-input`
- `well-admin-form-label-input`
- `well-admin-form-desc-input`
- `well-admin-form-image-input`
- `well-admin-form-active-input`
- `well-admin-form-cancelbtn-button`
- `well-admin-form-salvar-produto-button`
- `well-admin-content-ver-pedidos-recebidos-link`
- `well-admin-content-dashboard-de-vendas-link`
- `well-admin-content-lotes-e-validade-link`

### html/pages/trocas.html (17)

- `well-trocas-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-trocas-navigation-inicio-link`
- `well-trocas-navigation-loja-link`
- `well-trocas-navigation-produtos-link`
- `well-trocas-navigation-minha-conta-link`
- `well-trocas-navigation-criar-minha-conta-link`
- `well-trocas-navigation-searchinput-input`
- `well-trocas-navigation-favoritos-button`
- `well-trocas-navigation-carrinho-link`
- `well-trocas-content-ver-toda-a-loja-link`
- `well-trocas-content-minha-conta-link`
- `well-trocas-footer-todos-os-produtos-link`
- `well-trocas-footer-meu-carrinho-link`
- `well-trocas-footer-sobre-nos-link`
- `well-trocas-footer-entregas-link`
- `well-trocas-footer-trocas-e-devolucoes-link`
- `well-trocas-footer-privacidade-link`

### html/pages/admin-dashboard.html (5)

- `well-admin-dashboard-navigation-produtos-link`
- `well-admin-dashboard-navigation-pedidos-e-entregas-link`
- `well-admin-dashboard-navigation-movimentacoes-link`
- `well-admin-dashboard-navigation-refresh-button`
- `well-admin-dashboard-content-lotes-e-validade-link`

### html/pages/colageno.html (35)

- `well-colageno-navigation-a-link`
- `well-colageno-navigation-inputbusca-input`
- `well-colageno-navigation-btnbusca-button`
- `well-colageno-navigation-user-menu-link`
- `well-colageno-navigation-favoritos-link`
- `well-colageno-navigation-0-link`
- `well-colageno-navigation-produtos-link`
- `well-colageno-navigation-cafeina-link`
- `well-colageno-navigation-colageno-link`
- `well-colageno-navigation-omega-3-link`
- `well-colageno-navigation-whey-100-concentrado-link`
- `well-colageno-navigation-whey-isolado-link`
- `well-colageno-navigation-termogenico-link`
- `well-colageno-navigation-zma-pre-hormonal-link`
- `well-colageno-navigation-bcaa-link`
- `well-colageno-navigation-creatina-link`
- `well-colageno-navigation-whey-protein-link`
- `well-colageno-navigation-barra-de-proteina-link`
- `well-colageno-navigation-hipercalorico-link`
- `well-colageno-navigation-pre-treino-link`
- `well-colageno-navigation-promocoes-link`
- `well-colageno-navigation-objetivos-link`
- `well-colageno-content-comprar-button`
- `well-colageno-content-comprar-button-2`
- `well-colageno-footer-a-link`
- `well-colageno-footer-a-link-2`
- `well-colageno-footer-a-link-3`
- `well-colageno-footer-a-empresa-link`
- `well-colageno-footer-seguranca-link`
- `well-colageno-footer-politica-de-privacidade-link`
- `well-colageno-footer-como-comprar-link`
- `well-colageno-footer-entregas-link`
- `well-colageno-footer-pagamentos-link`
- `well-colageno-footer-trocas-e-devolucoes-link`
- `well-colageno-content-a-link`

### html/pages/como-comprar.html (17)

- `well-como-comprar-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-como-comprar-navigation-inicio-link`
- `well-como-comprar-navigation-loja-link`
- `well-como-comprar-navigation-produtos-link`
- `well-como-comprar-navigation-minha-conta-link`
- `well-como-comprar-navigation-criar-minha-conta-link`
- `well-como-comprar-navigation-searchinput-input`
- `well-como-comprar-navigation-favoritos-button`
- `well-como-comprar-navigation-carrinho-link`
- `well-como-comprar-content-ver-toda-a-loja-link`
- `well-como-comprar-content-minha-conta-link`
- `well-como-comprar-footer-todos-os-produtos-link`
- `well-como-comprar-footer-meu-carrinho-link`
- `well-como-comprar-footer-sobre-nos-link`
- `well-como-comprar-footer-entregas-link`
- `well-como-comprar-footer-trocas-e-devolucoes-link`
- `well-como-comprar-footer-privacidade-link`

### html/pages/omega3.html (33)

- `well-omega3-navigation-a-link`
- `well-omega3-navigation-inputbusca-input`
- `well-omega3-navigation-btnbusca-button`
- `well-omega3-navigation-user-menu-link`
- `well-omega3-navigation-favoritos-link`
- `well-omega3-navigation-0-link`
- `well-omega3-navigation-produtos-link`
- `well-omega3-navigation-cafeina-link`
- `well-omega3-navigation-colageno-link`
- `well-omega3-navigation-omega-3-link`
- `well-omega3-navigation-whey-100-concentrado-link`
- `well-omega3-navigation-whey-isolado-link`
- `well-omega3-navigation-termogenico-link`
- `well-omega3-navigation-zma-pre-hormonal-link`
- `well-omega3-navigation-bcaa-link`
- `well-omega3-navigation-creatina-link`
- `well-omega3-navigation-whey-protein-link`
- `well-omega3-navigation-barra-de-proteina-link`
- `well-omega3-navigation-hipercalorico-link`
- `well-omega3-navigation-pre-treino-link`
- `well-omega3-navigation-promocoes-link`
- `well-omega3-navigation-objetivos-link`
- `well-omega3-footer-a-link`
- `well-omega3-footer-a-link-2`
- `well-omega3-footer-a-link-3`
- `well-omega3-footer-a-empresa-link`
- `well-omega3-footer-seguranca-link`
- `well-omega3-footer-politica-de-privacidade-link`
- `well-omega3-footer-como-comprar-link`
- `well-omega3-footer-entregas-link`
- `well-omega3-footer-pagamentos-link`
- `well-omega3-footer-trocas-e-devolucoes-link`
- `well-omega3-content-a-link`

### html/pages/hipercalorico.html (40)

- `well-hipercalorico-navigation-a-link`
- `well-hipercalorico-navigation-inputbusca-input`
- `well-hipercalorico-navigation-btnbusca-button`
- `well-hipercalorico-navigation-user-menu-link`
- `well-hipercalorico-navigation-favoritos-link`
- `well-hipercalorico-navigation-0-link`
- `well-hipercalorico-navigation-produtos-link`
- `well-hipercalorico-navigation-cafeina-link`
- `well-hipercalorico-navigation-colageno-link`
- `well-hipercalorico-navigation-omega-3-link`
- `well-hipercalorico-navigation-whey-100-concentrado-link`
- `well-hipercalorico-navigation-whey-isolado-link`
- `well-hipercalorico-navigation-termogenico-link`
- `well-hipercalorico-navigation-zma-pre-hormonal-link`
- `well-hipercalorico-navigation-bcaa-link`
- `well-hipercalorico-navigation-creatina-link`
- `well-hipercalorico-navigation-whey-protein-link`
- `well-hipercalorico-navigation-barra-de-proteina-link`
- `well-hipercalorico-navigation-hipercalorico-link`
- `well-hipercalorico-navigation-pre-treino-link`
- `well-hipercalorico-navigation-promocoes-link`
- `well-hipercalorico-navigation-objetivos-link`
- `well-hipercalorico-content-comprar-button`
- `well-hipercalorico-content-comprar-button-2`
- `well-hipercalorico-content-comprar-button-3`
- `well-hipercalorico-content-esgotado-button`
- `well-hipercalorico-content-esgotado-button-2`
- `well-hipercalorico-content-esgotado-button-3`
- `well-hipercalorico-content-comprar-button-4`
- `well-hipercalorico-footer-a-link`
- `well-hipercalorico-footer-a-link-2`
- `well-hipercalorico-footer-a-link-3`
- `well-hipercalorico-footer-a-empresa-link`
- `well-hipercalorico-footer-seguranca-link`
- `well-hipercalorico-footer-politica-de-privacidade-link`
- `well-hipercalorico-footer-como-comprar-link`
- `well-hipercalorico-footer-entregas-link`
- `well-hipercalorico-footer-pagamentos-link`
- `well-hipercalorico-footer-trocas-e-devolucoes-link`
- `well-hipercalorico-content-a-link`

### html/pages/pagamentos.html (17)

- `well-pagamentos-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-pagamentos-navigation-inicio-link`
- `well-pagamentos-navigation-loja-link`
- `well-pagamentos-navigation-produtos-link`
- `well-pagamentos-navigation-minha-conta-link`
- `well-pagamentos-navigation-criar-minha-conta-link`
- `well-pagamentos-navigation-searchinput-input`
- `well-pagamentos-navigation-favoritos-button`
- `well-pagamentos-navigation-carrinho-link`
- `well-pagamentos-content-ver-toda-a-loja-link`
- `well-pagamentos-content-minha-conta-link`
- `well-pagamentos-footer-todos-os-produtos-link`
- `well-pagamentos-footer-meu-carrinho-link`
- `well-pagamentos-footer-sobre-nos-link`
- `well-pagamentos-footer-entregas-link`
- `well-pagamentos-footer-trocas-e-devolucoes-link`
- `well-pagamentos-footer-privacidade-link`

### html/pages/criar-conta.html (56)

- `well-criar-conta-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-criar-conta-navigation-inicio-link`
- `well-criar-conta-navigation-loja-link`
- `well-criar-conta-navigation-produtos-link`
- `well-criar-conta-navigation-minha-conta-link`
- `well-criar-conta-navigation-criar-minha-conta-link`
- `well-criar-conta-navigation--form`
- `well-criar-conta-navigation-q-input`
- `well-criar-conta-navigation-favoritos-button`
- `well-criar-conta-navigation-carrinho-link`
- `well-criar-conta-navigation-categorias-button`
- `well-criar-conta-navigation-whey-protein-link`
- `well-criar-conta-navigation-whey-isolado-link`
- `well-criar-conta-navigation-whey-hidrolisado-link`
- `well-criar-conta-navigation-creatina-link`
- `well-criar-conta-navigation-pre-treinos-link`
- `well-criar-conta-navigation-vitaminas-link`
- `well-criar-conta-navigation-vitaminas-e-minerais-link`
- `well-criar-conta-navigation-bcaa-link`
- `well-criar-conta-navigation-glutamina-link`
- `well-criar-conta-navigation-albumina-link`
- `well-criar-conta-navigation-hipercaloricos-link`
- `well-criar-conta-navigation-termogenicos-link`
- `well-criar-conta-navigation-waxy-maize-link`
- `well-criar-conta-navigation-aminoacidos-link`
- `well-criar-conta-navigation-colageno-link`
- `well-criar-conta-navigation-omega-3-link`
- `well-criar-conta-navigation-snacks-link`
- `well-criar-conta-navigation-barras-de-proteina-link`
- `well-criar-conta-navigation-pastas-e-snacks-link`
- `well-criar-conta-navigation-hidratacao-link`
- `well-criar-conta-navigation-eletrolitos-e-isotonicos-link`
- `well-criar-conta-navigation-proteina-vegetal-link`
- `well-criar-conta-navigation-creatina-link-2`
- `well-criar-conta-navigation-pre-treinos-link-2`
- `well-criar-conta-navigation-whey-protein-link-2`
- `well-criar-conta-navigation-snacks-link-2`
- `well-criar-conta-content-auth-form`
- `well-criar-conta-form-name-input`
- `well-criar-conta-form-email-input`
- `well-criar-conta-form-password-input`
- `well-criar-conta-form-mostrar-senha-button`
- `well-criar-conta-form-confirm-input`
- `well-criar-conta-form-mostrar-senha-button-2`
- `well-criar-conta-form-phone-input`
- `well-criar-conta-form-cep-input`
- `well-criar-conta-form-rua-input`
- `well-criar-conta-form-numero-input`
- `well-criar-conta-form-complemento-input`
- `well-criar-conta-form-bairro-input`
- `well-criar-conta-form-cidade-input`
- `well-criar-conta-form-uf-input`
- `well-criar-conta-form-criar-minha-conta-button`
- `well-criar-conta-content-ja-tenho-uma-conta-link`
- `well-criar-conta-footer-continuar-comprando-link`
- `well-criar-conta-footer-privacidade-link`

### html/pages/index.html (45)

- `well-index-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-index-navigation-inicio-link`
- `well-index-navigation-loja-link`
- `well-index-navigation-produtos-link`
- `well-index-navigation-minha-conta-link`
- `well-index-navigation-criar-minha-conta-link`
- `well-index-navigation-searchinput-input`
- `well-index-navigation-favoritos-button`
- `well-index-navigation-carrinho-link`
- `well-index-navigation-categorias-button`
- `well-index-navigation-whey-protein-link`
- `well-index-navigation-whey-isolado-link`
- `well-index-navigation-whey-hidrolisado-link`
- `well-index-navigation-creatina-link`
- `well-index-navigation-pre-treinos-link`
- `well-index-navigation-vitaminas-link`
- `well-index-navigation-vitaminas-e-minerais-link`
- `well-index-navigation-bcaa-link`
- `well-index-navigation-glutamina-link`
- `well-index-navigation-albumina-link`
- `well-index-navigation-hipercaloricos-link`
- `well-index-navigation-termogenicos-link`
- `well-index-navigation-waxy-maize-link`
- `well-index-navigation-aminoacidos-link`
- `well-index-navigation-colageno-link`
- `well-index-navigation-omega-3-link`
- `well-index-navigation-snacks-link`
- `well-index-navigation-barras-de-proteina-link`
- `well-index-navigation-pastas-e-snacks-link`
- `well-index-navigation-hidratacao-link`
- `well-index-navigation-eletrolitos-e-isotonicos-link`
- `well-index-navigation-proteina-vegetal-link`
- `well-index-navigation-creatina-link-2`
- `well-index-navigation-pre-treinos-link-2`
- `well-index-navigation-whey-protein-link-2`
- `well-index-navigation-snacks-link-2`
- `well-index-content-ver-todos-os-suplementos-na-loja-link`
- `well-index-content-ver-todos-os-produtos-link`
- `well-index-content-ver-toda-a-loja-link`
- `well-index-footer-todos-os-produtos-link`
- `well-index-footer-meu-carrinho-link`
- `well-index-footer-sobre-nos-link`
- `well-index-footer-entregas-link`
- `well-index-footer-trocas-e-devolucoes-link`
- `well-index-footer-privacidade-link`

### html/pages/checkout.html (53)

- `well-checkout-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-checkout-navigation-inicio-link`
- `well-checkout-navigation-loja-link`
- `well-checkout-navigation-produtos-link`
- `well-checkout-navigation-minha-conta-link`
- `well-checkout-navigation-criar-minha-conta-link`
- `well-checkout-navigation-searchinput-input`
- `well-checkout-navigation-favoritos-button`
- `well-checkout-navigation-carrinho-link`
- `well-checkout-navigation-categorias-button`
- `well-checkout-navigation-whey-protein-link`
- `well-checkout-navigation-whey-isolado-link`
- `well-checkout-navigation-whey-hidrolisado-link`
- `well-checkout-navigation-creatina-link`
- `well-checkout-navigation-pre-treinos-link`
- `well-checkout-navigation-vitaminas-link`
- `well-checkout-navigation-vitaminas-e-minerais-link`
- `well-checkout-navigation-bcaa-link`
- `well-checkout-navigation-glutamina-link`
- `well-checkout-navigation-albumina-link`
- `well-checkout-navigation-hipercaloricos-link`
- `well-checkout-navigation-termogenicos-link`
- `well-checkout-navigation-waxy-maize-link`
- `well-checkout-navigation-aminoacidos-link`
- `well-checkout-navigation-colageno-link`
- `well-checkout-navigation-omega-3-link`
- `well-checkout-navigation-snacks-link`
- `well-checkout-navigation-barras-de-proteina-link`
- `well-checkout-navigation-pastas-e-snacks-link`
- `well-checkout-navigation-hidratacao-link`
- `well-checkout-navigation-eletrolitos-e-isotonicos-link`
- `well-checkout-navigation-proteina-vegetal-link`
- `well-checkout-navigation-creatina-link-2`
- `well-checkout-navigation-pre-treinos-link-2`
- `well-checkout-navigation-whey-protein-link-2`
- `well-checkout-navigation-snacks-link-2`
- `well-checkout-content-orderform-form`
- `well-checkout-form-nome-input`
- `well-checkout-form-telefone-input`
- `well-checkout-form-cep-input`
- `well-checkout-form-endereco-input`
- `well-checkout-form-numero-input`
- `well-checkout-form-bairro-input`
- `well-checkout-form-cidade-input`
- `well-checkout-form-uf-input`
- `well-checkout-form-obs-textarea`
- `well-checkout-form-registrar-pedido-e-continuar-no-whatsapp-button`
- `well-checkout-footer-todos-os-produtos-link`
- `well-checkout-footer-meu-carrinho-link`
- `well-checkout-footer-sobre-nos-link`
- `well-checkout-footer-entregas-link`
- `well-checkout-footer-trocas-e-devolucoes-link`
- `well-checkout-footer-privacidade-link`

### html/pages/minha-conta.html (36)

- `well-minha-conta-navigation-a-link`
- `well-minha-conta-navigation-inputbusca-input`
- `well-minha-conta-navigation-btnbusca-button`
- `well-minha-conta-navigation-user-menu-link`
- `well-minha-conta-navigation-favoritos-link`
- `well-minha-conta-navigation-0-link`
- `well-minha-conta-navigation-produtos-link`
- `well-minha-conta-navigation-cafeina-link`
- `well-minha-conta-navigation-colageno-link`
- `well-minha-conta-navigation-omega-3-link`
- `well-minha-conta-navigation-whey-100-concentrado-link`
- `well-minha-conta-navigation-whey-isolado-link`
- `well-minha-conta-navigation-termogenico-link`
- `well-minha-conta-navigation-zma-pre-hormonal-link`
- `well-minha-conta-navigation-bcaa-link`
- `well-minha-conta-navigation-creatina-link`
- `well-minha-conta-navigation-whey-protein-link`
- `well-minha-conta-navigation-barra-de-proteina-link`
- `well-minha-conta-navigation-hipercalorico-link`
- `well-minha-conta-navigation-pre-treino-link`
- `well-minha-conta-navigation-promocoes-link`
- `well-minha-conta-navigation-objetivos-link`
- `well-minha-conta-content-ir-para-o-carrinho-link`
- `well-minha-conta-content-ir-para-o-carrinho-button`
- `well-minha-conta-content-sair-da-conta-button`
- `well-minha-conta-footer-a-link`
- `well-minha-conta-footer-a-link-2`
- `well-minha-conta-footer-a-link-3`
- `well-minha-conta-footer-a-empresa-link`
- `well-minha-conta-footer-seguranca-link`
- `well-minha-conta-footer-politica-de-privacidade-link`
- `well-minha-conta-footer-como-comprar-link`
- `well-minha-conta-footer-entregas-link`
- `well-minha-conta-footer-pagamentos-link`
- `well-minha-conta-footer-trocas-e-devolucoes-link`
- `well-minha-conta-content-a-link`

### html/pages/seguranca.html (17)

- `well-seguranca-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-seguranca-navigation-inicio-link`
- `well-seguranca-navigation-loja-link`
- `well-seguranca-navigation-produtos-link`
- `well-seguranca-navigation-minha-conta-link`
- `well-seguranca-navigation-criar-minha-conta-link`
- `well-seguranca-navigation-searchinput-input`
- `well-seguranca-navigation-favoritos-button`
- `well-seguranca-navigation-carrinho-link`
- `well-seguranca-content-ver-toda-a-loja-link`
- `well-seguranca-content-minha-conta-link`
- `well-seguranca-footer-todos-os-produtos-link`
- `well-seguranca-footer-meu-carrinho-link`
- `well-seguranca-footer-sobre-nos-link`
- `well-seguranca-footer-entregas-link`
- `well-seguranca-footer-trocas-e-devolucoes-link`
- `well-seguranca-footer-privacidade-link`

### html/pages/admin-estoque.html (3)

- `well-admin-estoque-content-pedidos-link`
- `well-admin-estoque-content-painel-link`
- `well-admin-estoque-content-lotes-e-validade-link`

### html/pages/admin-pedidos.html (3)

- `well-admin-pedidos-content-ver-dashboard-de-vendas-link`
- `well-admin-pedidos-content-ver-historico-de-estoque-link`
- `well-admin-pedidos-content-gerenciar-produtos-link`

### html/pages/promo#U00e7#U00f5es.html (39)

- `well-promocoes-navigation-a-link`
- `well-promocoes-navigation-inputbusca-input`
- `well-promocoes-navigation-btnbusca-button`
- `well-promocoes-navigation-user-menu-link`
- `well-promocoes-navigation-favoritos-link`
- `well-promocoes-navigation-0-link`
- `well-promocoes-navigation-produtos-link`
- `well-promocoes-navigation-cafeina-link`
- `well-promocoes-navigation-colageno-link`
- `well-promocoes-navigation-omega-3-link`
- `well-promocoes-navigation-whey-100-concentrado-link`
- `well-promocoes-navigation-whey-isolado-link`
- `well-promocoes-navigation-termogenico-link`
- `well-promocoes-navigation-zma-pre-hormonal-link`
- `well-promocoes-navigation-bcaa-link`
- `well-promocoes-navigation-creatina-link`
- `well-promocoes-navigation-whey-protein-link`
- `well-promocoes-navigation-barra-de-proteina-link`
- `well-promocoes-navigation-hipercalorico-link`
- `well-promocoes-navigation-pre-treino-link`
- `well-promocoes-navigation-promocoes-link`
- `well-promocoes-navigation-objetivos-link`
- `well-promocoes-content-comprar-button`
- `well-promocoes-content-comprar-button-2`
- `well-promocoes-content-comprar-button-3`
- `well-promocoes-content-comprar-button-4`
- `well-promocoes-content-comprar-button-5`
- `well-promocoes-content-esgotado-button`
- `well-promocoes-footer-a-link`
- `well-promocoes-footer-a-link-2`
- `well-promocoes-footer-a-link-3`
- `well-promocoes-footer-a-empresa-link`
- `well-promocoes-footer-seguranca-link`
- `well-promocoes-footer-politica-de-privacidade-link`
- `well-promocoes-footer-como-comprar-link`
- `well-promocoes-footer-entregas-link`
- `well-promocoes-footer-pagamentos-link`
- `well-promocoes-footer-trocas-e-devolucoes-link`
- `well-promocoes-content-a-link`

### html/pages/whey.html (41)

- `well-whey-navigation-a-link`
- `well-whey-navigation-inputbusca-input`
- `well-whey-navigation-btnbusca-button`
- `well-whey-navigation-user-menu-link`
- `well-whey-navigation-favoritos-link`
- `well-whey-navigation-0-link`
- `well-whey-navigation-produtos-link`
- `well-whey-navigation-cafeina-link`
- `well-whey-navigation-colageno-link`
- `well-whey-navigation-omega-3-link`
- `well-whey-navigation-whey-100-concentrado-link`
- `well-whey-navigation-whey-isolado-link`
- `well-whey-navigation-termogenico-link`
- `well-whey-navigation-zma-pre-hormonal-link`
- `well-whey-navigation-bcaa-link`
- `well-whey-navigation-creatina-link`
- `well-whey-navigation-whey-protein-link`
- `well-whey-navigation-barra-de-proteina-link`
- `well-whey-navigation-hipercalorico-link`
- `well-whey-navigation-pre-treino-link`
- `well-whey-navigation-promocoes-link`
- `well-whey-navigation-objetivos-link`
- `well-whey-content-comprar-button`
- `well-whey-content-esgotado-button`
- `well-whey-content-comprar-button-2`
- `well-whey-content-comprar-button-3`
- `well-whey-content-comprar-button-4`
- `well-whey-content-comprar-button-5`
- `well-whey-content-comprar-button-6`
- `well-whey-content-esgotado-button-2`
- `well-whey-footer-a-link`
- `well-whey-footer-a-link-2`
- `well-whey-footer-a-link-3`
- `well-whey-footer-a-empresa-link`
- `well-whey-footer-seguranca-link`
- `well-whey-footer-politica-de-privacidade-link`
- `well-whey-footer-como-comprar-link`
- `well-whey-footer-entregas-link`
- `well-whey-footer-pagamentos-link`
- `well-whey-footer-trocas-e-devolucoes-link`
- `well-whey-content-a-link`

### html/pages/creatina.html (44)

- `well-creatina-navigation-a-link`
- `well-creatina-navigation-inputbusca-input`
- `well-creatina-navigation-btnbusca-button`
- `well-creatina-navigation-user-menu-link`
- `well-creatina-navigation-favoritos-link`
- `well-creatina-navigation-0-link`
- `well-creatina-navigation-produtos-link`
- `well-creatina-navigation-cafeina-link`
- `well-creatina-navigation-colageno-link`
- `well-creatina-navigation-omega-3-link`
- `well-creatina-navigation-whey-100-concentrado-link`
- `well-creatina-navigation-whey-isolado-link`
- `well-creatina-navigation-termogenico-link`
- `well-creatina-navigation-zma-pre-hormonal-link`
- `well-creatina-navigation-bcaa-link`
- `well-creatina-navigation-creatina-link`
- `well-creatina-navigation-whey-protein-link`
- `well-creatina-navigation-barra-de-proteina-link`
- `well-creatina-navigation-hipercalorico-link`
- `well-creatina-navigation-pre-treino-link`
- `well-creatina-navigation-promocoes-link`
- `well-creatina-navigation-objetivos-link`
- `well-creatina-content-comprar-button`
- `well-creatina-content-comprar-button-2`
- `well-creatina-content-comprar-button-3`
- `well-creatina-content-comprar-button-4`
- `well-creatina-content-comprar-button-5`
- `well-creatina-content-comprar-button-6`
- `well-creatina-content-esgotado-button`
- `well-creatina-content-comprar-button-7`
- `well-creatina-content-comprar-button-8`
- `well-creatina-content-comprar-button-9`
- `well-creatina-content-comprar-button-10`
- `well-creatina-footer-a-link`
- `well-creatina-footer-a-link-2`
- `well-creatina-footer-a-link-3`
- `well-creatina-footer-a-empresa-link`
- `well-creatina-footer-seguranca-link`
- `well-creatina-footer-politica-de-privacidade-link`
- `well-creatina-footer-como-comprar-link`
- `well-creatina-footer-entregas-link`
- `well-creatina-footer-pagamentos-link`
- `well-creatina-footer-trocas-e-devolucoes-link`
- `well-creatina-content-a-link`

### html/pages/whey-isolado.html (35)

- `well-whey-isolado-navigation-a-link`
- `well-whey-isolado-navigation-inputbusca-input`
- `well-whey-isolado-navigation-btnbusca-button`
- `well-whey-isolado-navigation-user-menu-link`
- `well-whey-isolado-navigation-favoritos-link`
- `well-whey-isolado-navigation-0-link`
- `well-whey-isolado-navigation-produtos-link`
- `well-whey-isolado-navigation-cafeina-link`
- `well-whey-isolado-navigation-colageno-link`
- `well-whey-isolado-navigation-omega-3-link`
- `well-whey-isolado-navigation-whey-100-concentrado-link`
- `well-whey-isolado-navigation-whey-isolado-link`
- `well-whey-isolado-navigation-termogenico-link`
- `well-whey-isolado-navigation-zma-pre-hormonal-link`
- `well-whey-isolado-navigation-bcaa-link`
- `well-whey-isolado-navigation-creatina-link`
- `well-whey-isolado-navigation-whey-protein-link`
- `well-whey-isolado-navigation-barra-de-proteina-link`
- `well-whey-isolado-navigation-hipercalorico-link`
- `well-whey-isolado-navigation-pre-treino-link`
- `well-whey-isolado-navigation-promocoes-link`
- `well-whey-isolado-navigation-objetivos-link`
- `well-whey-isolado-content-comprar-button`
- `well-whey-isolado-content-comprar-button-2`
- `well-whey-isolado-footer-a-link`
- `well-whey-isolado-footer-a-link-2`
- `well-whey-isolado-footer-a-link-3`
- `well-whey-isolado-footer-a-empresa-link`
- `well-whey-isolado-footer-seguranca-link`
- `well-whey-isolado-footer-politica-de-privacidade-link`
- `well-whey-isolado-footer-como-comprar-link`
- `well-whey-isolado-footer-entregas-link`
- `well-whey-isolado-footer-pagamentos-link`
- `well-whey-isolado-footer-trocas-e-devolucoes-link`
- `well-whey-isolado-content-a-link`

### html/pages/cadastro-cliente.html (48)

- `well-cadastro-cliente-navigation-a-link`
- `well-cadastro-cliente-navigation-inputbusca-input`
- `well-cadastro-cliente-navigation-btnbusca-button`
- `well-cadastro-cliente-navigation-user-menu-link`
- `well-cadastro-cliente-navigation-favoritos-link`
- `well-cadastro-cliente-navigation-0-link`
- `well-cadastro-cliente-navigation-produtos-link`
- `well-cadastro-cliente-navigation-cafeina-link`
- `well-cadastro-cliente-navigation-colageno-link`
- `well-cadastro-cliente-navigation-omega-3-link`
- `well-cadastro-cliente-navigation-whey-100-concentrado-link`
- `well-cadastro-cliente-navigation-whey-isolado-link`
- `well-cadastro-cliente-navigation-termogenico-link`
- `well-cadastro-cliente-navigation-zma-pre-hormonal-link`
- `well-cadastro-cliente-navigation-bcaa-link`
- `well-cadastro-cliente-navigation-creatina-link`
- `well-cadastro-cliente-navigation-whey-protein-link`
- `well-cadastro-cliente-navigation-barra-de-proteina-link`
- `well-cadastro-cliente-navigation-hipercalorico-link`
- `well-cadastro-cliente-navigation-pre-treino-link`
- `well-cadastro-cliente-navigation-promocoes-link`
- `well-cadastro-cliente-navigation-objetivos-link`
- `well-cadastro-cliente-content-formcadastro-form`
- `well-cadastro-cliente-form-nome-input`
- `well-cadastro-cliente-form-sobrenome-input`
- `well-cadastro-cliente-form-seuemail-exemplo-com-input`
- `well-cadastro-cliente-form-celular-input`
- `well-cadastro-cliente-form-senha-input`
- `well-cadastro-cliente-form-confirmar-senha-input`
- `well-cadastro-cliente-form-cep-input`
- `well-cadastro-cliente-form-rua-input`
- `well-cadastro-cliente-form-numero-input`
- `well-cadastro-cliente-form-bairro-input`
- `well-cadastro-cliente-form-cidade-input`
- `well-cadastro-cliente-form-uf-input`
- `well-cadastro-cliente-form-btn-cadastrar-button`
- `well-cadastro-cliente-content-ja-tem-uma-conta-conecte-se-link`
- `well-cadastro-cliente-footer-a-link`
- `well-cadastro-cliente-footer-a-link-2`
- `well-cadastro-cliente-footer-a-link-3`
- `well-cadastro-cliente-footer-a-empresa-link`
- `well-cadastro-cliente-footer-seguranca-link`
- `well-cadastro-cliente-footer-politica-de-privacidade-link`
- `well-cadastro-cliente-footer-como-comprar-link`
- `well-cadastro-cliente-footer-entregas-link`
- `well-cadastro-cliente-footer-pagamentos-link`
- `well-cadastro-cliente-footer-trocas-e-devolucoes-link`
- `well-cadastro-cliente-content-a-link`

### html/pages/objetivos.html (37)

- `well-objetivos-navigation-a-link`
- `well-objetivos-navigation-inputbusca-input`
- `well-objetivos-navigation-btnbusca-button`
- `well-objetivos-navigation-user-menu-link`
- `well-objetivos-navigation-favoritos-link`
- `well-objetivos-navigation-0-link`
- `well-objetivos-navigation-produtos-link`
- `well-objetivos-navigation-cafeina-link`
- `well-objetivos-navigation-colageno-link`
- `well-objetivos-navigation-omega-3-link`
- `well-objetivos-navigation-whey-100-concentrado-link`
- `well-objetivos-navigation-whey-isolado-link`
- `well-objetivos-navigation-termogenico-link`
- `well-objetivos-navigation-zma-pre-hormonal-link`
- `well-objetivos-navigation-bcaa-link`
- `well-objetivos-navigation-creatina-link`
- `well-objetivos-navigation-whey-protein-link`
- `well-objetivos-navigation-barra-de-proteina-link`
- `well-objetivos-navigation-hipercalorico-link`
- `well-objetivos-navigation-pre-treino-link`
- `well-objetivos-navigation-promocoes-link`
- `well-objetivos-navigation-objetivos-link`
- `well-objetivos-content-ver-suplementos-link`
- `well-objetivos-content-explorar-produtos-link`
- `well-objetivos-content-ver-pre-treinos-link`
- `well-objetivos-content-ver-linha-saude-link`
- `well-objetivos-footer-a-link`
- `well-objetivos-footer-a-link-2`
- `well-objetivos-footer-a-link-3`
- `well-objetivos-footer-a-empresa-link`
- `well-objetivos-footer-seguranca-link`
- `well-objetivos-footer-politica-de-privacidade-link`
- `well-objetivos-footer-como-comprar-link`
- `well-objetivos-footer-entregas-link`
- `well-objetivos-footer-pagamentos-link`
- `well-objetivos-footer-trocas-e-devolucoes-link`
- `well-objetivos-content-a-link`

### html/pages/entrar.html (45)

- `well-entrar-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-entrar-navigation-inicio-link`
- `well-entrar-navigation-loja-link`
- `well-entrar-navigation-produtos-link`
- `well-entrar-navigation-minha-conta-link`
- `well-entrar-navigation-criar-minha-conta-link`
- `well-entrar-navigation--form`
- `well-entrar-navigation-q-input`
- `well-entrar-navigation-favoritos-button`
- `well-entrar-navigation-carrinho-link`
- `well-entrar-navigation-categorias-button`
- `well-entrar-navigation-whey-protein-link`
- `well-entrar-navigation-whey-isolado-link`
- `well-entrar-navigation-whey-hidrolisado-link`
- `well-entrar-navigation-creatina-link`
- `well-entrar-navigation-pre-treinos-link`
- `well-entrar-navigation-vitaminas-link`
- `well-entrar-navigation-vitaminas-e-minerais-link`
- `well-entrar-navigation-bcaa-link`
- `well-entrar-navigation-glutamina-link`
- `well-entrar-navigation-albumina-link`
- `well-entrar-navigation-hipercaloricos-link`
- `well-entrar-navigation-termogenicos-link`
- `well-entrar-navigation-waxy-maize-link`
- `well-entrar-navigation-aminoacidos-link`
- `well-entrar-navigation-colageno-link`
- `well-entrar-navigation-omega-3-link`
- `well-entrar-navigation-snacks-link`
- `well-entrar-navigation-barras-de-proteina-link`
- `well-entrar-navigation-pastas-e-snacks-link`
- `well-entrar-navigation-hidratacao-link`
- `well-entrar-navigation-eletrolitos-e-isotonicos-link`
- `well-entrar-navigation-proteina-vegetal-link`
- `well-entrar-navigation-creatina-link-2`
- `well-entrar-navigation-pre-treinos-link-2`
- `well-entrar-navigation-whey-protein-link-2`
- `well-entrar-navigation-snacks-link-2`
- `well-entrar-content-auth-form`
- `well-entrar-form-email-input`
- `well-entrar-form-password-input`
- `well-entrar-form-mostrar-senha-button`
- `well-entrar-form-entrar-na-minha-conta-button`
- `well-entrar-content-criar-minha-conta-link`
- `well-entrar-footer-continuar-comprando-link`
- `well-entrar-footer-privacidade-link`

### html/pages/redefinir-senha.html (5)

- `well-redefinir-senha-content-voltar-ao-login-link`
- `well-redefinir-senha-content-form`
- `well-redefinir-senha-form-password-input`
- `well-redefinir-senha-form-confirm-input`
- `well-redefinir-senha-form-continuar-button`

### html/pages/minha-conta-cliente.html (60)

- `well-minha-conta-cliente-navigation-well-suplementos-evolua-todos-os-dias-link`
- `well-minha-conta-cliente-navigation-inicio-link`
- `well-minha-conta-cliente-navigation-loja-link`
- `well-minha-conta-cliente-navigation-produtos-link`
- `well-minha-conta-cliente-navigation-minha-conta-link`
- `well-minha-conta-cliente-navigation-criar-minha-conta-link`
- `well-minha-conta-cliente-navigation-favoritos-link`
- `well-minha-conta-cliente-navigation-carrinho-link`
- `well-minha-conta-cliente-navigation-categorias-button`
- `well-minha-conta-cliente-navigation-whey-protein-link`
- `well-minha-conta-cliente-navigation-whey-isolado-link`
- `well-minha-conta-cliente-navigation-whey-hidrolisado-link`
- `well-minha-conta-cliente-navigation-creatina-link`
- `well-minha-conta-cliente-navigation-pre-treinos-link`
- `well-minha-conta-cliente-navigation-vitaminas-link`
- `well-minha-conta-cliente-navigation-vitaminas-e-minerais-link`
- `well-minha-conta-cliente-navigation-bcaa-link`
- `well-minha-conta-cliente-navigation-glutamina-link`
- `well-minha-conta-cliente-navigation-albumina-link`
- `well-minha-conta-cliente-navigation-hipercaloricos-link`
- `well-minha-conta-cliente-navigation-termogenicos-link`
- `well-minha-conta-cliente-navigation-waxy-maize-link`
- `well-minha-conta-cliente-navigation-aminoacidos-link`
- `well-minha-conta-cliente-navigation-colageno-link`
- `well-minha-conta-cliente-navigation-omega-3-link`
- `well-minha-conta-cliente-navigation-snacks-link`
- `well-minha-conta-cliente-navigation-barras-de-proteina-link`
- `well-minha-conta-cliente-navigation-pastas-e-snacks-link`
- `well-minha-conta-cliente-navigation-hidratacao-link`
- `well-minha-conta-cliente-navigation-eletrolitos-e-isotonicos-link`
- `well-minha-conta-cliente-navigation-proteina-vegetal-link`
- `well-minha-conta-cliente-navigation-creatina-link-2`
- `well-minha-conta-cliente-navigation-pre-treinos-link-2`
- `well-minha-conta-cliente-navigation-whey-protein-link-2`
- `well-minha-conta-cliente-navigation-snacks-link-2`
- `well-minha-conta-cliente-navigation-meus-pedidos-link`
- `well-minha-conta-cliente-navigation-dados-pessoais-link`
- `well-minha-conta-cliente-navigation-ver-toda-a-loja-link`
- `well-minha-conta-cliente-navigation-meu-carrinho-link`
- `well-minha-conta-cliente-content-logout-button`
- `well-minha-conta-cliente-content-resendverification-button`
- `well-minha-conta-cliente-content-profileform-form`
- `well-minha-conta-cliente-form-profilename-input`
- `well-minha-conta-cliente-form-profileemail-input`
- `well-minha-conta-cliente-form-profilephone-input`
- `well-minha-conta-cliente-form-profilecep-input`
- `well-minha-conta-cliente-form-profilerua-input`
- `well-minha-conta-cliente-form-deliverynumero-input`
- `well-minha-conta-cliente-form-deliverycomplemento-input`
- `well-minha-conta-cliente-form-profilebairro-input`
- `well-minha-conta-cliente-form-profilecidade-input`
- `well-minha-conta-cliente-form-profileuf-input`
- `well-minha-conta-cliente-form-saveprofile-button`
- `well-minha-conta-cliente-content-central-de-ajuda-link`
- `well-minha-conta-cliente-footer-todos-os-produtos-link`
- `well-minha-conta-cliente-footer-meu-carrinho-link`
- `well-minha-conta-cliente-footer-sobre-nos-link`
- `well-minha-conta-cliente-footer-entregas-link`
- `well-minha-conta-cliente-footer-trocas-e-devolucoes-link`
- `well-minha-conta-cliente-footer-privacidade-link`

### html/pages/bcaa.html (37)

- `well-bcaa-navigation-a-link`
- `well-bcaa-navigation-inputbusca-input`
- `well-bcaa-navigation-btnbusca-button`
- `well-bcaa-navigation-user-menu-link`
- `well-bcaa-navigation-favoritos-link`
- `well-bcaa-navigation-0-link`
- `well-bcaa-navigation-produtos-link`
- `well-bcaa-navigation-cafeina-link`
- `well-bcaa-navigation-colageno-link`
- `well-bcaa-navigation-omega-3-link`
- `well-bcaa-navigation-whey-100-concentrado-link`
- `well-bcaa-navigation-whey-isolado-link`
- `well-bcaa-navigation-termogenico-link`
- `well-bcaa-navigation-zma-pre-hormonal-link`
- `well-bcaa-navigation-bcaa-link`
- `well-bcaa-navigation-creatina-link`
- `well-bcaa-navigation-whey-protein-link`
- `well-bcaa-navigation-barra-de-proteina-link`
- `well-bcaa-navigation-hipercalorico-link`
- `well-bcaa-navigation-pre-treino-link`
- `well-bcaa-navigation-promocoes-link`
- `well-bcaa-navigation-objetivos-link`
- `well-bcaa-content-comprar-button`
- `well-bcaa-content-comprar-button-2`
- `well-bcaa-content-esgotado-button`
- `well-bcaa-content-esgotado-button-2`
- `well-bcaa-footer-a-link`
- `well-bcaa-footer-a-link-2`
- `well-bcaa-footer-a-link-3`
- `well-bcaa-footer-a-empresa-link`
- `well-bcaa-footer-seguranca-link`
- `well-bcaa-footer-politica-de-privacidade-link`
- `well-bcaa-footer-como-comprar-link`
- `well-bcaa-footer-entregas-link`
- `well-bcaa-footer-pagamentos-link`
- `well-bcaa-footer-trocas-e-devolucoes-link`
- `well-bcaa-content-a-link`

### html/pages/erro-404.html (1)

- `well-erro-404-content-voltar-para-a-loja-link`

### html/pages/erro-500.html (1)

- `well-erro-500-content-voltar-para-a-loja-link`

