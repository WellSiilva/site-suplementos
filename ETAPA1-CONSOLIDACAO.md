# Etapa 1 — consolidação técnica

URLs antigas de categorias, favoritos e autenticação redirecionam ao catálogo e autenticação atuais. As páginas antigas foram substituídas por redirecionamentos HTML de contingência; os produtos do PostgreSQL não foram alterados. Cafeína e ZMA usam busca por nome; promoções abre a loja sem inventar descontos. Objetivos mantém seu conteúdo. Favoritos e carrinho continuam locais ao navegador; favoritos inicializa pela URL após carregar catálogo, sem depender do evento load. Ordenação por menor preço corrigida. Categorias sem produtos mostram resultado vazio. Scripts antigos sem referências HTML foram removidos do pacote.

Preflight lê .env, verifica variáveis de produção e consulta PostgreSQL sem alterar dados. Blueprint atualizado para banco gerenciado; não foi implantado. Documentação histórica permanece como registro, não como instrução atual; use README-HOSPEDAGEM.md e POSTGRESQL.md.

Teste local: abra URLs antigas e confirme destino; confira categorias, favoritos em duas abas, carrinho, ordenação, checkout, login e e-mails. Não altere .env nem restaure banco para aplicar esta versão. O adaptador de snapshot permanece inalterado. Nenhum teste conectado ao banco real ou Resend foi executado nesta entrega.
