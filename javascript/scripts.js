window.addEventListener("DOMContentLoaded", () => {
  const icone = document.getElementById("coroa1");

  // Verifica se a outra página já foi visitada
  if (localStorage.getItem("outraVisitada") === "true") {
    icone.classList.add("visitado");
  }
});
