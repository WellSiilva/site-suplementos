document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formLogin'); 
    const msgBox = document.getElementById('login-message'); 

    // LOG DE TESTE: Verifica se o formulário foi encontrado ao carregar a página
    console.log("Sistema de login carregado. Formulário encontrado:", !!formLogin);

    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault(); 
            console.log("Botão ENTRAR clicado. Iniciando processo...");

            // Captura de inputs
            const emailInput = document.getElementById('login-email')?.value.trim();
            const senhaInput = document.getElementById('login-senha')?.value;

            // Verificação de segurança: campos vazios
            if (!emailInput || !senhaInput) {
                exibirFeedback("Preencha todos os campos.");
                return;
            }

            const exibirFeedback = (mensagem, sucesso = false) => {
                if (msgBox) {
                    msgBox.innerText = mensagem;
                    msgBox.style.display = 'block';
                    msgBox.style.color = sucesso ? '#155724' : '#721c24';
                    msgBox.style.backgroundColor = sucesso ? '#d4edda' : '#f8d7da';
                    msgBox.style.padding = '10px';
                    msgBox.style.borderRadius = '5px';
                    msgBox.style.textAlign = 'center';
                } else {
                    alert(mensagem);
                }
            };

            // Chamada ao Firebase
            auth.signInWithEmailAndPassword(emailInput, senhaInput)
                auth.signInWithEmailAndPassword(emailInput, senhaInput)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login autorizado no Auth. UID:", user.uid);

        // Tenta buscar o nome, mas se falhar por falta de permissão, prossegue o login
        return db.collection("usuarios").doc(user.uid).get()
            .then((doc) => {
                let nome = "Cliente";
                if (doc.exists) {
                    nome = doc.data().nome;
                }
                finalizarLogin(nome);
            })
            .catch((err) => {
                console.warn("Firestore ainda sem permissão, logando sem nome...");
                finalizarLogin("Cliente");
            });
    })
    .catch((error) => {
        console.error("Erro no login:", error.code);
        exibirFeedback("E-mail ou senha incorretos.");
    });

function finalizarLogin(nome) {
    exibirFeedback(`Bem-vindo, ${nome}! Redirecionando...`, true);
    setTimeout(() => {
        window.location.href = 'minha-conta.html'; 
    }, 1500);
}
        });
    } else {
        console.error("ERRO CRÍTICO: O elemento 'formLogin' não existe nesta página HTML.");
    }
});