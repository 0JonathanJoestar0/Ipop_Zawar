document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");

  // Función para abrir/cerrar el menú
  function toggleMenu() {
    menu.classList.toggle("open");
  }

  // Evento click en el botón de menú
  menuIcon.addEventListener("click", function () {
    toggleMenu();
  });

  const videoDesktop = document.getElementById("video-background-desktop");
  const videoMobile = document.getElementById("video-background-mobile");

  function toggleVideo() {
    if (window.innerWidth <= 600) {
      videoDesktop.style.display = "none"; // Ocultar el video de escritorio
      videoMobile.style.display = "block"; // Mostrar el video móvil
    } else {
      videoDesktop.style.display = "block"; // Mostrar el video de escritorio
      videoMobile.style.display = "none"; // Ocultar el video móvil
    }
  }

  // Ejecutar toggleVideo al cargar y redimensionar la ventana
  toggleVideo();
  window.addEventListener("resize", toggleVideo);
});
