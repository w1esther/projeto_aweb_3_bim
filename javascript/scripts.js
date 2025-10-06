window.addEventListener("DOMContentLoaded", () => {
  const icone = document.getElementById("coroa1");
  if (localStorage.getItem("outraVisitada") === "true") {
    if (icone) icone.classList.add("visitado");
  }

  // Marcar como visitado ao clicar no botão "CONCLUIR FASE"
  const concluirBtn = document.getElementById("concluirf1");
  if (concluirBtn) {
    concluirBtn.addEventListener("click", () => {
      localStorage.setItem("outraVisitada", "true");
    });
  }
});