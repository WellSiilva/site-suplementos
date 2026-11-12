# Recuperação de senha — Well Suplementos

Implementado: solicitação sem revelar existência da conta, limite de solicitações, token aleatório armazenado somente como SHA-256, validade de 30 minutos, uso único e invalidação de sessões ativas ao trocar senha.

## Configuração necessária para envio real
Defina no ambiente: `RESEND_API_KEY`, `RESET_EMAIL_FROM` (remetente verificado) e `PUBLIC_BASE_URL` (URL HTTPS pública do site). O serviço de e-mail utilizado é o Resend. Sem essas variáveis, nenhuma mensagem é enviada, embora a API responda genericamente para não expor cadastros.

## Pendente para publicação
Configurar HTTPS, backup, armazenamento persistente para sessões e limites de requisição (atualmente em memória), confirmação de e-mail e testes reais de envio com o provedor.
