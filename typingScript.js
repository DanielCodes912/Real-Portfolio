document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typing-text");
  const texts = ["I am a freelance frontend web developer.", "I'm a C++ student."];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[index];
    if (isDeleting) {
      textElement.textContent = currentText.substring(0, charIndex--);
    } else {
      textElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
    
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();
});
