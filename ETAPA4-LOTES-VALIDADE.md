# Etapa 4 — Lotes e validade

Painel: `/pages/admin-lotes.html` (requer login administrativo).

- Cadastro de lote único por produto, data de validade e quantidade de referência.
- Alertas para lotes vencidos e com validade em até 30 dias.
- Alertas de estoque geral baixo (até 5 unidades).
- Ajuste manual da quantidade do lote.
- API protegida por autenticação administrativa.

**Limitação importante:** quantidades de lotes são controle informativo separado de `product.stock`. Não há baixa automática por lote, bloqueio de venda de lotes vencidos, nem conciliação automática com estoque/pedidos. O administrador deve manter os registros atualizados e impedir fisicamente a expedição de lotes vencidos.

O restante da loja e a regra de frete permanecem inalterados.
