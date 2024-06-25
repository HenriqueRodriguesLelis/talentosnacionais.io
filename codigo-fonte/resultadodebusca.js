document.addEventListener('DOMContentLoaded', function() {
    // Função para redirecionar para a página de resultados de busca
    function performSearch() {
        const searchInput = document.getElementById('search-input').value;
        const searchUrl = `resultadodebusca.html?query=${encodeURIComponent(searchInput)}`;
        window.location.href = searchUrl;
    }

    // Adicionar evento ao botão de busca
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', performSearch);

    // Adicionar evento ao botão de voltar
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.history.back();
    });

    // Pegar o valor do parâmetro de busca da URL e preencher o campo de busca
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    if (query) {
        document.getElementById('search-input').value = query;
        // Aqui você pode adicionar código para realizar a busca com o valor `query`
        // e preencher os resultados dinamicamente se necessário.
    }
});