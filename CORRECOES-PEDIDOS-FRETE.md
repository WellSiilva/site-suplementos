# Correções de pedidos, estoque e frete

- Pedido preparado pelo checkout não reduz estoque.
- Estoque é reservado somente quando administrador muda o status de Aguardando confirmação para Confirmado, Em separação, Enviado ou Concluído; disponibilidade é conferida novamente.
- Cancelamento repõe estoque apenas se houver reserva anterior, e somente uma vez.
- Frete grátis do bairro Grajaú exige configurar FREE_SHIPPING_CITY e FREE_SHIPPING_UF no ambiente e corresponder a bairro, cidade e UF. Sem configuração, apenas pedidos acima de R$ 100 têm frete grátis.
- Prévia do frete consulta a mesma regra do servidor.
- Pedidos antigos mantêm seu histórico; para pedidos antigos com estoque já debitado, deve-se revisar o campo stockReserved antes de cancelar ou mudar o status, pois não existe migração automática segura.
- O link WhatsApp ainda exige ação do cliente; não há comprovação automática de envio da mensagem.

Exemplo de configuração: FREE_SHIPPING_CITY=SuaCidade FREE_SHIPPING_UF=SP STORE_WHATSAPP=5511999999999 node server.js
