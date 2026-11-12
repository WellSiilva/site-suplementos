# PostgreSQL — etapa relacional

Pare o servidor antigo. Faça cópia da pasta atual e, se já usou PostgreSQL, execute um pg_dump antes da atualização. Copie server.js, package.json, scripts/relational-store.js, scripts/backup-postgres.js e migrations/001-relational.sql para a pasta atual, preservando .env e data. Execute npm install e node server.js. A migration 1 roda em transação e não repete a importação. Se existir well_store_state, importa seus dados e mantém a tabela antiga intacta para recuperação; caso contrário usa o JSON local (sem clientes/pedidos). Não execute as duas versões simultaneamente.

As tabelas products, customers, orders, order_items, order_history, customer_addresses, product_lots, stock_movements, well_sessions e well_admin_account substituem o registro único. Campos opcionais ficam em JSONB por entidade. Categorias permanecem em products.cat; marcas, favoritos e carrinho mantêm o comportamento original do frontend. Não há novas APIs para esses recursos. O adaptador mantém os handlers existentes, carrega o estado relacional e grava o conjunto em uma transação com advisory lock quando há alterações. Isso não é CRUD incremental e deve ser otimizado antes de grande volume. Não altere tabelas diretamente enquanto o servidor estiver ativo. O catálogo inicial e a conta administrativa são preservados quando existentes.

## Backup
Execute npm run backup:db. O dump fica em data/pg-backups (não público). Para agendar diariamente às 02h no PowerShell, na pasta do projeto:

```powershell
$node = (Get-Command node.exe).Source
$action = New-ScheduledTaskAction -Execute $node -Argument 'scripts/backup-postgres.js' -WorkingDirectory (Get-Location).Path
$trigger = New-ScheduledTaskTrigger -Daily -At 2am
Register-ScheduledTask -TaskName 'WellSuplementosBackup' -Action $action -Trigger $trigger -Description 'Backup PostgreSQL diário'
```

Verifique a execução no Agendador e copie dumps para armazenamento externo protegido. Para testar restauração, crie um banco separado well_restore_test como postgres, com owner well_admin, e execute pg_restore -h 127.0.0.1 -U well_admin -d well_restore_test --exit-on-error CAMINHO_DO_DUMP. Nunca restaure sobre o banco ativo sem plano de recuperação. Valide contagens e login no banco de teste.

## Homologação local
1. Iniciar servidor e conferir SELECT count(*) FROM products; (35 no catálogo original).
2. Editar produto no painel, reiniciar servidor e conferir persistência.
3. Criar cliente de teste, entrar, criar pedido e confirmar estoque; conferir orders/order_items/stock_movements.
4. Verificar frete 99,90 / 100 / 100,01; testar cancelamento e duas confirmações concorrentes.
5. Executar backup e restaurar em banco separado. Não usar dados reais durante homologação.

Validação nesta entrega: sintaxe JS e integridade do pacote. Execução SQL, migração e regressão ainda precisam ser verificadas em PostgreSQL real.
