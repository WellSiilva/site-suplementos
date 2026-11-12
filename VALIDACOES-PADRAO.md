# Validações compartilhadas

- Campos com restrições HTML: mensagem em português junto ao campo, aria-invalid e aria-describedby; mantém validação nativa e regras existentes.
- Notificações existentes: títulos padronizados e tratamento de falhas técnicas nos scripts ativos selecionados.
- Feedback de autenticação, CEP e conta: regiões de anúncio acessíveis.
- Nenhuma alteração nas regras de negócio, banco ou templates de e-mail.

## Homologação pendente
Testar campos vazios, e-mail inválido, senha divergente, CEP inválido, falha de rede, sessão expirada, estoque insuficiente, carrinho vazio, pedidos, lotes, links usados/expirados e envio real pelo Resend. Testar desktop e celular. A camada compartilhada não cria regras de negócio inexistentes.
