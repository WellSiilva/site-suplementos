# Segurança e backups — Well Suplementos

- Salvamento atômico do banco JSON por arquivo temporário e renomeação.
- Backup local diário em `data/backups/`, com até 14 arquivos datados. A cópia é verificada a cada 6 horas.
- Rejeição de requisições de mutação cross-site e validação de Origin/Referer para requisições com cookies.
- Botão de reenvio de confirmação em Minha Conta, disponível apenas quando o provedor de e-mail está configurado e o e-mail ainda não foi verificado.

## Limitações importantes
- Sessões de clientes e administradores ainda ficam em memória: são perdidas ao reiniciar o servidor. Não foi implementada persistência de sessão nesta etapa.
- Backups no mesmo servidor não protegem contra perda do disco. Copie-os para armazenamento externo seguro, com criptografia e testes de restauração.
- Não foi feita auditoria de segurança completa nem homologação de navegador.
- Configure HTTPS, domínio e Resend antes de publicar.
