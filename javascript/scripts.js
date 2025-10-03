// Função para marcar no localStorage
function marcarPaginaVisitada(chave) {
  localStorage.setItem(chave, "true");
}

// Função para verificar páginas visitadas
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("pagina2Visitada")) {
    const link = document.getElementById("link2");
    if (link) {
      link.classList.add("visitado");
    }
  }
});
