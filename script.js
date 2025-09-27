document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typed-text');
  const cursorElement = document.querySelector('.cursor');
  const fullText = "Para ti Leonela, Tus Flores Amarillas";
  let i = 0;
  const speed = 100; // Velocidad de escritura (milisegundos por letra)

  function typeWriter() {
    if (i < fullText.length) {
      textElement.innerHTML += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // Cuando termina de escribir, el cursor deja de parpadear
      cursorElement.style.animation = 'none';
      cursorElement.style.opacity = '0';
    }
  }

  // Inicia la animación de escritura
  typeWriter();
});
