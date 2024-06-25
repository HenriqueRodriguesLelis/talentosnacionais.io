document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.social-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Pede ao usuário que insira o link da rede social
            let link = prompt(`Insira o link para ${button.textContent}:`);

            // Verifica se o link não está vazio e atribui ao botão
            if (link !== null && link.trim() !== '') {
                button.setAttribute('data-link', link);
                button.textContent = `Link salvo para ${button.textContent}`;
                alert('Link inserido com sucesso!');
            } else {
                alert('Nenhum link foi inserido.');
            }
        });
    });
});