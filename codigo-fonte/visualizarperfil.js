document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("save");
    const clearButton = document.getElementById("Limpar");
  
    // Função para salvar os dados no localStorage
    function salvarDados() {
        const empresaInputValue = document.getElementById("empresaInput").value;
        const formacaoInputValue = document.getElementById("formacaoInput").value;
        const cursoInputValue = document.getElementById("cursoInput").value;
        
        // Salvar os dados no localStorage
        localStorage.setItem("empresa", empresaInputValue);
        localStorage.setItem("formacao", formacaoInputValue);
        localStorage.setItem("curso", cursoInputValue);
  
        // Exibir mensagem de confirmação
        alert("Dados salvos com sucesso!");
    }

    // Função para carregar os dados do localStorage e exibir nos campos de entrada
    function carregarDados() {
        document.getElementById("empresaInput").value = localStorage.getItem("empresa") || "";
        document.getElementById("formacaoInput").value = localStorage.getItem("formacao") || "";
        document.getElementById("cursoInput").value = localStorage.getItem("curso") || "";
    }

    // Carregar os dados do localStorage ao carregar a página
    carregarDados();
  
    saveButton.addEventListener("click", function() {
        salvarDados();
    });
  
    clearButton.addEventListener("click", function() {
        // Limpar os campos de entrada
        document.getElementById("empresaInput").value = "";
        document.getElementById("formacaoInput").value = "";
        document.getElementById("cursoInput").value = "";
  
        // Limpar os dados do localStorage
        localStorage.removeItem("empresa");
        localStorage.removeItem("formacao");
        localStorage.removeItem("curso");
  
        // Exibir mensagem de confirmação
        alert("Dados apagados com sucesso!");
    });
});
