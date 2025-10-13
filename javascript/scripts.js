window.addEventListener("DOMContentLoaded", () => {
  const fases = [
    { id: "coroa1", key: "fase1Concluida" },
    { id: "coroa2", key: "fase2Concluida" },
    { id: "coroa3", key: "fase3Concluida" }
  ];

  // Marca as coroas concluídas
  fases.forEach(fase => {
    if (localStorage.getItem(fase.key) === "true") {
      const icone = document.getElementById(fase.id);
      if (icone) icone.classList.add("visitado");
    }
  });

  // Marcar fase 1 como concluída
  const concluirF1 = document.getElementById("concluirf1");
  if (concluirF1) {
    concluirF1.addEventListener("click", () => {
      localStorage.setItem("fase1Concluida", "true");
    });
  }

  // Marcar fase 2 como concluída
  const concluirF2 = document.getElementById("concluirf2");
  if (concluirF2) {
    concluirF2.addEventListener("click", () => {
      localStorage.setItem("fase2Concluida", "true");
    });
  }

  // Marcar fase 3 como concluída
  const concluirF3 = document.getElementById("concluirf3");
  if (concluirF3) {
    concluirF3.addEventListener("click", () => {
      localStorage.setItem("fase3Concluida", "true");
    });
  }
});