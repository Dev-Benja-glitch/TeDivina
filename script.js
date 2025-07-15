// Animación de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

// Aplicar a todos los elementos con fade-scroll
const elementosAnimados = document.querySelectorAll(".fade-scroll, .fade-in");
elementosAnimados.forEach(el => observer.observe(el));

// Partículas animadas de fondo (estrellas moviéndose)
function crearParticulas() {
  const contenedor = document.querySelector(".particles");
  for (let i = 0; i < 50; i++) {
    const estrella = document.createElement("div");
    estrella.className = "particle";
    estrella.style.width = `${Math.random() * 3}px`;
    estrella.style.height = estrella.style.width;
    estrella.style.top = `${Math.random() * 100}vh`;
    estrella.style.left = `${Math.random() * 100}vw`;
    estrella.style.animationDuration = `${2 + Math.random() * 4}s`;
    estrella.style.animationDelay = `${Math.random() * 4}s`;
    contenedor.appendChild(estrella);
  }
}

crearParticulas();