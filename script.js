// Função para exibir/ocultar o submenu
const modaBtn = document.getElementById('moda');
if (modaBtn) {
    modaBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const submenu = document.getElementById('sub-opcoes');
        if (submenu) {
            submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
        }
    });
}

// Função para lidar com as opções clicadas (não faz nada aqui, apenas previne o comportamento padrão)
const opcoes = document.querySelectorAll('.opcao');
if (opcoes.length) {
    opcoes.forEach(opcao => {
        opcao.addEventListener('click', function (event) {
            event.preventDefault(); 
        });
    });
}

// Este código apenas lida com as interações do menu e não está relacionado ao login ou cadastro.
