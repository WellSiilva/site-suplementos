document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formLogin');
    const msgBox = document.getElementById('login-message'); 

    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault(); 

            // 1. Captura de inputs (IDs sincronizados com seu HTML)
            const emailInput = document.getElementById('login-email').value.trim().toLowerCase();
            const senhaInput = document.getElementById('login-senha').value;

            // 2. Recupera os dados do Cadastro (chave: cliente_well)
            const usuarioSalvo = JSON.parse(localStorage.getItem('cliente_well'));

            const exibirFeedback = (mensagem, sucesso = false) => {
                if (msgBox) {
                    msgBox.innerText = mensagem;
                    msgBox.style.display = 'block';
                    msgBox.style.color = sucesso ? '#155724' : '#721c24';
                    msgBox.style.backgroundColor = sucesso ? '#d4edda' : '#f8d7da';
                    msgBox.style.padding = '10px';
                    msgBox.style.borderRadius = '5px';
                } else {
                    alert(mensagem);
                }
            };

            // 3. Validação
            if (usuarioSalvo && 
                usuarioSalvo.email.toLowerCase() === emailInput && 
                usuarioSalvo.senha === senhaInput) {
                
                exibirFeedback(`Bem-vindo, ${usuarioSalvo.nome}! Redirecionando...`, true);

                // 4. Define a Sessão Ativa
                localStorage.setItem('usuarioLogado', JSON.stringify({
                    ...usuarioSalvo, 
                    logado: true,
                    timestamp: new Date().getTime()
                }));

                // 5. Redirecionamento sem barras extras
                setTimeout(() => {
                    const voltarParaCarrinho = document.referrer.includes('carrinho.html');
                    // Se o arquivo login.html estiver em /pages/, o ../ volta para a raiz (index.html)
                    window.location.href = voltarParaCarrinho ? 'carrinho.html' : '../index.html'; 
                }, 1500);

            } else {
                exibirFeedback("E-mail ou senha incorretos.");
            }
        });
    }
});