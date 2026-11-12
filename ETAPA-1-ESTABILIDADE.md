# Etapa 1 — Estabilidade operacional

- Pedidos preparados não descontam estoque; a confirmação administrativa reserva estoque.
- Arquivamento manual de pedidos ainda aguardando confirmação, sem mexer no estoque. Pedidos arquivados não podem ser reativados.
- Aviso no painel para pedidos pendentes há 7 dias. Não há cancelamento automático.
- Histórico de movimentações de estoque (entradas por cadastro, ajustes, confirmação e devolução por cancelamento), limitado a 500 registros por resposta em `GET /api/admin/stock-movements` (requer login administrativo).
- Lista de pendentes antigos em `GET /api/admin/pending-orders?days=7` (requer login administrativo).
- Exclusão de produtos com histórico de pedidos bloqueada; desative-os em vez de excluir.
- Concorrência: as verificações e o desconto de estoque na confirmação ocorrem no mesmo trecho síncrono do processo Node.js. Isso evita venda dupla no servidor único, mas não equivale a transações de banco de dados para múltiplas instâncias.

## Pendências de produção
- Testar em navegador, especialmente a atualização dos pedidos e produtos.
- Migrar de arquivo JSON para banco transacional antes de executar múltiplas instâncias.
- Fazer backup externo e testar restauração.
- Verificar dados de pedidos antigos antes de usar a nova regra.
