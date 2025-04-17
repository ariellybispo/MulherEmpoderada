function verificarLogin() {
    const email = document.getElementById("txtEmail").value;
    const senha = document.getElementById("txtSenha").value;

    if (email === "teste@teste.com" && senha === "1234") {
        window.location.href = "index.html";
    } else {
        document.getElementById("mensagemErro").textContent = "E-mail ou senha incorretos.";
    }
}

const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', function () {
        const loginContainer = document.getElementById('login-container');
        if (loginContainer) {
            loginContainer.style.display = 'block';
        } else {
            // Caso você queira redirecionar direto para login.html
            window.location.href = "login.html";
        }
    });
}

const closeLogin = document.getElementById('close-login');
if (closeLogin) {
    closeLogin.addEventListener('click', function () {
        const loginContainer = document.getElementById('login-container');
        if (loginContainer) {
            loginContainer.style.display = 'none';
        }
    });
}

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

const opcoes = document.querySelectorAll('.opcao');
if (opcoes.length) {
    opcoes.forEach(opcao => {
        opcao.addEventListener('click', function (event) {
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
                    <p>Aqui você encontra seu sapatinho de cinderela :)</p>
                `;
            }

            const conteudoContainer = document.getElementById('conteudo');
            if (conteudoContainer) {
                conteudoContainer.innerHTML = novoConteudo;
            }
        });
    });

// Função para buscar imagens de maquiagem no Unsplash
function buscarImagensMaquiagem() {
    const apiKey = "SUA_API_KEY_DO_UNSPLASH"; // Obtenha sua chave da API no Unsplash
    const url = `https://api.unsplash.com/search/photos?query=makeup&client_id=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const imagensContainer = document.getElementById('imagens');
            imagensContainer.innerHTML = '';
            data.results.forEach(imagem => {
                const imagemDiv = document.createElement('div');
                imagemDiv.innerHTML = `
                    <img src="${imagem.urls.small}" alt="Imagem de maquiagem" />
                    <p><strong>Foto por:</strong> ${imagem.user.name}</p>
                `;
                imagensContainer.appendChild(imagemDiv);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar imagens:", error);
        });
}

}
