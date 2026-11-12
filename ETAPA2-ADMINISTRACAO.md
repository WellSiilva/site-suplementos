# Etapa 2 — Administração

## Incluído
- Dashboard administrativo em `/pages/admin-dashboard.html`, acessível apenas a administradores autenticados.
- Indicadores de pedidos, valores confirmados, valores marcados como pagos, estoque baixo e produtos mais vendidos.
- Gestão manual de responsável pela entrega, data prevista e observações, na página de pedidos.
- Links de navegação entre produtos, pedidos, estoque e dashboard.

## Regras
- Os valores são baseados nos registros de pedidos; não representam necessariamente receita recebida.
- Produtos mais vendidos são calculados a partir de pedidos confirmados, em separação, enviados ou concluídos.
- A entrega é registrada manualmente, sem rastreamento de transportadora.
- Os dados de entrega são visíveis apenas no painel administrativo.

## Pendências
- Testes manuais em navegadores móveis e desktop.
- Configuração de domínio, HTTPS, e-mail e backup externo.
