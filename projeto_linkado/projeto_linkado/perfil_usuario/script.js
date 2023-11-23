document.addEventListener('DOMContentLoaded', function() {
    var editarPerfilButton = document.querySelector('.editar-perfil');
    editarPerfilButton.addEventListener('click', function() {
        var nome = document.getElementById('nome');
        var email = document.getElementById('email');
        var telefone = document.getElementById('telefone');

        var novoNome = prompt('Digite o novo nome:');
        if (novoNome) {
            nome.textContent = novoNome;
        }

        var novoEmail = prompt('Digite o novo e-mail:');
        if (novoEmail) {
            email.textContent = novoEmail;
        }

        var novoTelefone = prompt('Digite o novo telefone:');
        if (novoTelefone) {
            telefone.textContent = novoTelefone;
        }
    });
});
