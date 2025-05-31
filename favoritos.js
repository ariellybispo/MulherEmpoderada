document.addEventListener("DOMContentLoaded", function () {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    const card = btn.closest(".card-artigo");
    const id = card.dataset.id;
    const artigoHTML = card.outerHTML;

    if (favoritos.find(f => f.id === id)) {
      btn.textContent = "❤️";
      btn.classList.add("favorito");
    } else {
      btn.textContent = "🤍";
      btn.classList.remove("favorito");
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation(); 
      e.preventDefault();  
      const index = favoritos.findIndex(f => f.id === id);

      if (index === -1) {
        favoritos.push({ id: id, html: artigoHTML });
        btn.textContent = "❤️";
        btn.classList.add("favorito");
      } else {
        favoritos.splice(index, 1);
        btn.textContent = "🤍";
        btn.classList.remove("favorito");
      }

      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    });
  });
});
