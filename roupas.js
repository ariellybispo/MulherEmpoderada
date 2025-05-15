function buscarRoupas() {
    const dadosFake = [
        {
            name: "Camiseta Estampada",
            price: "49.90",
            image_link: "https://via.placeholder.com/150?text=Camiseta",
            description: "Camiseta confortável com estampa exclusiva."
        },
        {
            name: "Jaqueta Jeans",
            price: "129.90",
            image_link: "https://via.placeholder.com/150?text=Jaqueta+Jeans",
            description: "Jaqueta jeans clássica ideal para dias frios."
        },
        {
            name: "Vestido Floral",
            price: "89.90",
            image_link: "https://via.placeholder.com/150?text=Vestido",
            description: "Vestido leve e colorido para o verão."
        }
    ];

    const container = document.getElementById('produtos');
    container.innerHTML = '';

    dadosFake.forEach(roupa => {
        const div = document.createElement('div');
        div.classList.add('produto');

        div.innerHTML = `
            <img src="${roupa.image_link}" alt="${roupa.name}" style="width: 150px; height: 150px; border-radius: 12px;">
            <h3>${roupa.name}</h3>
            <p><strong>Preço:</strong> R$ ${roupa.price}</p>
            <p>${roupa.description}</p>
        `;

        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', buscarRoupas);
