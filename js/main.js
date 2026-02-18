/* =========================================================
   SISTEMA DE BUSCA GLOBAL - CATALOGO COMPLETO
   ========================================================= */
const CATALOGO_PRODUTOS = [
    { 
        nome: "Whey Protein Concentrado", 
        link: "whey.html", 
        tags: ["whey", "protein", "proteina", "leite", "concentrado", "ganho de massa", "musculo", "pos-treino", "academia"] 
    },
    { 
        nome: "Whey Protein Isolado", 
        link: "whey-isolado.html", 
        tags: ["whey isolado", "isolado", "iso", "zero lactose", "dieta", "proteina pura", "definicao", "protein", "leite"] 
    },
    { 
        nome: "Creatina Hardcore", 
        link: "creatina.html", 
        tags: ["creatina", "creatine", "crea", "hardcore", "forca", "explosao", "monohidratada", "creatin", "performance"] 
    },
    { 
        nome: "BCAA Powder", 
        link: "bcaa.html", 
        tags: ["bcaa", "aminoacido", "recuperacao", "powder", "po", "fadiga", "resistencia", "intra-treino"] 
    },
    { 
        nome: "Barra de Proteína Crisp", 
        link: "barra-proteina.html", 
        tags: ["barra", "barrinha", "crisp", "protein bar", "doce fit", "lanche", "snack", "proteico", "sobremesa"] 
    },
    { 
        nome: "Cafeína Therma Hardcore", 
        link: "cafeina.html", 
        tags: ["cafeina", "caffeine", "therma", "hardcore", "estimulante", "energia", "foco", "pre-treino", "acordar"] 
    },
    { 
        nome: "Colágeno Hidrolisado", 
        link: "colageno.html", 
        tags: ["colageno", "pele", "articulacao", "unha", "cabelo", "hidrolisado", "rejuvenescimento", "estetica"] 
    },
    { 
        nome: "Ômega 3 Fish Oil", 
        link: "omega3.html", 
        tags: ["omega", "omega 3", "fish oil", "oleo de peixe", "coracao", "memoria", "inflamacao", "cerebro", "saude"] 
    },
    { 
        nome: "Hipercalórico Mass", 
        link: "hipercalorico.html", 
        tags: ["hipercalorico", "mass", "massa", "engordar", "bulking", "caloria", "carbo", "carboidrato", "ganho"] 
    },
    { 
        nome: "Pré Treino Panic", 
        link: "pre-treino.html", 
        tags: ["pre treino", "panic", "gas", "pump", "vibe", "treino pesado", "beta alanina", "arginina", "foco"] 
    },
    { 
        nome: "Termogênico Fire", 
        link: "termogenico.html", 
        tags: ["termogenico", "fire", "emagrecer", "queimar gordura", "perda de peso", "suar", "metabolismo", "secar"] 
    },
    { 
        nome: "ZMA Pré Hormonal", 
        link: "zma.html", 
        tags: ["zma", "hormonal", "testo", "testosterona", "sono", "descanso", "zinco", "magnesio", "recuperacao muscular"] 
    }
];

/* =========================================================
   INICIALIZAÇÃO E EVENTOS - CATALOGO E CARRINHO
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicialização da Busca
    const inputBusca = document.getElementById('inputBusca');
    const btnBusca = document.getElementById('btnBusca');

    const realizarBusca = () => {
        const termo = inputBusca.value.toLowerCase().trim();
        if (termo === "") {
            alert("Por favor, digite o que você procura.");
            return;
        }
        const resultado = CATALOGO_PRODUTOS.find(p => p.nome.toLowerCase().includes(termo));
        if (resultado) {
            window.location.href = resultado.link;
        } else {
            alert("Nenhum produto encontrado!");
        }
    };

    if (btnBusca) btnBusca.addEventListener('click', realizarBusca);
    if (inputBusca) {
        inputBusca.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') realizarBusca();
        });
    }

    // 2. Inicialização dos Eventos de Clique (Delegação de Eventos)
    document.body.addEventListener('click', (event) => {
        const botao = event.target.closest('.btn-buy');
        
        // QA FIX: Só executa se o botão for de COMPRA (tiver data-id) 
        // e NÃO for o de LOGIN (que não deve ter data-id).
        if (botao && botao.hasAttribute('data-id')) {
            event.preventDefault();
            event.stopImmediatePropagation();

            const produto = {
                id: botao.getAttribute('data-id'),
                nome: botao.getAttribute('data-nome'),
                preco: parseFloat(botao.getAttribute('data-preco')),
                img: botao.getAttribute('data-img'),
                quantidade: 1
            };

            processarAdicaoCarrinho(produto);
        }
    });

    // 3. Inicialização da Exibição (Se estiver na página do carrinho)
    if (document.getElementById('cart-items-list')) {
        renderizarCarrinho();
    }

    atualizarContadorCarrinho();
});

/* =========================================================
   LÓGICA DO CARRINHO - PERSISTÊNCIA E FUNÇÕES GLOBAIS
   ========================================================= */
