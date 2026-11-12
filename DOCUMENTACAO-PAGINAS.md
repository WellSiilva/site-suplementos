# Documentação das páginas — Well Suplementos

**Base:** Well_Suplementos_Etapa2_Administracao.zip  
**Data:** 09/11/2026  
**Escopo:** inventário das páginas HTML presentes no projeto; não representa homologação funcional.

## Como executar

1. Entre na pasta `html`.
2. Execute `node server.js`.
3. Abra `http://localhost:3000/pages/index.html` (ou `http://localhost:3000`, conforme a rota do servidor).
4. Para administração, acesse `http://localhost:3000/pages/admin.html` e autentique-se.

## Mapa de páginas

### Vitrine, catálogo e compra

| Página | Arquivo | Objetivo |
|---|---|---|
| Carrinho / Well Suplementos | `pages/carrinho.html` | Itens selecionados, quantidades e valores. |
| Finalizar pedido / Well Suplementos | `pages/checkout.html` | Revisão de entrega e preparação do pedido via WhatsApp. |
| WellSuplementos / Oficial | `pages/favoritos.html` | Página de favoritos. |
| Início / Well Suplementos | `pages/index.html` | Página inicial, destaques e marcas. |
| Loja / Well Suplementos | `pages/loja.html` | Catálogo e navegação de produtos. |
| WellSuplementos / Oficial | `pages/objetivos.html` | Navegação por objetivos. |

### Conta e autenticação

| Página | Arquivo | Objetivo |
|---|---|---|
| WellSuplementos / Oficial | `pages/cadastro-cliente.html` | Página alternativa de cadastro. |
| Criar minha conta / Well Suplementos | `pages/criar-conta.html` | Cadastro de cliente. |
| Entrar na minha conta / Well Suplementos | `pages/entrar.html` | Formulário de acesso do cliente. |
| Recuperar senha / Well Suplementos | `pages/esqueci-senha.html` | Solicitação de recuperação de senha. |
| WellSuplementos / Oficial | `pages/login.html` | Página alternativa de login. |
| Minha conta / Well Suplementos | `pages/minha-conta-cliente.html` | Área do cliente e histórico de pedidos. |
| WellSuplementos / Oficial | `pages/minha-conta.html` | Página alternativa da área de conta. |
| Redefinir senha / Well Suplementos | `pages/redefinir-senha.html` | Definição de nova senha via token. |
| Verificar e-mail / Well Suplementos | `pages/verificar-email.html` | Confirmação do endereço de e-mail. |

### Administração

| Página | Arquivo | Objetivo |
|---|---|---|
| Visão geral / Well Suplementos | `pages/admin-dashboard.html` | Indicadores de pedidos, vendas e estoque. |
| Movimentações de estoque / Well Suplementos | `pages/admin-estoque.html` | Histórico de movimentações de estoque. |
| Pedidos / Administração Well | `pages/admin-pedidos.html` | Gestão de pedidos, pagamentos e entregas. |
| Painel administrativo / Well Suplementos | `pages/admin.html` | Gestão administrativa de produtos. |

### Institucional, políticas e suporte

| Página | Arquivo | Objetivo |
|---|---|---|
| Como comprar / Well Suplementos | `pages/como-comprar.html` | Orientações de compra. |
| Sobre a Well Suplementos / Well Suplementos | `pages/empresa.html` | Informações sobre a loja. |
| Entregas e frete / Well Suplementos | `pages/entregas.html` | Condições de frete e entrega. |
| Formas de pagamento / Well Suplementos | `pages/pagamentos.html` | Formas de pagamento. |
| Política de privacidade / Well Suplementos | `pages/politica.html` | Política de privacidade. |
| Segurança / Well Suplementos | `pages/seguranca.html` | Informações de segurança. |
| Trocas e devoluções / Well Suplementos | `pages/trocas.html` | Trocas e devoluções. |

### Categorias e vitrines especializadas

| Página | Arquivo | Objetivo |
|---|---|---|
| WellSuplementos / Oficial | `pages/barra-proteina.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/bcaa.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/cafeina.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/colageno.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/creatina.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/hipercalorico.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/omega3.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/pre-treino.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/termogenico.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/whey-isolado.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/whey.html` | Vitrine ou página de categoria de suplementos. |
| WellSuplementos / Oficial | `pages/zma.html` | Vitrine ou página de categoria de suplementos. |

### Outras páginas

| Arquivo |
|---|
| `pages/promo#U00e7#U00f5es.html` |

## Fluxos principais

**Compra:** início/loja → carrinho → checkout → WhatsApp → confirmação administrativa → separação/entrega.

**Conta:** cadastro → confirmação de e-mail (quando configurada) → login → Minha Conta; recuperação de senha por e-mail.

**Administração:** painel → dashboard → pedidos/entregas → histórico de estoque.

## Regras e observações

- O pedido preparado não equivale a uma mensagem enviada no WhatsApp nem a um pedido confirmado.
- A reserva de estoque deve ocorrer somente na confirmação administrativa, conforme a evolução documentada no projeto.
- Frete grátis acima de R$ 100; a condição de Grajaú depende de configuração de cidade/UF.
- Recursos de e-mail dependem de configuração de serviço externo.
- Algumas páginas possuem nomes alternativos ou legados. Não remova ou redirecione sem verificar os links existentes.
- O conteúdo desta documentação foi gerado a partir dos arquivos HTML presentes; funcionalidades e permissões devem ser verificadas em testes.

## Documentos técnicos existentes

Consulte `ETAPA2-ADMINISTRACAO.md`, `ETAPA-1-ESTABILIDADE.md`, `CORRECOES-PEDIDOS-FRETE.md`, `RECUPERACAO-SENHA.md`, `CONFIRMACAO-EMAIL-SEGURANCA.md` e `SESSOES-PERSISTENTES.md`.

**Total de páginas HTML em `pages/`: 39.**
