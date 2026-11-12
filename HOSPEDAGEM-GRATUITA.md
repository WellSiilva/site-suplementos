# Homologação gratuita

1. Crie um projeto Neon Free e um banco separado. Copie a conexão direta (não pooled), substitua sslmode=require por sslmode=verify-full. Não compartilhe a URL.
2. Crie repositório privado no GitHub com o conteúdo de html na raiz. Nunca envie .env ou backups. O data/database.json deste ZIP contém apenas catálogo inicial sanitizado.
3. No Render, crie Web Service Free a partir do repositório (ou Blueprint render.yaml). Build npm install; start npm start; health /healthz. Não crie banco Render.
4. Configure DATABASE_URL, PUBLIC_BASE_URL (URL HTTPS real do serviço), STORE_WHATSAPP, STORE_CONTACT_EMAIL, RESEND_API_KEY, RESET_EMAIL_FROM e ADMIN_SETUP_TOKEN (segredo aleatório forte). NODE_ENV=production, APP_ENV=staging.
5. Após deploy, confira /healthz, configure administrador pelo fluxo existente e execute testes com dados fictícios. O remetente de teste Resend só permite destinatário autorizado.
6. O Render Free suspende o processo quando ocioso: fila de pedidos permanece no Neon e retoma ao despertar. Não há garantia de entrega imediata. Não use pings artificiais para contornar limites.
7. Backup: execute npm run backup:db em máquina confiável com pg_dump e DATABASE_URL direta; guarde fora do Git. Não restaure dados reais na homologação.

Não houve implantação nem teste real de conexão. Confira limites dos planos no cadastro. O ambiente é público: não use dados reais.
