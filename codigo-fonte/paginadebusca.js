document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', performSearch);
});

function performSearch() {
    const searchInput = document.getElementById('search-input').value;
    const searchUrl = `resultadodebusca.html?query=${encodeURIComponent(searchInput)}`;
    window.location.href = searchUrl;
}
