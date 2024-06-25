function performSearch() {
    const query = document.getElementById('search-input').value.trim(); 

    if (query !== '') { 
        alert('Você buscou por: ' + query);
       
    } else {
        alert('Por favor, insira um termo de busca.'); 
    }
}
