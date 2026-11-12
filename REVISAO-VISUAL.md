# Revisão visual
Base: Well_Admin_v3.zip. Todas as 42 páginas em pages/ receberam uma camada CSS compartilhada, preservando os layouts existentes. Ajustes específicos: endereço da conta, modal de recuperação, confirmação e redefinição, telas de erro, tabelas administrativas e templates HTML de e-mail. Links de retorno das telas de recuperação e confirmação apontam para entrar.html (login Node). Não altera regras de negócio, banco, produtos ou tokens.

Validação: sintaxe Node dos scripts e servidor, presença da folha compartilhada nas páginas. Testes visuais em navegador, PostgreSQL e Resend real ainda pendentes. Não sobrescreva seu .env local.
