const submenuToggles = document.querySelectorAll(
  ".navbar-mobile__submenu-toggle"
);

submenuToggles.forEach((submenuToggle) => {
  submenuToggle.addEventListener("click", () => {
    const menuItem = submenuToggle.closest(".navbar-mobile__menu-item");

    menuItem.classList.toggle("navbar-mobile__menu-item-expanded");
  });
});
