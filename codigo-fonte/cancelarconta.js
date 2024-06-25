document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const confirmarInput = document.getElementById('confirmar');
    console.log("ENTROU NO JAVASCRIPT");
       form.addEventListener('submit', function(event) {
                if (confirmarInput.value.toUpperCase() !== 'CANCELAR') {
           alert('Por favor, digite "CANCELAR" para confirmar o cancelamento da sua conta.');
            event.preventDefault(); 
        } else {
               const confirmation = confirm('Você tem certeza que deseja cancelar sua conta? Esta ação é irreversível.');
            if (!confirmation) {
                event.preventDefault(); 
            } else {
                alert('CONTA CANCELADA COM SUCESSO');
                window.location.href =".../home/home.html"; 
            }
        }
    });
});
