// Function to fetch address data from ViaCEP API
async function fetchAddressByCep(cep) {
    const sanitizedCep = cep.replace(/\D/g, ''); // Remove non-numeric characters
    if (sanitizedCep.length !== 8) {
        alert('CEP inválido. Por favor, insira um CEP válido com 8 dígitos.');
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`);
        const data = await response.json();

        if (data.erro) {
            alert('CEP não encontrado!');
            return null;
        }

        return {
            rua: data.logradouro || '',
            bairro: data.bairro || '',
            cidade: data.localidade || '',
            estado: data.uf || ''
        };
    } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
        return null;
    }
}

// Event listener for CEP input
function setupCepListener() {
    const inputCep = document.getElementById('cep');
    if (!inputCep) return;

    inputCep.addEventListener('blur', async function () {
        const address = await fetchAddressByCep(this.value);
        if (address) {
            document.getElementById('rua').value = address.rua;
            document.getElementById('bairro').value = address.bairro;
            document.getElementById('cidade').value = address.cidade;
            document.getElementById('uf').value = address.estado;
        }
    });
}

// Initialize the CEP listener when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupCepListener);