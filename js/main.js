var menuButton = document.getElementById("menuButton");
var sidebar = document.getElementById("sidebar");
var mobileNavigation = window.matchMedia("(max-width: 768px)");

function updateMenuState(isOpen) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

menuButton.addEventListener("click", function () {
  if (mobileNavigation.matches) {
    sidebar.classList.toggle("is-open");
    updateMenuState(sidebar.classList.contains("is-open"));
    return;
  }

  sidebar.classList.toggle("is-collapsed");
  updateMenuState(!sidebar.classList.contains("is-collapsed"));
});

mobileNavigation.addEventListener("change", function (event) {
  sidebar.classList.remove("is-open", "is-collapsed");
  updateMenuState(!event.matches);
});

updateMenuState(!mobileNavigation.matches);

