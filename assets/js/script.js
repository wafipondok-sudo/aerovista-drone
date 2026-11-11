
document.addEventListener("DOMContentLoaded", function () {

  // MOBILE MENU
  const toggle = document.querySelector(".menu-btn");
  const menu = document.querySelector(".nav-links");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("open");

      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // AUTOMATIC FOOTER YEAR
  document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

});
