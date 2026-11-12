# Validações e mensagens — Well Suplementos

- Mensagens acessíveis e consistentes para erros de campos obrigatórios, formato inválido e falhas de rede.
- Cadastro: telefone, CEP, UF, senhas diferentes e erros do servidor.
- Carrinho: impede finalizar vazio; quantidade acima do estoque não é aceita no cliente e no servidor.
- Pedido: o servidor recalcula os preços e o frete, valida estoque e bloqueia novos pedidos quando o WhatsApp não está configurado.
- O pedido fica **Aguardando confirmação**; abrir WhatsApp não comprova envio.
- Cadastro e login têm validações no servidor; não confiar somente em JavaScript.

## Pendências para produção

- Configurar STORE_WHATSAPP e conferir preços, produtos e estoques reais.
- Fazer testes reais em Chrome, Safari e dispositivos móveis.
- Usar banco transacional e persistência de sessões para múltiplas instâncias, HTTPS, backup e recuperação de conta.
- Criar proteção CSRF robusta, rate limiting persistente e mecanismos antispam antes de exposição pública.
- Não interpretar o registro de pedido como confirmação de envio da mensagem no WhatsApp.
