function verificar() {
  var senha = document.getElementById('senha').value.trim().toLowerCase();
  if (senha === 'rossino') {
    sessionStorage.setItem('liberado', 'sim');
    document.getElementById('gate').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    iniciarMusica();
  } else {
    document.getElementById('gate-error').style.visibility = 'visible';
  }
}

function iniciarMusica() {
  var musica = document.getElementById('musica');
  if (!musica) return;
  musica.volume = 0.5;
  musica.play().catch(function() {});
}

function alternarMusica() {
  var musica = document.getElementById('musica');
  var btn = document.getElementById('music-toggle');
  if (musica.paused) {
    musica.play();
    btn.textContent = '🔊';
  } else {
    musica.pause();
    btn.textContent = '🔇';
  }
}

window.addEventListener('DOMContentLoaded', function() {
  var senhaInput = document.getElementById('senha');
  if (senhaInput) {
    senhaInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') verificar();
    });
  }

  if (sessionStorage.getItem('liberado') === 'sim') {
    var gate = document.getElementById('gate');
    var content = document.getElementById('content');
    if (gate) gate.style.display = 'none';
    if (content) content.style.display = 'block';
    iniciarMusica();
  }
});
