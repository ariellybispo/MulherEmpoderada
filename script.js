document.addEventListener("DOMContentLoaded", function () {
    const moda = document.getElementById("moda");
    const subOpcoes = document.getElementById("sub-opcoes");

    moda.addEventListener("click", function (event) {
        event.preventDefault(); 
        if (subOpcoes.style.display === "none" || subOpcoes.style.display === "") {
            subOpcoes.style.display = "block";
        } else {
            subOpcoes.style.display = "none";
        }
    });

    const opcoes = document.querySelectorAll('.opcao');
    opcoes.forEach(opcao => {
        opcao.addEventListener('click', function (event) {
            event.preventDefault(); 
            console.log("Opção clicada:", opcao.textContent);
        });
    });
});
