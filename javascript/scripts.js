window.addEventListener("DOMContentLoaded", () => {
  const fases = [{ id: "coroa1", key: "fase1Concluida" },
    { id: "coroa2", key: "fase2Concluida" },
    { id: "coroa3", key: "fase3Concluida" }];
  
  if (localStorage.getItem(fases.key) === "true") {
    fases.forEach(id => {
      const icone = document.getElementById(fases.id);
    if (icone) icone.classList.add("visitado");
    });
  }

  // Marcar como visitado ao clicar no botão "CONCLUIR FASE"
  const concluirF1 = document.getElementById("concluirf1");
  if (concluirF1) {
    concluirBtn.addEventListener("click", () => {
      localStorage.setItem("outraVisitada", "true");
    });
  }
});

const concluirF2 = document.getElementById("concluirf2");
if (concluirF2) {
  concluirBtn.addEventListener("click", () => {
    localStorage.setItem("fase2concluida", "true");
    });
  }

const concluirF3 = document.getElementById("concluirf3");
if (concluirF3) {
  concluirBtn.addEventListener("click", () => {
    localStorage.setItem("fase3concluida", "true");
    });
  }