function validarCampos(nome, email, username, password, confirmarSenha) {
    if (!nome) {
        return 'Por favor, preencha o nome completo.';
    }
    if (!email) {
        return 'Por favor, preencha o e-mail.';
    }
    if (!username) {
        return 'Por favor, preencha o nome de usuário.';
    }
    if (!password) {
        return 'Por favor, preencha a senha.';
    }
    if (!confirmarSenha) {
        return 'Por favor, confirme a senha.';
    }
    if (password !== confirmarSenha) {
        return 'As senhas não coincidem.';
    }
    return ''; 
}

function handleSubmit(event) {
    event.preventDefault(); 

    const nome = document.getElementById('Nome').value.trim();
    const email = document.getElementById('Email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmarSenha = document.getElementById('ConfirmarSenha').value.trim();


    const mensagemErro = validarCampos(nome, email, username, password, confirmarSenha);
    if (mensagemErro) {
        alert(mensagemErro);
        return;
    }
    alert('Cadastro realizado com sucesso!');
    
    window.location.href ='paginaprincipal.html'; 
}

document.querySelector('form').addEventListener('submit', handleSubmit);