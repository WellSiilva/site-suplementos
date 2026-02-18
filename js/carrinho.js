/* =========================================================
   LÓGICA GLOBAL DO CARRINHO - WELL SUPLEMENTOS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    atualizarContadorCarrinho();

    // Se estiver na página do carrinho, renderiza os itens e configura o checkout
    if (document.getElementById('cart-items-list')) {
        renderizarCarrinho();
        configurarFinalizacao(); 
    }
});

/* 1. OUVINTE DE CLIQUES GLOBAL (PARA ADICIONAR PRODUTOS) */
document.addEventListener('click', (e) => {
    // Detecta clique no botão .btn-buy (ou em ícones dentro dele)
    const botao = e.target.closest('.btn-buy');
    
    if (botao) {
        e.preventDefault(); // Evita comportamento de link caso seja um <a>

        const produto = {
            nome: botao.getAttribute('data-nome'),
            preco: parseFloat(botao.getAttribute('data-preco')),
            img: botao.getAttribute('data-img'),
            quantidade: 1
        };

        // Só adiciona se capturar os dados corretamente
        if (produto.nome && !isNaN(produto.preco)) {
            adicionarAoCarrinho(produto);
        }
    }
});

function adicionarAoCarrinho(novoItem) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];
    const index = carrinho.findIndex(item => item.nome === novoItem.nome);
    
    if (index > -1) {
        carrinho[index].quantidade += 1;
    } else {
        carrinho.push(novoItem);
    }

    localStorage.setItem('carrinho_well', JSON.stringify(carrinho));
    alert(`${novoItem.nome} adicionado ao carrinho!`);
    atualizarContadorCarrinho();
}

/* 2. ATUALIZAR O CONTADOR DO HEADER */
window.atualizarContadorCarrinho = function() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];
    const totalItens = carrinho.reduce((acc, item) => acc + (parseInt(item.quantidade) || 0), 0);
    const contadorElemento = document.getElementById('cart-count'); 
    
    if (contadorElemento) {
        contadorElemento.innerText = totalItens;
    }
};

/* 3. RENDERIZAÇÃO NA PÁGINA DO CARRINHO */
function renderizarCarrinho() {
    const listaItens = document.getElementById('cart-items-list');
    const totalElemento = document.getElementById('cart-total');
    let carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];

    if (!listaItens) return;
    listaItens.innerHTML = '';
    let valorTotal = 0;

    if (carrinho.length === 0) {
        listaItens.innerHTML = '<p style="text-align:center; padding:40px;">Seu carrinho está vazio.</p>';
        if (totalElemento) totalElemento.innerText = 'R$ 0,00';
        return;
    }

    carrinho.forEach((produto, index) => {
        const precoNum = parseFloat(produto.preco) || 0;
        const subtotalItem = precoNum * produto.quantidade;
        valorTotal += subtotalItem;

        listaItens.innerHTML += `
            <div class="cart-item">
                <div class="item-img-container">
                    <img src="${produto.img}" alt="${produto.nome}">
                </div>
                <div class="item-info">
                    <h3>${produto.nome}</h3>
                    <p class="unit-price">R$ ${precoNum.toFixed(2).replace('.', ',')}</p>
                </div>
                <div class="item-quantity-controls">
                    <button class="btn-qty" onclick="alterarQuantidade(${index}, -1)">-</button>
                    <span class="qty-number">${produto.quantidade}</span>
                    <button class="btn-qty" onclick="alterarQuantidade(${index}, 1)">+</button>
                </div>
                <div class="item-price">
                    R$ ${subtotalItem.toFixed(2).replace('.', ',')}
                </div>
                <button class="btn-remove-item" onclick="removerItem(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    });

    if (totalElemento) totalElemento.innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
}

/* 4. CONTROLES DE QUANTIDADE E REMOÇÃO */
window.alterarQuantidade = function(index, mudanca) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];
    carrinho[index].quantidade += mudanca;
    if (carrinho[index].quantidade < 1) return removerItem(index);

    localStorage.setItem('carrinho_well', JSON.stringify(carrinho));
    renderizarCarrinho();
    atualizarContadorCarrinho();
};

window.removerItem = function(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho_well', JSON.stringify(carrinho));
    renderizarCarrinho();
    atualizarContadorCarrinho();
};

/* 5. FINALIZAÇÃO E ENVIO WHATSAPP */
function configurarFinalizacao() {
    // Agora busca o botão com .btn-buy também no checkout
    const btnFinalizar = document.querySelector('.btn-buy') || document.querySelector('.btn-comprar') || document.querySelector('.btn-finalize');
    
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', () => {
            const carrinho = JSON.parse(localStorage.getItem('carrinho_well')) || [];
            const usuarioRaw = localStorage.getItem('usuarioLogado');
            const usuario = usuarioRaw ? JSON.parse(usuarioRaw) : null;

            if (carrinho.length === 0) {
                alert("Adicione produtos antes de finalizar!");
                return;
            }

            if (!usuario || !usuario.nome) {
                alert("Por favor, faça login para finalizar o pedido.");
                window.location.href = "login.html"; 
                return;
            }

            const metodoPagamento = document.querySelector('input[name="pagamento"]:checked')?.value;
            if (!metodoPagamento) {
                alert("Por favor, selecione uma forma de pagamento.");
                return;
            }

            // EXTRAÇÃO DO ENDEREÇO
            const infoEnd = usuario.endereco || {}; 
            const logradouro = infoEnd.rua || usuario.rua || "Endereço não informado";
            const num = infoEnd.numero || usuario.numero || "";
            const bairro = infoEnd.bairro || usuario.bairro || "Sem bairro";
            const cep = infoEnd.cep || usuario.cep || "00000-000";
            const cidade = infoEnd.cidade || usuario.cidade || "";

            // MONTAGEM DOS PRODUTOS
            let listaProdutos = "";
carrinho.forEach(item => {
    // Adicionamos %0A no final de cada item para forçar a descida de linha no WhatsApp
    listaProdutos += `• ${item.quantidade}x ${item.nome} - R$ ${item.preco}%0A`;
});

const totalPedido = document.getElementById('cart-total').innerText;

// 3. MONTAGEM DA MENSAGEM FORMATADA
// Removi o \n da listaProdutos pois já inserimos o %0A acima
const mensagem = `*NOVO PEDIDO - WELL SUPLEMENTOS*%0A%0A` +
    `*DADOS DO CLIENTE:*%0A` +
    `Nome: ${usuario.nome}%0A` +
    `Celular: ${usuario.celular || 'Não informado'}%0A%0A` +
    `*ENDEREÇO DE ENTREGA:*%0A` +
    `${logradouro}${num ? ', ' + num : ''}%0A` +
    `Bairro: ${bairro}%0A` +
    `CEP: ${cep}%0A` +
    `${cidade ? 'Cidade: ' + cidade : ''}%0A%0A` +
    `*ITENS DO PEDIDO:*%0A${listaProdutos}%0A` + // listaProdutos agora já vem com quebras
    `*TOTAL:* ${totalPedido}%0A` +
    `*PAGAMENTO:* ${metodoPagamento.toUpperCase()}`;

            const seuNumero = "5511933935926"; 
            window.open(`https://wa.me/${seuNumero}?text=${mensagem}`, '_blank');
        });
    }
}