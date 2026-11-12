# Revisão final — Well Suplementos

Base: Etapa 5 Seletores.

## Correções
- Bloqueio de exclusão de produtos com lotes ou movimentações de estoque, preservando histórico.
- Identificador de produto monotônico persistido em well_settings pelo adaptador existente; considera IDs de produtos, lotes e movimentações. Não requer migration.

## Verificações
- Sintaxe JavaScript: node --check em todos os arquivos.
- Chromium local: tentativa de execução não concluiu; inspeção visual pendente.
- PostgreSQL e Resend reais: não executados.

## Critérios de aceite pendentes
1. Criar produto sem estoque, excluir e criar outro; ID novo deve ser maior.
2. Produto com lote ou movimentação: excluir retorna 409; desativar continua permitido.
3. Produto com pedido: excluir retorna 409.
4. Regressão de cadastro, login, confirmação, redefinição, carrinho, checkout, frete, pedidos, estoque, administração e fila de e-mails.
5. Verificar seletores no DOM, CSS e responsividade.
6. Validar backup/restauração em banco separado, domínio HTTPS, remetente Resend e preflight.

Não homologado para produção. A regra de reserva de estoque na confirmação permanece inalterada.
