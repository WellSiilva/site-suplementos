# Frete e pedidos via WhatsApp

- Bairro exatamente Grajaú (aceita variação de acento e espaços): frete grátis.
- Subtotal de produtos **maior que R$ 100,00**: frete grátis em qualquer bairro.
- Demais pedidos: frete fixo de R$ 20,00.
- Exatamente R$ 100,00 não ativa a promoção por valor, salvo Grajaú.
- O cálculo definitivo é feito no servidor; não confie no total exibido no navegador.
- Configure `STORE_WHATSAPP` no ambiente com DDI 55 + DDD + número, sem pontuação. Sem isso o pedido é registrado, mas não há link de envio.
- O cliente deve clicar em Enviar pedido pelo WhatsApp e confirmar o envio no aplicativo. O site não consegue comprovar que a mensagem foi enviada.
- Pedido registrado não significa pedido confirmado, pago ou entregue.
- ATENÇÃO: falta definir a cidade/UF do Grajaú. A regra atual considera apenas o nome do bairro e pode dar frete grátis a homônimos de outras cidades. Não publique antes de restringir a localidade de entrega.
- O banco JSON local e as sessões em memória não são adequados para operação de produção sem persistência, backups e revisão de segurança.
