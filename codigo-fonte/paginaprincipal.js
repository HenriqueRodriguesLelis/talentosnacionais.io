document.addEventListener('DOMContentLoaded', () => {
    const formBusca = document.getElementById('formBusca');

    formBusca.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const buscaValue = document.getElementById('Busca').value.trim();

        if (buscaValue) {
            const url = `resultadodebusca.html?query=${encodeURIComponent(buscaValue)}`;
            window.location.href = url;
        } else {
            alert('Por favor, digite um termo para buscar.');
        }
    });
});