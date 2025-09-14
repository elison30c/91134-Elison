const card = document.getElementById("birthdayCard");
const confettiCanvas = document.getElementById('confetti-canvas');

// Configuração do canvas para confetti
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

// Função para abrir o cartão
function openCard() {
  card.classList.toggle("open");
  if (card.classList.contains("open")) {
    startConfetti();
  }
}

// Evento de CLIQUE (mouse)
card.addEventListener("click", openCard);

// Evento de TOQUE (dispositivos móveis)
card.addEventListener("touchstart", function(e) {
  e.preventDefault(); // Previne comportamento padrão
  openCard();
}, { passive: false });

// Evento para evitar zoom acidental com double-tap
card.addEventListener('touchend', function(e) {
  e.preventDefault();
});

function startConfetti(){
  const duration = 5000;
  const end = Date.now() + duration;

  (function frame(){
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Redimensionar canvas quando a janela for redimensionada
window.addEventListener('resize', function() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

// Adicionar estilo para melhorar a experiência touch
document.addEventListener('DOMContentLoaded', function() {
  // Adiciona uma dica visual para mobile
  if ('ontouchstart' in window) {
    card.style.cursor = 'pointer';
    card.title = "Toque para abrir";
  }
});