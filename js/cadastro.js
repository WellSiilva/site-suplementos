document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formCadastro');
    const cepInput = document.getElementById('cep');

    // --- 1. PREENCHIMENTO AUTOMÁTICO DE CEP (ViaCEP) ---
    if (cepInput) {
        cepInput.addEventListener('blur', () => {
            let cep = cepInput.value.replace(/\D/g, ''); // Limpa caracteres não numéricos

            if (cep.length === 8) {
                // Padrão de automação: Requisição assíncrona para preencher endereço
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => response.json())
                    .then(dados => {
                        if (!dados.erro) {
                            document.getElementById('rua').value = dados.logradouro;
                            document.getElementById('bairro').value = dados.bairro;
                            document.getElementById('cidade').value = dados.localidade;
                            document.getElementById('uf').value = dados.uf;
                            document.getElementById('numero').focus(); // Move o foco para o próximo campo vazio
                        } else {
                            alert("CEP não encontrado.");
                        }
                    })
                    .catch(() => alert("Erro ao buscar CEP. Verifique sua conexão."));
            }
        });
    }

    // --- 2. SUBMISSÃO DO FORMULÁRIO ---
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validação de Senhas (QA Check)
            const senha = document.getElementById('senha').value;
            const confirma = document.getElementById('confirmar-senha').value;

            if (senha !== confirma) {
                alert("As senhas não coincidem. Por favor, verifique.");
                document.getElementById('confirmar-senha').focus();
                return;
            }

            // Captura de dados estruturada para o Banco (LocalStorage)
            const cliente = {
                nome: document.getElementById('nome').value,
                sobrenome: document.getElementById('sobrenome').value,
                email: document.getElementById('email').value,
                celular: document.getElementById('celular').value,
                senha: senha, // Necessário para o sistema de login funcionar
                endereco: {
                    cep: document.getElementById('cep').value,
                    rua: document.getElementById('rua').value,
                    numero: document.getElementById('numero').value,
                    bairro: document.getElementById('bairro').value,
                    cidade: document.getElementById('cidade').value,
                    uf: document.getElementById('uf').value
                },
                dataCadastro: new Date().toISOString()
            };

            // Salva no LocalStorage
            localStorage.setItem('cliente_well', JSON.stringify(cliente));

            // Feedback visual e redirecionamento
            alert(`Cadastro realizado com sucesso, ${cliente.nome}! Seja bem-vindo à Well Suplementos.`);
            window.location.href = 'login.html';
        });
    }
});