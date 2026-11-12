# Well Suplementos — sessões persistentes

- Sessões administrativas e de clientes persistem em `data/sessions.json` e sobrevivem a reinícios.
- Tokens de sessão são armazenados apenas como hash SHA-256; o cookie guarda o token aleatório original.
- Sessões expiradas são removidas periodicamente e quando acessadas.
- Ao redefinir senha, todas as sessões anteriores do cliente são revogadas.
- O arquivo de sessões está sob `data/`, já ignorado pelo Git. Proteja o diretório e inclua-o no plano de recuperação operacional.
- Cookies usam `HttpOnly`, `SameSite` e `Secure` quando `NODE_ENV=production`.
- **Antes de publicar:** configure HTTPS de ponta a ponta, `NODE_ENV=production`, `PUBLIC_BASE_URL=https://...`, e valide cabeçalhos do proxy. Não exponha a pasta `data`.
- A persistência em JSON é apropriada para uma instância única; para múltiplas réplicas, migre sessões para armazenamento compartilhado transacional.
- Backup local não substitui backup externo; teste a restauração.
- Confirmação e recuperação por e-mail exigem configuração do serviço Resend.
