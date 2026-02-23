/* =========================================================
   LÓGICA DA PÁGINA MINHA CONTA - WELL SUPLEMENTOS (FIREBASE)
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Escuta o estado da autenticação em tempo real
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("Usuário autenticado. UID:", user.uid);
            // Inicia o carregamento dos dados do Firestore
            carregarPerfil(user.uid);
        } else {
            // Proteção de Rota: Se não houver login, volta para o login.html
            console.warn("Nenhum usuário logado detectado. Redirecionando...");
            window.location.href = 'login.html';
        }
    });

    // 2. Função para buscar os dados no Cloud Firestore (Modo Silencioso)
    function carregarPerfil(uid) {
        db.collection("usuarios").doc(uid).get()
            .then((doc) => {
                if (doc.exists) {
                    const dados = doc.data();
                    preencherTela(dados);
                    console.log("Perfil carregado com sucesso!"); // QA Log
                } else {
                    console.warn("Usuário autenticado, mas o documento não existe no Firestore.");
                }
            })
            .catch((error) => {
                console.error("Erro técnico ao carregar perfil:", error.message);
                
                // Lembrete de QA: Este erro ocorre se as regras do Firestore estiverem bloqueadas
                if (error.code === 'permission-denied') {
                    console.error("ERRO DE PERMISSÃO: Verifique as regras do Firestore.");
                }
            });
    }

    // 3. Preenchimento da Tela (Usa seus IDs 'display-')
    function preencherTela(dados) {
        const preencherTexto = (id, valor) => {
            const elemento = document.getElementById(id);
            if (elemento) {
                // Remove os tracinhos '---' e injeta o dado real
                elemento.innerText = valor || "---";
            }
        };

        // Dados Pessoais (Alinhados com o seu print do banco)
        const nomeCompleto = `${dados.nome || ''} ${dados.sobrenome || ''}`.trim();
        preencherTexto('display-nome', nomeCompleto);
        preencherTexto('display-email', dados.email);
        preencherTexto('display-celular', dados.celular);
        
        // Endereço (Objeto aninhado 'endereco' no Firestore)
        const end = dados.endereco;
        if (end) {
            preencherTexto('display-rua', end.rua);
            preencherTexto('display-numero', end.numero);
            preencherTexto('display-bairro', end.bairro);
            preencherTexto('display-cidade', end.cidade);
            preencherTexto('display-uf', end.uf);
            preencherTexto('display-cep', end.cep);
        }
    }
});

/* =========================================================
   FUNÇÃO DE LOGOUT (Sincronizada para funcionar no onclick do HTML)
   ========================================================= */
// Usamos window.efetuarLogout para bater com o nome que você colocou no botão
window.efetuarLogout = function(event) {
    if (event) event.preventDefault();
    
    if (confirm("Deseja realmente sair da Well Suplementos?")) {
        auth.signOut()
            .then(() => {
                console.log("Sessão encerrada com sucesso.");
                localStorage.removeItem('usuario_logado');
                window.location.href = '../index.html'; 
            })
            .catch((error) => {
                console.error("Erro ao processar logout:", error.message);
            });
    }
};