function obterCarrinho() {
    const carrinho = localStorage.getItem('carrinho_well');
    return carrinho ? JSON.parse(carrinho) : [];
}

function atualizarContadorCarrinho() {
    const carrinho = obterCarrinho();
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    const contador = document.querySelector('.cart-count');
    if (contador) {
        contador.innerText = totalItens;
    }
}

function processarAdicaoCarrinho(novoProduto) {
    let carrinho = obterCarrinho();
    const itemExistente = carrinho.find(item => item.id === novoProduto.id);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push(novoProduto);
    }

    localStorage.setItem('carrinho_well', JSON.stringify(carrinho));
    alert(`${novoProduto.nome} foi adicionado ao seu carrinho!`);
    atualizarContadorCarrinho();
}

/* =========================================================
   LÓGICA DE EXIBIÇÃO DO CARRINHO
   ========================================================= */
function renderizarCarrinho() {
    const listaItens = document.getElementById('cart-items-list');
    const msgVazio = document.getElementById('cart-empty-msg');
    const totalElemento = document.getElementById('cart-total');
    const subtotalElemento = document.getElementById('subtotal-val');
    
    let carrinho = obterCarrinho();
    if (listaItens) listaItens.innerHTML = '';

    if (carrinho.length === 0) {
        if (msgVazio) msgVazio.style.display = 'block';
        if (totalElemento) totalElemento.innerText = 'R$ 0,00';
        return;
    }

    if (msgVazio) msgVazio.style.display = 'none';
    let valorTotal = 0;

    carrinho.forEach((produto, index) => {
        const subtotalItem = produto.preco * produto.quantidade;
        valorTotal += subtotalItem;

        const itemHtml = `
            <div class="cart-item">
                <img src="${produto.img}" alt="${produto.nome}">
                <div class="item-info">
                    <h3>${produto.nome}</h3>
                    <p class="unit-price">Preço unitário: R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                </div>
                <div class="item-quantity">
                    <span>Qtd: ${produto.quantidade}</span>
                </div>
                <div class="item-price">
                    <strong>R$ ${subtotalItem.toFixed(2).replace('.', ',')}</strong>
                </div>
                <button class="btn-remove" onclick="removerItem(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        if (listaItens) listaItens.innerHTML += itemHtml;
    });

    const totalFormatado = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    if (totalElemento) totalElemento.innerText = totalFormatado;
    if (subtotalElemento) subtotalElemento.innerText = totalFormatado;
}

window.removerItem = function(index) {
    let carrinho = obterCarrinho();
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho_well', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    renderizarCarrinho();
};
/* =========================================================
   CONTROLE DE SESSÃO - HEADER DINÂMICO
   ========================================================= */
function verificarSessaoUsuario() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));
    const menuLink = document.getElementById('user-menu-link');
    const menuText = document.getElementById('user-menu-text');

    if (usuarioLogado && usuarioLogado.logado) {
        // 1. Altera o texto para o nome do usuário
        menuText.innerHTML = `
            <strong>Olá, ${usuarioLogado.nome}</strong>
            <span style="color: #ff8c00; cursor: pointer;" onclick="efetuarLogout(event)">Sair da conta</span>
        `;
        
        // 2. Muda o link para a página de perfil (opcional) ou desabilita o redirecionamento
        menuLink.href = "#"; 
    }
}

// Função de Logout (QA: Limpa o estado da aplicação)
window.efetuarLogout = function(event) {
    event.preventDefault();
    if(confirm("Deseja realmente sair?")) {
        localStorage.removeItem('usuario_logado');
        window.location.reload(); // Recarrega para voltar ao estado "Deslogado"
    }
};

// Chame a função dentro do DOMContentLoaded que você já tem no main.js
document.addEventListener('DOMContentLoaded', () => {
    verificarSessaoUsuario();
    // ... resto das suas inicializações ...
});