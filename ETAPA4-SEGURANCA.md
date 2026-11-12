# Etapa 4 — Segurança e confiabilidade

- Migration 002 cria a fila de notificações de pedidos sem alterar tabelas existentes.
- Pedido/status e notificação são gravados na mesma transação. O worker usa SKIP LOCKED, lease de dois minutos e chave de idempotência Resend. Até oito tentativas, com espera crescente; falhas definitivas ficam na tabela. O payload é apagado após sucesso.
- A fila cobre pedidos, não tokens de autenticação. Reenvio de confirmação e recuperação mantêm o fluxo anterior. A fila depende de Resend configurado e servidor ativo. Não garante entrega exatamente uma vez após a janela de idempotência do provedor.
- O adaptador relacional continua usando snapshots serializados por advisory lock. Não execute alterações manuais concorrentes; migração incremental fica pendente. Não há alteração de regras de estoque.
- Limite de senha no login e timeouts HTTP; permissões, cookies e revogação existentes preservados.

## Atualização e backup
Pare o servidor, preserve .env, execute `npm run backup:db` e confira o dump em data/pg-backups. Copie o projeto e execute `node server.js`. A migration é aplicada na inicialização. Restrinja acesso aos backups e à fila (dados pessoais). Não compartilhe dumps.

## Restauração de teste
Crie um banco separado vazio e use pg_restore -h HOST -p 5432 -U USUARIO -d BANCO_TESTE --no-owner --no-privileges CAMINHO.dump. Nunca restaure sobre produção sem plano de recuperação. Configure um .env separado e valide clientes, pedidos e estoque. Não use credenciais Resend reais no teste de restauração.

## Consultar fila (psql)
SELECT state, count(*) FROM well_mail_outbox GROUP BY state;
SELECT id, attempts, last_error FROM well_mail_outbox WHERE state='failed';
Reenvio manual após corrigir a causa: UPDATE well_mail_outbox SET state='pending', attempts=0, next_attempt=now() WHERE id='UUID' AND state='failed';

## Homologação pendente
Testar pedido e status, rollback, concorrência de estoque, reinício com fila pendente, falha Resend, bloqueio e revogação, backup/restauração e regressão visual. Não houve PostgreSQL/Resend/navegador disponíveis para testes integrados.
