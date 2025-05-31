document.addEventListener("DOMContentLoaded", function () {

  const moda = document.getElementById("moda");
  const subOpcoes = document.getElementById("sub-opcoes");
  const conteudoPrincipal = document.getElementById("conteudo-principal");

  moda.addEventListener("click", function (event) {
    event.preventDefault();
    subOpcoes.style.display = subOpcoes.style.display === "block" ? "none" : "block";
  });

  const opcoes = document.querySelectorAll(".opcao");
  opcoes.forEach(opcao => {
    opcao.addEventListener("click", function (event) {
      event.preventDefault();
      if (opcao.textContent === "Maquiagens") {
        conteudoPrincipal.innerHTML = '<h2>Maquiagens Maybelline</h2><div id="produtos"></div>';
        buscarMaquiagens();
      }
    });
  });

  function buscarMaquiagens() {
    const url = "https://makeup-api.vercel.app/api/v1/products.json?brand=maybelline";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const produtosContainer = document.getElementById("produtos");
        produtosContainer.innerHTML = '';

        data.forEach(produto => {
          const produtoDiv = document.createElement('div');
          produtoDiv.classList.add('produto');

          produtoDiv.innerHTML = `
            <img src="${produto.image_link}" alt="${produto.name}" style="width: 150px; height: 150px; border-radius: 12px;">
            <h3>${produto.name}</h3>
            <p><strong>Preço:</strong> $${produto.price}</p>
            <p>${produto.description ? produto.description.substring(0, 100) + '...' : 'Descrição não disponível'}</p>
          `;
          produtosContainer.appendChild(produtoDiv);
        });
      })
      .catch(error => {
        console.error("Erro ao buscar maquiagens:", error);
      });
  }

  function estaLogado() {
    return localStorage.getItem('usuarioLogado') === 'true';
  }

  document.addEventListener('click', (event) => {
    if (!estaLogado()) {
window.location.href = '/pasta/login.html';
    }
  });

});
