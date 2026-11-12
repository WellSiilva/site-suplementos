# Etapa 6 — Homologação online (Render)

## Antes de publicar
- Ambiente de teste, não produção. Não importar clientes, pedidos, sessões ou backups reais. Use e-mails e WhatsApp de teste; não divulgue a URL a clientes.
- O Blueprint usa serviço Starter e PostgreSQL Basic-256mb, planos pagos. Confira preços e confirme contratação no painel. Nenhum recurso foi contratado automaticamente.
- Repositório privado recomendado. Nunca versionar .env, dumps ou credenciais. O arquivo data/database.json do ZIP contém catálogo inicial; não substitua por exportação local.

## Implantação
1. Crie repositório Git privado com a pasta html e o render.yaml da raiz deste ZIP. Não inclua seu .env local. O Blueprint da raiz usa rootDir: html. Se publicar somente o conteúdo de html na raiz do repositório, use o render.yaml dentro de html (sem rootDir).
2. No Render, New > Blueprint, conecte o repositório e revise os recursos well-suplementos-hml e well-postgres-hml. Informe variáveis solicitadas. PUBLIC_BASE_URL deve ser a URL HTTPS efetiva do serviço (sem caminho); ajuste após o primeiro deploy se necessário. STORE_WHATSAPP deve ser número de teste com DDI; STORE_CONTACT_EMAIL deve ser caixa de teste. RESEND_API_KEY e RESET_EMAIL_FROM devem pertencer a remetente autorizado. Não copie credenciais de produção.
3. Aguarde deploy e confira logs. As migrations existentes inicializam o banco vazio. O catálogo inicial é carregado pelo seed; não representa necessariamente o estoque local atual.
4. Acesse https://<host>/healthz e confirme HTTP 200 com status ok. Execute npm run preflight no ambiente do serviço (Shell, se disponível). A verificação exige banco já inicializado.
5. Configure o primeiro administrador com POST /api/setup, header x-setup-token com o valor ADMIN_SETUP_TOKEN gerado pelo Render e JSON com email e password (mínimo 12 caracteres). Faça via cliente HTTP seguro; não compartilhe token nem senha. Após configurar, a rota recusa novo cadastro de administrador. Acesse /pages/admin.html.
6. Teste cadastro, confirmação, login, recuperação, carrinho, checkout, estoque, administração, e-mails e seletores. Use somente dados fictícios. Verifique o link HTTPS recebido e cookies Secure. O ambiente não tem barreira de acesso geral: quem souber a URL pode visitar a loja. Não use dados reais.

## Backup e produção
Mantenha banco local intacto. Use backup:db com pg_dump instalado e variáveis do banco desejado; guarde dump fora do repositório. Teste restauração em outro banco, nunca sobre produção. Para produção, crie serviço e banco novos, configure domínio, remetente verificado, contatos reais e segredos exclusivos. Não reutilize banco ou token de homologação. Não promova antes de aprovação funcional, visual e integrada.

## Limites
Health check verifica conexão SQL, não entrega de e-mail nem integridade funcional. Não houve deploy real, teste de Render ou contratação. A configuração não altera a arquitetura de persistência por snapshots. APP_ENV é apenas identificação de ambiente, não uma barreira de segurança.
