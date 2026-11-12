/* =========================================================
   SISTEMA DE BUSCA GLOBAL E LÓGICA DE HEADER
   ========================================================= */
const CATALOGO_PRODUTOS = [
    { nome: "Whey Protein Concentrado", link: "whey.html", tags: ["whey", "protein", "proteina", "ganho de massa"] },
    { nome: "Whey Protein Isolado", link: "whey-isolado.html", tags: ["whey isolado", "zero lactose", "protein"] },
    { nome: "Creatina Hardcore", link: "creatina.html", tags: ["creatina", "creatine", "forca", "explosao"] },
    { nome: "BCAA Powder", link: "bcaa.html", tags: ["bcaa", "aminoacido", "recuperacao"] },
    { nome: "Barra de Proteína Crisp", link: "barra-proteina.html", tags: ["barra", "barrinha", "protein bar"] },
    { nome: "Cafeína Therma Hardcore", link: "cafeina.html", tags: ["cafeina", "therma", "energia"] },
    { nome: "Colágeno Hidrolisado", link: "colageno.html", tags: ["colageno", "pele", "articulacao"] },
    { nome: "Ômega 3 Fish Oil", link: "omega3.html", tags: ["omega", "omega 3", "saude"] },
    { nome: "Hipercalórico Mass", link: "hipercalorico.html", tags: ["hipercalorico", "bulking", "massa"] },
    { nome: "Pré Treino Panic", link: "pre-treino.html", tags: ["pre treino", "panic", "gas", "foco"] },
    { nome: "Termogênico Fire", link: "termogenico.html", tags: ["termogenico", "fire", "emagrecer"] },
    { nome: "ZMA Pré Hormonal", link: "zma.html", tags: ["zma", "hormonal", "sono", "recuperacao"] }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Busca Global
    const inputBusca = document.getElementById('inputBusca');
    const btnBusca = document.getElementById('btnBusca');

    const realizarBusca = () => {
        const termo = inputBusca.value.toLowerCase().trim();
        if (termo === "") return;
        const resultado = CATALOGO_PRODUTOS.find(p => p.nome.toLowerCase().includes(termo) || p.tags.some(t => t.includes(termo)));
        if (resultado) {
            const isPageFolder = window.location.pathname.includes('/pages/');
            window.location.href = isPageFolder ? resultado.link : `pages/${resultado.link}`;
        } else {
            alert("Nenhum produto encontrado!");
        }
    };

    if (btnBusca) btnBusca.addEventListener('click', realizarBusca);
    if (inputBusca) inputBusca.addEventListener('keypress', (e) => { if (e.key === 'Enter') realizarBusca(); });

    // 2. Inicialização Rápida de Sessão
    verificarSessaoFirebase();

    // 3. Eventos de Compra
    document.body.addEventListener('click', (event) => {
        const botao = event.target.closest('.btn-buy');
        if (botao) {
            event.preventDefault();
            const produto = {
                id: botao.getAttribute('data-id') || botao.getAttribute('data-nome').replace(/\s+/g, '-').toLowerCase(),
                nome: botao.getAttribute('data-nome'),
                preco: parseFloat(botao.getAttribute('data-preco')),
                img: botao.getAttribute('data-img'),
                quantidade: 1
            };
            processarAdicaoCarrinho(produto);
        }
    });

    atualizarContadorCarrinho();
});

/* =========================================================
   CONTROLE DE SESSÃO COM CACHE (LOGIN INSTANTÂNEO)
   ========================================================= */
function verificarSessaoFirebase() {
    const menuText = document.getElementById('user-menu-text');
    const menuLink = document.getElementById('user-menu-link');
    
    // PASSO 1: Tenta carregar do cache para ser imediato
    const cacheUsuario = localStorage.getItem('well_user_cache');
    if (cacheUsuario && menuText) {
        const dados = JSON.parse(cacheUsuario);
        renderizarNomeNoHeader(dados.nome.split(' ')[0]);
        ajustarLinkMinhaConta(menuLink);
    }

    // PASSO 2: Firebase valida a sessão em segundo plano
    auth.onAuthStateChanged((user) => {
        if (user) {
            db.collection("usuarios").doc(user.uid).get().then((doc) => {
                if (doc.exists) {
                    const dados = doc.data();
                    // Atualiza o cache com informações novas do banco
                    localStorage.setItem('well_user_cache', JSON.stringify(dados));
                    renderizarNomeNoHeader(dados.nome.split(' ')[0]);
                    ajustarLinkMinhaConta(menuLink);
                }
            });
        } else {
            // Se deslogou, limpa o cache
            localStorage.removeItem('well_user_cache');
        }
    });
}

// Função auxiliar para renderizar o HTML do nome
function renderizarNomeNoHeader(nome) {
    const menuText = document.getElementById('user-menu-text');
    if (menuText) {
        menuText.innerHTML = `
            <div style="line-height: 1.2;">
                <strong>Olá, ${nome}</strong><br>
                <span style="color: #ff8c00; cursor: pointer; font-size: 11px;" onclick="efetuarLogout(event)">Sair da conta</span>
            </div>
        `;
    }
}

function ajustarLinkMinhaConta(menuLink) {
    if (menuLink) {
        const isPageFolder = window.location.pathname.includes('/pages/');
        menuLink.href = isPageFolder ? "minha-conta.html" : "pages/minha-conta.html";
    }
}

window.efetuarLogout = function(event) {
    if (event) event.preventDefault();
    if(confirm("Deseja realmente sair da Well Suplementos?")) {
        auth.signOut().then(() => {
            localStorage.removeItem('usuario_logado');
            localStorage.removeItem('well_user_cache'); // Limpa o cache no logout
            const isPageFolder = window.location.pathname.includes('/pages/');
            window.location.href = isPageFolder ? "../index.html" : "index.html";
        });
    }
};

/* =========================================================
   LÓGICA DO CARRINHO
   ========================================================= */
function obterCarrinho() {
    const carrinho = localStorage.getItem('carrinho_well');
    return carrinho ? JSON.parse(carrinho) : [];
}

window.atualizarContadorCarrinho = function() {
    const carrinho = obterCarrinho();
    const totalDiferentes = carrinho.length; 
    const contador = document.querySelector('.cart-count');
    if (contador) {
        contador.innerText = totalDiferentes;
        contador.style.display = totalDiferentes > 0 ? 'flex' : 'none';
    }
};

function processarAdicaoCarrinho(novoProduto) {
    let carrinho = obterCarrinho();
    const itemExistente = carrinho.find(item => item.id === novoProduto.id);
    if (itemExistente) { 
        itemExistente.quantidade += 1; 
    } else { 
        carrinho.push(novoProduto); 
    }
    localStorage.setItem('carrinho_well', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    if (document.getElementById('cart-items-list')) renderizarCarrinho();
    alert(`${novoProduto.nome} foi adicionado ao seu carrinho!`);
}