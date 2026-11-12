# Well Suplementos — publicação (PostgreSQL)

## Local
Node 20+, PostgreSQL, npm install. Copie .env.example para .env apenas em instalação nova; preserve o .env existente. Use NODE_ENV=development e PUBLIC_BASE_URL=http://localhost:3000 localmente. Configure DB_HOST, DB_PORT, DB_NAME, DB_USER e DB_PASSWORD. Execute npm start. O servidor aplica a migration relacional.

## Produção
O render.yaml é uma proposta de Blueprint com serviço Node e PostgreSQL gerenciado na rede interna. Confira planos, custos e disponibilidade antes de criar recursos. Não publique .env, dumps ou dados de clientes. Configure PUBLIC_BASE_URL com o domínio HTTPS, STORE_WHATSAPP, STORE_CONTACT_EMAIL, RESEND_API_KEY e RESET_EMAIL_FROM (domínio remetente verificado). ADMIN_SETUP_TOKEN protege POST /api/setup; configure o primeiro administrador por essa API em ambiente seguro. Não envie segredos no repositório.

Migre dados existentes por backup/restauração PostgreSQL em ambiente separado, conforme POSTGRESQL.md; não substitua o banco ativo. O JSON é somente fonte de bootstrap para banco novo, não armazenamento operacional. Sessões são persistidas no PostgreSQL. Execute npm run preflight após iniciar o serviço e aplicar a migration. A verificação não testa entrega de e-mails, domínio ou fluxo de compra.

O checkout registra pedidos, calcula frete (R$20 até R$100, grátis acima) e encaminha ao WhatsApp. Não há pagamento online. Confirmação de e-mail e recuperação de senha usam Resend. Estoque é reservado conforme o fluxo administrativo existente. Antes de publicar, homologue pedidos, estoque, permissões, backup/restauração, e-mails, HTTPS, políticas e dados comerciais. Use uma única instância até revisar o adaptador de persistência por snapshot.
