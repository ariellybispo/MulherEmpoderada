document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'block';
});

// Fechar o formulário de login
document.getElementById('close-login').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
});

// Manter o comportamento do menu suspenso no restante do código
document.getElementById('moda').addEventListener('click', function(event) {
    event.preventDefault();
    const submenu = document.getElementById('sub-opcoes');
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
});

document.querySelectorAll('.opcao').forEach(opcao => {
    opcao.addEventListener('click', function(event) {
        event.preventDefault();
        const conteudo = this.getAttribute('data-conteudo');
        
        let novoConteudo = '';
        if (conteudo === 'conteudo1') {
            novoConteudo = `
                <h1>Maquiagens</h1>
                <p>Qual seu estilo de maquiagem?</p>
            `;
        } else if (conteudo === 'conteudo2') {
            novoConteudo = `
                <h1>Roupas</h1>
                <p>Descubra quais são as roupas do momento!!</p>
            `;
        } else if (conteudo === 'conteudo3') {
            novoConteudo = `
                <h1>Calçados</h1>
                <p>Aqui voce encontra seu sapatinho de cinderela :)</p>
            `;
        }
        
        document.getElementById('conteudo').innerHTML = novoConteudo;
    });
});
