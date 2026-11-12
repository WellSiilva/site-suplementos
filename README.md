# Well Suplementos — versão modernizada

Abra `index.html` em um navegador ou sirva a pasta com `python -m http.server 8000`.

## Funcionalidades implementadas
- Home responsiva e catálogo de 12 produtos de demonstração
- Pesquisa, filtros, ordenação e favoritos salvos localmente
- Carrinho persistente no navegador, ajuste de quantidades e remoção
- Checkout com validação de campos, busca de endereço por ViaCEP e pedido pelo WhatsApp

## Antes de publicar
- Substituir os produtos, preços e embalagens ilustrativas por catálogo e imagens reais em `js/store.js`.
- Confirmar o número de WhatsApp e dados empresariais.
- Integrar gateway de pagamento, frete, estoque, pedidos e backend para transações reais.
- Revisar as páginas legadas de login/cadastro e regras de segurança do Firebase.
- Testar os fluxos com HTTPS, em dispositivos reais.

**Importante:** o checkout é uma solicitação de pedido via WhatsApp, não uma compra com pagamento online. Não há persistência de pedidos no servidor.
