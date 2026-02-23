document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formCadastro');
    const cepInput = document.getElementById('cep');

    // --- 1. PREENCHIMENTO AUTOMÁTICO DE CEP --- 
    if (cepInput) {
        cepInput.addEventListener('blur', () => {
            let cep = cepInput.value.replace(/\D/g, ''); 

            if (cep.length === 8) {
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => response.json())
                    .then(dados => {
                        if (!dados.erro) {
                            document.getElementById('rua').value = dados.logradouro;
                            document.getElementById('bairro').value = dados.bairro;
                            document.getElementById('cidade').value = dados.localidade;
                            document.getElementById('uf').value = dados.uf;
                            document.getElementById('numero').focus();
                        } else {
                            alert("CEP não encontrado.");
                        }
                    })
                    .catch(() => alert("Erro ao buscar CEP."));
            }
        });
    }

    // --- 2. SUBMISSÃO PARA BANCO DE DADOS REAL (FIREBASE) ---
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const confirma = document.getElementById('confirmar-senha').value;

            // Validação de segurança básica
            if (senha !== confirma) {
                alert("As senhas não coincidem.");
                return;
            }

            // 1. Cria a conta de autenticação (Garante o Login futuro)
auth.createUserWithEmailAndPassword(email, senha)
    .then((userCredential) => {
        const uid = userCredential.user.uid;
        console.log("Conta criada com sucesso! UID:", uid);

        // Tentamos salvar no Firestore, mas já preparamos o redirecionamento
        const dadosPerfil = {
            nome: document.getElementById('nome').value,
            sobrenome: document.getElementById('sobrenome').value,
            email: email,
            celular: document.getElementById('celular').value,
            endereco: {
                cep: document.getElementById('cep').value,
                rua: document.getElementById('rua').value,
                numero: document.getElementById('numero').value,
                bairro: document.getElementById('bairro').value,
                cidade: document.getElementById('cidade').value,
                uf: document.getElementById('uf').value
            },
            dataCadastro: firebase.firestore.FieldValue.serverTimestamp()
        };

        return db.collection("usuarios").doc(uid).set(dadosPerfil)
            .then(() => {
                alert("✅ Cadastro completo! Bem-vindo à Well Suplementos.");
                window.location.href = 'minha-conta.html';
            })
            .catch((err) => {
                console.error("Erro ao salvar dados extras:", err);
                // Se o banco falhar, ainda assim avisamos que a conta foi criada
                alert("Conta criada! (Aviso: Erro ao salvar endereço. Você pode editar no perfil depois).");
                window.location.href = 'login.html';
            });
    })
    .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
            alert("⚠️ Este e-mail já está cadastrado. Tente fazer login.");
        } else {
            alert("❌ Erro: " + error.message);
        }
    });
        });
    }
});