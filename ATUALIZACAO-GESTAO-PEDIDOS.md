# Gestão de pedidos — Well Suplementos

## Implementado
- Painel de pedidos existente aprimorado: status, subtotal, frete, total e pagamento manual.
- Cancelamento antes do envio devolve o estoque uma única vez.
- Pedido cancelado não pode ser reativado; pedido concluído não retrocede.
- Pedido enviado/concluído não pode ser cancelado diretamente, evitando reposição de estoque indevida.
- Pagamento: Não pago, Pago na entrega ou Pago antecipadamente, sempre informado pelo administrador.
- Pedidos permanecem como Aguardando confirmação até confirmação manual da loja pelo WhatsApp.

## Limites e pendências
- Abrir WhatsApp não prova envio da mensagem. A confirmação é manual.
- Não há integração bancária, emissão fiscal ou cálculo de frete por distância.
- Banco JSON e sessões em memória não são recomendados para produção sem revisão de infraestrutura, backup e persistência.
- Recuperação de senha e confirmação de e-mail não foram implementadas nesta entrega.
- O frete grátis por bairro ainda deve ser restringido à cidade correta.
- Configure STORE_WHATSAPP antes de aceitar pedidos.
