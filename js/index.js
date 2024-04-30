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
});
