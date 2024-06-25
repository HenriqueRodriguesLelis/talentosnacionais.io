document.getElementById('entrarBtn').addEventListener('click', validarLogin);
document.addEventListener('keydown', function(event)
 {if (event.key === 'Enter') 
       validarLogin(event);})


function validarLogin(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        alert('Por favor, preencha o campo de email.');
        return false;
    } else if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }

    if (senha === '') {
        alert('Por favor, preencha o campo de senha.');
        return false;
    }

    if (!verificarSenha(senha)) {
        alert('Senha incorreta. Tente novamente.');
        return false;
    }

    // Se tudo estiver correto, redirecionar o usuário
    redirectToPage();
    return true;
}

function redirectToPage() {
    // Redireciona o usuário para a página desejada
    window.location.href ='paginaprincipal.html';
}

function verificarSenha(senha) {
    // Exemplo de senha correta (você pode modificar conforme necessário)
    var senhaCorreta = "123456";

    return senha === senhaCorreta;
}
