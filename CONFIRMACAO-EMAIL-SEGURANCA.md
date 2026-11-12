# Confirmação de e-mail e segurança — Well Suplementos

## Recursos
- Envio de link de confirmação no cadastro quando o provedor de e-mail estiver configurado.
- Link aleatório de uso único, com hash SHA-256 salvo no banco e validade de 24 horas.
- Endpoint autenticado para reenvio, limitado a uma solicitação por minuto.
- Bloqueio de finalização de pedidos por clientes com e-mail não confirmado **somente quando o serviço de e-mail estiver configurado**.
- Cabeçalhos adicionais de proteção nas respostas da API.
- A verificação de e-mail aparece no retorno de `/api/customer/me` (`emailVerified`, `emailVerificationAvailable`).

## Configuração
Configure `RESEND_API_KEY`, `RESET_EMAIL_FROM` (domínio remetente verificado) e `PUBLIC_BASE_URL` (URL HTTPS pública) no ambiente do servidor. O provedor usado é Resend. Sem essas variáveis, o envio e a exigência de confirmação ficam desativados para não bloquear os clientes.

## Pendências para produção
- Adicionar interface de reenvio na área Minha Conta (API pronta: POST `/api/customer/email/resend`).
- Validar envio real e entrega de e-mail com domínio configurado.
- Usar HTTPS com proxy confiável e armazenamento persistente de sessões (hoje sessões são mantidas em memória).
- Revisar proteção CSRF para instalações com proxy e implementar backups automáticos do banco.
- Revisar LGPD, consentimento e política de retenção de dados.
- Testar todos os fluxos no navegador e em dispositivo móvel.
