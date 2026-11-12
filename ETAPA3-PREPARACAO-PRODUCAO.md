# Etapa 3 — Preparação para produção | Well Suplementos

## Alterações realizadas
- Incluído arquivo `.env.example` com nomes das configurações esperadas, sem credenciais reais.
- Restringido acesso HTTP a arquivos ocultos (`.env`, `.gitignore`) e extensões de documentos, dados e backups; as páginas HTML, CSS, JavaScript e imagens permanecem acessíveis.
- Adicionados cabeçalhos de não armazenamento em cache e restrição de câmera/microfone/geolocalização nos arquivos estáticos.
- Incluído teste automatizado de pré-publicação (`scripts/preflight.js`).

## Configuração manual obrigatória
1. Definir **cidade e UF reais do Grajaú atendido** em `FREE_SHIPPING_CITY` e `FREE_SHIPPING_UF`; os valores de `.env.example` são apenas exemplos.
2. Informar número real da loja em `STORE_WHATSAPP`, com código do país e DDD.
3. Contratar/configurar domínio HTTPS e informar `PUBLIC_BASE_URL`.
4. Verificar domínio remetente e configurar `RESEND_API_KEY` e `RESET_EMAIL_FROM`; executar testes reais de confirmação e redefinição.
5. Definir termos, política de privacidade, contato e regras de trocas/devoluções conforme a operação e legislação aplicável.
6. Configurar backups **externos**, com criptografia, retenção, monitoramento e restauração testada.
7. Garantir armazenamento persistente do banco JSON e das sessões; avaliar migração para banco transacional antes de múltiplas instâncias.
8. Executar homologação completa em celular e desktop, incluindo fluxos de pedido, pagamento, estoque e entrega.

## Executar pré-verificação
Na pasta `html`, rode `node scripts/preflight.js`. Para iniciar o servidor, rode `node server.js`.

**Atenção:** Node.js não carrega `.env` automaticamente neste projeto. Configure variáveis no serviço de hospedagem ou use `node --env-file=.env server.js` em versão compatível do Node.js, mantendo `.env` fora do ZIP e do controle de versão.

## Limitações
Este pacote **não** configura uma hospedagem, não envia e-mails sem credenciais, não cria backups externos e não substitui uma auditoria de segurança. Não é uma declaração de prontidão para produção.
