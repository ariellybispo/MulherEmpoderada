function buscarMaquiagens() {
    const url = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const produtosContainer = document.getElementById('produtos');
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
            console.error('Erro ao buscar maquiagens:', error);
        });
}
document.addEventListener('DOMContentLoaded', buscarMaquiagens);
