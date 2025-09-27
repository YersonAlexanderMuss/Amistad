document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typed-text');
  const fullText = "Para ti Leonela, Tus Flores Amarillas";
  let i = 0;
  const speed = 100; // Velocidad de escritura (milisegundos por letra)

  function typeWriter() {
    if (i < fullText.length) {
      textElement.innerHTML += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  // Inicia la animación de escritura
  typeWriter();
});
