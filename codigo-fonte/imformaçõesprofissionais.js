document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-button');

    saveButton.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        // Validação dos campos de Graduação
        const formacao = document.getElementById('formacao-input').value.trim();
        const curso = document.getElementById('curso-input').value.trim();
        const instituicao = document.getElementById('instituicao-input').value.trim();
        const inicio = document.getElementById('inicio-input').value.trim();
        const fim = document.getElementById('fim-input').value.trim();
        const modalidade = document.getElementById('modalidade-input').value.trim();

        // Verifica se algum campo de Graduação está vazio
        if (!formacao || !curso || !instituicao || !inicio || !fim || !modalidade) {
            alert('Por favor, preencha todos os campos de Graduação.');
            return;
        }

        // Validação dos campos de Cursos Extras
        const cursoExtra = document.getElementById('curso-extra-input').value.trim();
        const nivel = document.getElementById('nivel-input').value.trim();

        // Verifica se algum campo de Cursos Extras está vazio
        if (!cursoExtra || !nivel) {
            alert('Por favor, preencha todos os campos de Cursos Extras.');
            return;
        }

        // Envio de arquivos no formulário de Portfólio (PDF e MP4)
        const fileInputs = document.querySelectorAll('#portfolio input[type="file"]');
        let filesValid = true;

        fileInputs.forEach(function(input) {
            const file = input.files[0];
            if (file && !['application/pdf', 'video/mp4'].includes(file.type)) {
                filesValid = false;
            }
        });

        if (!filesValid) {
            alert('Por favor, envie arquivos PDF ou MP4 apenas no formulário de Portfólio.');
            return;
        }

        // Se todas as validações passarem, exibe mensagem de sucesso
        alert('Perfil atualizado com sucesso!');
    });
});