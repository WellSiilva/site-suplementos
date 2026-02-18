/* =========================================================
   LÓGICA DA PÁGINA MINHA CONTA - WELL SUPLEMENTOS
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Recupera os dados da sessão ativa e do cadastro completo
    const sessao = JSON.parse(localStorage.getItem('usuario_logado'));
    const dadosCompletos = JSON.parse(localStorage.getItem('cliente_well'));

    // Proteção de Rota: Se não houver login ativo, volta para o login
    if (!sessao || !sessao.logado) {
        window.location.href = 'login.html';
        return;
    }

    // 2. Função auxiliar para preencher a tela (Usa os IDs display- conforme seu HTML)
    const preencherTexto = (id, valor) => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerText = valor || "---";
        }
    };

    // 3. Preenchimento dos Dados Pessoais
    if (dadosCompletos) {
        // Usa o nome completo do cadastro
        const nomeCompleto = `${dadosCompletos.nome} ${dadosCompletos.sobrenome || ''}`;
        preencherTexto('display-nome', nomeCompleto);
        preencherTexto('display-email', dadosCompletos.email);
        preencherTexto('display-celular', dadosCompletos.celular);
        
        // 4. Preenchimento do Endereço
        const end = dadosCompletos.endereco;
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
   FUNÇÃO DE LOGOUT (FORCE GLOBAL)
   ========================================================= */
window.logout = function() {
    // 1. Exibe o popup de confirmação
    const confirma = confirm("Deseja realmente sair da Well Suplementos?");

    if (confirma) {
        // 2. Remove a sessão
        localStorage.removeItem('usuario_logado');

        // 3. Redireciona para a home
        // Se estiver na pasta /pages/, use '../index.html'
        window.location.href = '../index.html'; 
    }
};