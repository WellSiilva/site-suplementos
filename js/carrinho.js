/* =========================================================
   LÓGICA ESPECÍFICA DA PÁGINA DE CARRINHO - WELL SUPLEMENTOS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sincronização prioritária com o LocalStorage ao abrir a página
    if (typeof atualizarContadorCarrinho === 'function') {
        atualizarContadorCarrinho();
    }

    // 2. Renderiza a lista de produtos apenas se o elemento existir na tela
    if (document.getElementById('cart-items-list')) {
        renderizarCarrinho();
        configurarFinalizacao(); 
    }
});

/* 1. RENDERIZAÇÃO DA TABELA DE ITENS */
function renderizarCarrinho() {
    const listaItens = document.getElementById('cart-items-list');
    const subtotalVal = document.getElementById('subtotal-val');
    const cartTotal = document.getElementById('cart-total'); 
    const cartEmptyMsg = document.getElementById('cart-empty-msg');
    
    // Busca a chave única compartilhada entre todas as páginas
    let carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];

    if (!listaItens) return;
    listaItens.innerHTML = '';
    let valorTotal = 0;

    // Tratamento visual para estado vazio
    if (carrinho.length === 0) {
        if (cartEmptyMsg) cartEmptyMsg.style.display = 'block';
        if (subtotalVal) subtotalVal.innerText = 'R$ 0,00';
        if (cartTotal) cartTotal.innerText = 'R$ 0,00';
        return;
    } else {
        if (cartEmptyMsg) cartEmptyMsg.style.display = 'none';
    }

    carrinho.forEach((produto, index) => {
        const precoNum = parseFloat(produto.preco) || 0;
        const subtotalItem = precoNum * produto.quantidade;
        valorTotal += subtotalItem;

        // Ajuste inteligente de caminho de imagem para páginas internas
        const imagemPath = produto.img.startsWith('http') ? produto.img : `../${produto.img}`;

        listaItens.innerHTML += `
            <div class="cart-item">
                <div class="item-img-container">
                    <img src="${imagemPath}" alt="${produto.nome}">
                </div>
                <div class="item-info">
                    <h3>${produto.nome}</h3>
                    <p class="unit-price">Unitário: R$ ${precoNum.toFixed(2).replace('.', ',')}</p>
                </div>
                <div class="item-quantity-controls">
                    <button class="btn-qty" onclick="alterarQuantidade(${index}, -1)">-</button>
                    <span class="qty-number">${produto.quantidade}</span>
                    <button class="btn-qty" onclick="alterarQuantidade(${index}, 1)">+</button>
                </div>
                <div class="item-price">R$ ${subtotalItem.toFixed(2).replace('.', ',')}</div>
                <button class="btn-remove-item" onclick="removerItem(${index})" title="Remover Produto">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    });

    const totalFormatado = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    if (subtotalVal) subtotalVal.innerText = totalFormatado;
    if (cartTotal) cartTotal.innerText = totalFormatado; 
}

/* 2. FUNÇÕES DE MANIPULAÇÃO (QUANTIDADE E REMOÇÃO) */
window.alterarQuantidade = function(index, mudanca) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];
    carrinho[index].quantidade += mudanca;
    
    // Regra de negócio: quantidade mínima é 1, menos que isso remove
    if (carrinho[index].quantidade < 1) return removerItem(index);
    
    localStorage.setItem('carrinho_well', JSON.stringify(carrinho));
    renderizarCarrinho();
    
    // Notifica o main.js para atualizar o contador no Header
    if (typeof atualizarContadorCarrinho === 'function') {
        atualizarContadorCarrinho();
    }
};

window.removerItem = function(index) {
    if (!confirm("Remover este item do carrinho?")) return;
    
    let carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];
    carrinho.splice(index, 1);
    
    localStorage.setItem('carrinho_well', JSON.stringify(carrinho));
    renderizarCarrinho();
    
    if (typeof atualizarContadorCarrinho === 'function') {
        atualizarContadorCarrinho();
    }
};

/* 3. INTEGRAÇÃO WHATSAPP */
function configurarFinalizacao() {
    const btnFinalizar = document.querySelector('.btn-finalize');
    if (btnFinalizar) {
        // Usa onclick direto para evitar múltiplos disparos de EventListeners
        btnFinalizar.onclick = () => prepararEnvio();
    }
}

function processarEnvioWhatsApp(carrinho, usuario) {
    const metodoPagamento = document.querySelector('input[name="pagamento"]:checked')?.value;
    
    if (!metodoPagamento) {
        alert("Por favor, selecione uma forma de pagamento.");
        return;
    }

    // Montagem dinâmica da lista para o WhatsApp
    let listaProdutos = "";
    carrinho.forEach(item => {
        const subtotal = (item.preco * item.quantidade).toFixed(2).replace('.', ',');
        listaProdutos += `• ${item.quantidade}x ${item.nome} (R$ ${subtotal})%0A`;
    });

    const totalTxt = document.getElementById('cart-total')?.innerText || "R$ 0,00";
    const end = usuario.endereco;
    const enderecoFormatado = `${end.rua}, ${end.numero} - ${end.bairro}%0A${end.cidade}/${end.uf} - CEP: ${end.cep}`;

    const msg = `*NOVO PEDIDO - WELL SUPLEMENTOS*%0A%0A` +
                `*--- DADOS DO CLIENTE ---*%0A` +
                `*Nome:* ${usuario.nome} ${usuario.sobrenome || ''}%0A` +
                `*Celular:* ${usuario.celular}%0A` +
                `*Endereço:* ${enderecoFormatado}%0A%0A` +
                `*--- ITENS DO PEDIDO ---*%0A` +
                `${listaProdutos}%0A` +
                `*TOTAL DO PEDIDO:* ${totalTxt}%0A%0A` +
                `*FORMA DE PAGAMENTO:* ${metodoPagamento.toUpperCase()}`;

    window.open(`https://wa.me/5511933935926?text=${msg}`, '_blank');
}

window.prepararEnvio = function() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];
    if (carrinho.length === 0) return alert("Carrinho vazio!");

    // Integração com Firebase Auth para capturar dados do perfil
    auth.onAuthStateChanged((user) => {
        if (user) {
            db.collection("usuarios").doc(user.uid).get().then((doc) => {
                if (doc.exists) {
                    processarEnvioWhatsApp(carrinho, doc.data());
                } else {
                    alert("Dados de entrega não encontrados.");
                }
            });
        } else {
            alert("Faça login para finalizar.");
            window.location.href = "login.html";
        }
    });
};